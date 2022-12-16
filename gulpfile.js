const {src , dest, series, watch} = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    csso = require('gulp-csso'),
    pug = require('gulp-pug'),
    pref = require('gulp-autoprefixer'),
    sync = require('browser-sync').create(),
    con = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    json = require('gulp-json-srv')

function pugToHtml() {
    return src('src/pug/index.pug')
        .pipe(pug())
        .pipe(dest('dist'));
};

function toCss() {
    return src('src/sass/main.sass')
        .pipe(sass())
        .pipe(pref({
            browsers: ['last 2 versions']
        }))
        .pipe(csso())
        .pipe(con('css/styles-min.css'))
        .pipe(cssmin())
        .pipe(dest('dist'))
}

function serve() {
    sync.init({
        server: {
            baseDir: "./dist"
        },
        online: true,
        tunnel: true
    })

    watch('src/pug/**.pug', series(pugToHtml)).on('change', sync.reload);
    watch('src/sass/**.sass', series(toCss)).on('change', sync.reload)
}

// Для fetch POST
// function jsonSrv() {
//     let server = json.create();
//     return src("./dist/db.json")
//         .pipe(server.pipe());
// }

exports.toCss = toCss;
exports.pugToHtml = pugToHtml;
// exports.jsonSrv = jsonSrv;
exports.default = series(pugToHtml,toCss,serve);