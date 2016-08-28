module.exports = function(gulp, plugins, folders, config) {

  gulp.task('import-stylus-files', function() {
    return gulp.src(config.path.join(folders.init, 'styles.styl'))
  	 .pipe(plugins.inject(gulp.src([
      'public/app/**/*.styl',
      'public/shared/**/*.styl',
  		'!' + config.path.join(folders.init, 'styles.styl')
  	 ], {
  		read: false
  	 }), {
  		relative: true,
  		starttag: '// inject stylus',
  		endtag: '// end inject stylus',
  		transform: function(filepath, file, i, length) {
  		  return "@import '" + filepath + "';"
  		}
  	 }))
  	 .pipe(gulp.dest(folders.init))
  })

}
