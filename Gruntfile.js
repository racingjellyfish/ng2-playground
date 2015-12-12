module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		tslint: {
			options: {
				configuration: "tslint.json"
			},
			app: {
				src: [
					"src/app/**/*.ts"
				]
			}
		}
	});

	grunt.loadNpmTasks("grunt-tslint");

	// Default task(s).
	grunt.registerTask("default", ["tslint:app"]);

};
