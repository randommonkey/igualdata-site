const keystone = require('keystone');
const Event = keystone.list('Event').model;

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const { locals } = res;
	locals.title = 'Mundial de la igualdad';
	locals.data = {};

	view.on('init', function (next) {
		Event.find({ state: 'published' }, function (err, results) {
			if (err) {
				return next(err);
			}
			locals.data.events = results.sort((a, b) => new Date(b) - new Date(a));
			locals.data.featured = locals.data.events.find(event => event.featured);
			next();
		});
	});

	// Render the view
	view.render('index');
};
