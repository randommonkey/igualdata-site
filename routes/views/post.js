const keystone = require('keystone');
const Post = keystone.list('Post').model

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const { locals } = res;
	const { post } = req.params

	// Set locals
	locals.section = 'blog';
	locals.data = {
		post: [],
	};

	// Load the current post
	view.on('init', function (next) {

		var q = Post.findOne({
			state: 'published',
			slug: post,
		}).populate('author');

		q.exec(function (err, result) {
			locals.data.post = result;
			if (result) {
				locals.title = `${locals.data.post.title} | El Mundial de la igualdad`;
			} else {
				locals.title = 'El Mundial de la igualdad';
			}
			next(err);
		});

	});

	// Render the view
	view.render('post');
};
