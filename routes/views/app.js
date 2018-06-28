const keystone = require('keystone');
const App = keystone.list('App').model;

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const { locals } = res;

	locals.title = 'Figus de la igualdad | Mundial de la igualdad';
	locals.data = {
		url: '',
	};

	view.on('init', async next => {
		try {
			let app = await App.find().exec();
			app = app[0];
			locals.data.url = `${app.url}?ocultarHeader=${app.header}&ocultarFooter=${app.footer}`;
			if (app.teamA) {
				locals.data.url = `${locals.data.url}&pais1=${app.teamA}`;
			}
			if (app.teamB) {
				locals.data.url = `${locals.data.url}&pais2=${app.teamB}`;
			}
		} catch (error) {
			return next(error);
		}
		next();
	});

	view.render('matches');
};
