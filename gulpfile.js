var gulp = require('gulp')
var plugins = require('gulp-load-plugins')()

// js处理
gulp.task('scripts', function () {
  gulp.src('./src/index.js')
    .pipe(plugins.uglify())
    .pipe(plugins.rename('./Elegant.js'))
    .pipe(gulp.dest('dist/'))
})

// 代码检测
// gulp.task('eslint', function () {
//   return gulp.src('./source/javascript/*.js')
//     .pipe(plugins.eslint({
//       "rules": {
//         "camelcase": 2,
//         "comma-dangle": 2,
//         "semi": [2, "never"],
//         "quotes": [2, "single"]
//       },
//       "parser": "babel-eslint"
//     }))
//     .pipe(plugins.plumber({
//       errorHandler: function (err) {
//         console.log(err.message)
//       }
//     }))
//     .pipe(plugins.eslint.format())
//     .pipe(plugins.eslint.failAfterError())
//     .pipe(plugins.notify({ message: 'eslint' }))
// })

gulp.task('default', ['scripts'])