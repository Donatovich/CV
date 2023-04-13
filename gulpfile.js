const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

function styles() {
    return src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(dest('dist/assets/css'))
        .pipe(browserSync.stream());
}

function html() {
    return src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream());
}

function images() {
    return src('src/assets/**/*.{jpg,jpeg,png,svg,gif}')
        .pipe(dest('dist/assets'))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({
        server: {
            baseDir: './dist',
        },
    });

    watch('src/**/*.scss', styles).on('change', browserSync.reload);
    watch('src/**/*.html', html).on('change', browserSync.reload);
    watch('src/assets/**/*.{jpg,jpeg,png,svg,gif}', images).on('change', browserSync.reload);
}

exports.default = series(parallel(styles, html, images), serve);
