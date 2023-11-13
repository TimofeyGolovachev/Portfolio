const {src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const { stream } = require('browser-sync');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const del = require('del');
const browserSync = require('browser-sync').create();


const isDev = function (){
    return !argv.prod;
}

const isProd = function (){
    return !!argv.prod;
}

const clean = () => {
    return del(['prod'])
}

const resources = () => {
    return src('src/resources/**')
    .pipe(dest('prod/resources/'))
}

const styles = () => {
  // return src('src/styles/**/*.css')
  return src('src/styles/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
      cascade: false,
  }))
  .pipe(gulpif(isProd(), cleanCSS({
      level: 2
  })))
  .pipe(gulpif(isDev(),sourcemaps.write()))
  .pipe(dest('prod/styles/'))
  .pipe(browserSync.stream())
}

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(gulpif(isProd(), htmlMin({
        collapseWhitespace: true,
    })))
    .pipe(dest('prod'))
    .pipe(browserSync.stream())

}

const svgSprites = () => {
    return src('src/images/svg/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    }))
    .pipe(dest('prod/images'))
}

const scripts = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(gulpif(isProd(), uglify({
        toplevel: true
    })).on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('prod'))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'prod'
        }
    })
}

const images = () => {
    return src([
        'src/images/**/*.jpg',
        'src/images/**/*.jpeg',
        'src/images/**/*.png',
        'src/images/*.svg',
        'src/images/**/*.webp',
    ])
    .pipe(image())
    .pipe(dest('prod/images'))
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.scss', styles)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)

exports.styles = styles
exports.clean = clean
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.svgSprites = svgSprites
exports.default = series(clean, resources, htmlMinify, styles, scripts, images, svgSprites, watchFiles)
