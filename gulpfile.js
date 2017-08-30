const gulp = require('gulp'),
      babel = require('gulp-babel'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      browserSync = require('browser-sync').create(),
      lintCheck = require('gulp-eslint'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      prettyError = require('gulp-prettyerror'),
      cssnano = require('gulp-cssnano');
const input = './js/src/perkyScript.js',
      output = './js';
gulp.task('babel', function() {
  return gulp.src(input)
    .pipe(babel())
    .pipe(gulp.dest(output));
});
gulp.task('lint', function(){
  return gulp.src(['./js/*.js'])
    .pipe(lintCheck())
    .pipe(lintCheck.format())
    .pipe(lintCheck.failAfterError());
});
gulp.task ('scripts', ['lint'], function() {
  gulp.src('./js/*.js')
    .pipe(babel( {
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(rename( {
      extname: '.min.js'
    }))
    .pipe(gulp.dest('build/js'));
});
gulp.task('hi', function(){
  console.log('Hello world!')
});
gulp.task('watch', function(){
  gulp.watch('./js/*.js', ['scripts'])
  gulp.watch('./js/src/*.js', ['babel'])
  gulp.watch('./css/*.css', ['sass']);
});
gulp.task('browser-sync', function() {
  browserSync.init ({
    server: {
      baseDir: './'
    }
  });
gulp.task('sass', function() {
    gulp.src('./css/style.css')
        .pipe(prettyError())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(cssnano())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./build/css'));
});
  gulp.watch(['build/js/*.js','build/css/*.min.css', 'index.html']).on('change', browserSync.reload);  //watches the build folder for changes to js because, when done, the browser will read minimal-ized files, not your pretty-looking .js file
  gulp.watch('./styles/*.css').on('change', browserSync.reload);
});
gulp.task('default', ['watch', 'browser-sync']);