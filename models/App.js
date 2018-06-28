const keystone = require('keystone');
const { Types } = keystone.Field;

const App = new keystone.List('App');
const teams = [
	{ label: 'Rusia', value: 0 },
	{ label: 'Arabia Saudí', value: 1 },
	{ label: 'Egipto', value: 2 },
	{ label: 'Uruguay', value: 3 },
	{ label: 'Marruecos', value: 4 },
	{ label: 'Irán', value: 5 },
	{ label: 'España', value: 6 },
	{ label: 'Portugal', value: 7 },
	{ label: 'Perú', value: 8 },
	{ label: 'Australia', value: 9 },
	{ label: 'Dinamarca', value: 10 },
	{ label: 'Francia', value: 11 },
	{ label: 'Croacia', value: 12 },
	{ label: 'Nigeria', value: 13 },
	{ label: 'Argentina', value: 14 },
	{ label: 'Islandia', value: 15 },
	{ label: 'Suiza', value: 16 },
	{ label: 'Serbia', value: 17 },
	{ label: 'Costa Rica', value: 18 },
	{ label: 'Brasil', value: 19 },
	{ label: 'México', value: 20 },
	{ label: 'Alemania', value: 21 },
	{ label: 'Corea del Sur', value: 22 },
	{ label: 'Suecia', value: 23 },
	{ label: 'Panamá', value: 24 },
	{ label: 'Túnez', value: 25 },
	{ label: 'Bélgica', value: 26 },
	{ label: 'Inglaterra', value: 27 },
	{ label: 'Japón', value: 28 },
	{ label: 'Polonia', value: 29 },
	{ label: 'Senegal', value: 30 },
	{ label: 'Colombia', value: 31 },
];

App.add(
	{
		url: {
			type: String,
		},
		teamA: {
			label: 'Equipo A',
			type: Types.Select,
			numeric: true,
			options: teams,
		},
		teamB: {
			label: 'Equipo B',
			type: Types.Select,
			numeric: true,
			options: teams,
		},
		header: {
			label: 'Header',
			type: Types.Boolean,
			default: false,
		},
		footer: {
			label: 'Footer',
			type: Types.Boolean,
			default: true,
		},
	},
);

App.defaultColumns = 'url';
App.register();
