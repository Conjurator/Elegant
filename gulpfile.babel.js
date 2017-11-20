import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'
import browserify from 'browserify'
import babelify from 'babelify'

const plugins = gulpLoadPlugins()

const transform = (env) => {
    let transformSource = browserify({
        entries: './src/index.js',
        standalone: 'Elegant',
        transform: babelify,
        debug: env === 'dev' ? true : false
    })
        .bundle()
        .pipe(source('Elegant.js'))
        .pipe(buffer())

    let result = transformSource
    if (env === 'dev') {
        result = result
                    .pipe(gulp.dest('build/'))
    } else {
        result = result
                    .pipe(plugins.uglify())
                    .pipe(plugins.rename('./Elegant.min.js'))
                    .pipe(gulp.dest('dist/'))
    }

    return result
}

// js处理
gulp.task('build', function () {
    return transform('prod')
})

gulp.task('transform', function () {
    return transform('dev')
})

// development to transform es6 code
gulp.task('dev', function () {
    gulp.watch(['src/*.js'], ['transform'])
})

// default to build
gulp.task('default', ['build'])
