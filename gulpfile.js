'use strict'

const gulp = require('gulp')
const es = require('event-stream')
const source = require('vinyl-source-stream')
const browserify = require('browserify')
const glob = require('glob')
const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const electron = require('electron-connect').server.create()

function onError (err) {
  console.error(err.message + '\n' + err.codeFrame)
  this.emit('end')
}

gulp.task('build-client-bundles', (done) => {
  glob('./app/js/*.js', (err, files) => {
    if (err) done(err)

    let tasks = files.map((entry) => {
      return browserify({
          entries: [entry],
          ignoreMissing: true,
          detectGlobals: false,
          debug: true
        })
        .on('error', onError)
        .transform('babelify')
        .on('error', onError)
        .bundle()
        .on('error', onError)
        .pipe(source(entry))
        .on('error', onError)
        .pipe(rename({
          dirname: 'js',
        }))
        .on('error', onError)
        .pipe(gulp.dest('./build'))
    })

    es.merge(tasks).on('end', done)
  })
})

gulp.task('build-client-scss', (done) => {
  glob('./app/styles/index.scss', (err, files) => {
    if (err) done(err)

    let tasks = files.map((entry) => {
      return gulp.src(entry)
        .pipe(sass())
        .on('error', onError)
        .pipe(rename({
          dirname: 'css'
        }))
        .on('error', onError)
        .pipe(cssmin())
        .on('error', onError)
        .pipe(gulp.dest('./build'))
    })

    es.merge(tasks).on('end', done)
  })
})

gulp.task('build-client-html', (done) => {
  glob('./app/*.html', (err, files) => {
    if (err) done(err)

    let tasks = files.map((entry) => {
      return gulp.src(entry)
        .on('error', onError)
        .pipe(gulp.dest('./build'))
    })

    es.merge(tasks).on('end', done)
  })
})

gulp.task('build-client-assets', (done) => {
  glob('./app/assets/**/*', (err, files) => {
    if (err) done(err)

    let tasks = files.map((entry) => {
      console.log(entry)
      return gulp.src(entry)
        .on('error', onError)
        .pipe(rename({
          dirname: 'assets'
        }))
        .on('error', onError)
        .pipe(gulp.dest('./build'))
    })

    es.merge(tasks).on('end', done)
  })
})

gulp.task('build-client', ['build-client-bundles', 'build-client-scss', 'build-client-html', 'build-client-assets'])


gulp.task('build-server', (done) => {
  glob('./src/*.js', (err, files) => {
    if (err) done(err)

    let tasks = files.map((entry) => {
      return gulp.src(entry)
        .on('error', onError)
        .pipe(babel())
        .on('error', onError)
        .pipe(gulp.dest('./build'))
    })

    es.merge(tasks).on('end', done)
  })
})


gulp.task('build', ['build-client', 'build-server'])


gulp.task('watch-client', () => {
  gulp.watch('./app/**/*', (e) => {
    console.log('Client file ' + e.path + ' was ' + e.type + ', rebuilding...')
    gulp.start('build-client')
  })
})

gulp.task('watch-server', () => {
  gulp.watch('./src/**/*', (e) => {
    console.log('Server file ' + e.path + ' was ' + e.type + ', rebuilding...')
    gulp.start('build-server')
  })
})

gulp.task('watch', ['watch-client', 'watch-server'])


gulp.task('default', ['build', 'watch'], () => {
  console.log('Starting Electron')
  electron.start()

  gulp.watch('./build/index.js', () => {
    console.log('Restarting Electron')
    electron.restart()
  })

  gulp.watch('./build/{assets,css,js}/**/*', () => {
    console.log('Reloading Electron')
    electron.reload()
  })

})
