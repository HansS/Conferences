module.exports = (grunt)=>
	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		coffee: {
			compile:{
				files:{
					'dist/Sample.js' : 'src/Sample.coffee'
				}
			}
		}
		})

	grunt.loadNpmTasks "grunt-contrib-coffee"
	grunt.registerTask "default", ['coffee']
