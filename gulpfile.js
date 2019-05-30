const { src, dest, parallel, watch } = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

function css() {
  return src('src/css/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
}

function js() {
  return src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      comments: false,
      minified: true,
      presets: ['@babel/env']
    }))
    .pipe(webpack())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
}

exports.js = js;
exports.css = css;
//exports.default = parallel(css, js);
exports.default = parallel(css);

watch('src/css/*.scss', css);
//watch('src/js/*.js', js);
