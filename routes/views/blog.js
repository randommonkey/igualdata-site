const keystone = require('keystone');

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const { locals } = res;

	// Init locals
	locals.section = 'blog';
	locals.title = 'Blog | El Mundial de la igualdad';
	locals.data = {
		posts: [],
	};
	// Load the posts
	view.on('init', function (next) {
		const q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10,
			filters: {
				state: 'published',
			},
		})
			.sort('-publishedDate')
			.populate('author');

		q.exec(function (err, results) {
			locals.data.posts = results;
			next(err);
		});
	});

	// Render the view
	view.render('blog');
};
