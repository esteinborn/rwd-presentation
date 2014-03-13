/* global module:false */
module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			main: {
				files: {
					'css/theme/default.css': 'css/theme/source/default.scss',
					'css/theme/beige.css': 'css/theme/source/beige.scss',
					'css/theme/night.css': 'css/theme/source/night.scss',
					'css/theme/serif.css': 'css/theme/source/serif.scss',
					'css/theme/simple.css': 'css/theme/source/simple.scss',
					'css/theme/sky.css': 'css/theme/source/sky.scss',
					'css/theme/moon.css': 'css/theme/source/moon.scss',
					'css/theme/solarized.css': 'css/theme/source/solarized.scss',
					'css/print/speaker.css': 'css/theme/source/print-speaker.scss',
				}
			}
		},


		watch: {
			theme: {
				files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
				tasks: 'themes'
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-sass' );

	// Default task
	grunt.registerTask( 'default', [ 'sass', 'watch'] );

	// Theme task
	grunt.registerTask( 'themes', [ 'sass' ] );

};
