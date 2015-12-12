module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		"pkg": grunt.file.readJSON("package.json"),

		"meta": {
			"src": "src/app/**/*.ts"
		},

		"ts": {
			"default" : {
				"src": [
					"<%= meta.src %>",
					"!node_modules/**/*.ts"
				]
			},
			"options": {
				"target": "ES5",
				"module": "commonjs",
				"sourceMap": true,
				"emitDecoratorMetadata": true,
				"experimentalDecorators": true,
				"removeComments": false,
				"noImplicitAny": true
			}
		},

		"tslint": {
			"app": {
				"src": [
					"<%= meta.src %>"
				]
			},
			"options": {
				"configuration": "tslint.json"
			}
		}
	});

	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks("grunt-tslint");

	// Default task(s).
	grunt.registerTask("default", ["tslint:app", "ts"]);

};
