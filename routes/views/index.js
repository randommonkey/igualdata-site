const keystone = require('keystone');

exports = module.exports = function (req, res) {

	const view = new keystone.View(req, res);
	const { locals } = res;
	locals.title = 'Mundial de la igualdad';

	// Render the view
	view.render('index');
};
