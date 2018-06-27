const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Event Model
 * ==========
 */

const Event = new keystone.List('Event', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Event.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	featured: { type: Types.Boolean },
	inscription: { type: String, dependsOn: { featured: true } },
	image: { type: Types.CloudinaryImage, folder: 'igualdata/', dependsOn: { featured: true } },
	content: { type: Types.Markdown, wysiwyg: true, height: 400 },
	post: { type: String },
});


Event.defaultColumns = 'title, state|20%, publishedDate|20%';
Event.register();
