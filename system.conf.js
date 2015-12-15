System.config({
	paths: {
		"es6-module-loader": "../node_modules/es6-module-loader/dist/es6-module-loader.js",
		"es6-promise": "../node_modules/es6-promise/dist/es6-promise.js",
		"systemjs": "../node_modules/systemjs/dist/system.js",
		"system-polyfills": "../node_modules/systemjs/dist/system-polyfills.js",
		"angular2/angular2": "../node_modules/angular2/bundles/angular2.dev.js"
	},

	map: {
		"angular2/angular2": "angular2/angular2"
	},

	packages: {
		"app": {
			defaultExtensions: "js"
		}
	},

	meta: {
		"angular2/angular2": {
			"format": "global",
			"exports": "angular2/angular2"
		}
	},

	transpiler: null
});
