module.exports = function(gulp, plugins, folders, config) {

  gulp.task('init-reducers', function() {
    return gulp.src(config.path.join(folders.init, 'store.js'))
  	 .pipe(plugins.inject(gulp.src(['public/app/**/*.reducer.js'], {
  		read: false
  	 }), {
  		relative: true,
  		starttag: '// init reducers',
  		endtag: '// end init reducers',
  		transform: function(filepath, file, i, length) {
        var varName = filepath.match(/[^\/]+(?=\.reducer.js$)/)
        if(i === length-1) {
          return varName + ''
        } else {
          return varName + ','
        }

  		}
  	 }))
  	 .pipe(gulp.dest(folders.init))
  })

  gulp.task('import-reducers', function() {
    return gulp.src(config.path.join(folders.init, 'store.js'))
  	 .pipe(plugins.inject(gulp.src(['public/app/**/*.reducer.js'], {
  		read: false
  	 }), {
  		relative: true,
  		starttag: '// inject reducers',
  		endtag: '// end inject reducers',
  		transform: function(filepath, file, i, length) {
        var varName = filepath.match(/[^\/]+(?=\.reducer.js$)/)
  		  return `import ${varName} from '${filepath}'`
  		}
  	 }))
  	 .pipe(gulp.dest(folders.init))
  })

}
