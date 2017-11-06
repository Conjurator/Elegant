import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'
import browserify from 'browserify'
import babelify from 'babelify'

const plugins = gulpLoadPlugins()

// js处理
gulp.task('build', function () {
    gulp.src('./src/index.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(plugins.uglify())
        .pipe(plugins.rename('./Elegant.min.js'))
        .pipe(gulp.dest('dist/'))
})

gulp.task('transform', function () {
    return browserify({
        entries: './src/index.js',
        standalone: 'Elegant',
        transform: babelify,
        debug: true
    })
        .bundle()
        .pipe(source('Elegant.js'))
        .pipe(buffer())
        .pipe(gulp.dest('build/'))
})

// development to transform es6 code
gulp.task('dev', function () {
    gulp.watch(['src/*.js'], ['transform'])
})

// default to build
gulp.task('default', ['build'])
