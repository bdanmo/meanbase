module.exports = function(gulp, plugins, folders, config) {

  gulp.task('inject-views', function() {
    return gulp.src(config.path.join(folders.init, 'routes.js'))
  	 .pipe(plugins.inject(gulp.src(['public/app/**/*.view.js'], {
  		read: false
  	 }), {
  		relative: true,
  		starttag: '// inject views',
  		endtag: '// end inject views',
  		transform: function(filepath, file, i, length) {
        var varName = filepath.match(/[^\/]+(?=\.view.js$)/)
  		  return `import ${varName} from '${filepath}'`
  		}
  	 }))
  	 .pipe(gulp.dest(folders.init))
  })

}
