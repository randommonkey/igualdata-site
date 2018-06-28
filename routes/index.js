const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
const routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/blog', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/galeria', routes.views.gallery);
	app.get('/figus-de-la-igualdad', routes.views.app);
};
