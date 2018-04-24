const keystone = require('keystone');
const Gallery = keystone.list('Gallery').model

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;

	// Set locals
	locals.section = 'gallery';
	locals.title = 'Galería | El Mundial de la igualdad'

	// Load the galleries by sortOrder
	view.query('galleries', Gallery.find().sort('sortOrder'));

	// Render the view
	view.render('gallery');

};
