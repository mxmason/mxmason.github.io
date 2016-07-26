requirejs.config({
    baseUrl: 'js/vendor',
	paths: {
		modernizr: 'modernizr.min',
		jquery: 'jquery-3.1.0.min',
		parallax: 'parallax.min'
	},
    shim: {'parallax' : ['jquery']},
	deps: ['../app']
});
