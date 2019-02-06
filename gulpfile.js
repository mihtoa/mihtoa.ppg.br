const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

function css() {
  return src('src/css/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'))
}

function js() {
  return src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);

watch('src/css/*.scss', css);
watch('src/js/*.js', js);
