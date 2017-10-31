import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import babel from 'gulp-babel'

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
    gulp.src('./src/index.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(plugins.rename('./Elegant.js'))
        .pipe(gulp.dest('build/'))
})

// development to transform es6 code
gulp.task('dev', function () {
    gulp.watch(['src/*.js'], ['transform'])
})

// default to build
gulp.task('default', ['build'])
