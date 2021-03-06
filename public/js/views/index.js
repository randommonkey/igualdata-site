/* eslint no-undef: off, no-new: off */
const trigger = document.querySelector('.scroller');

const moveTo = new MoveTo({
	tolerance: 100,
});

moveTo.registerTrigger(trigger);

new Vue({
	el: '#app',
	filters: {
		imageDir (str) {
			return `/images/teams/${str}`;
		},
	},
	data: {
		groups: [
			{
				group: 'a',
				teams: [
					{
						country: 'Egipto',
						image: 'egipto.png',
					},
					{
						country: 'Rusia',
						image: 'rusia.png',
					},
					{
						country: 'Arabia Saudita',
						image: 'arabia_saudita.png',
					},
					{
						country: 'Uruguay',
						image: 'uruguay.png',
					},
				],
			},
			{
				group: 'b',
				teams: [
					{
						country: 'Irán',
						image: 'iran.png',
					},
					{
						country: 'Marruecos',
						image: 'marruecos.png',
					},
					{
						country: 'Portugal',
						image: 'portugal.png',
					},
					{
						country: 'España',
						image: 'espana.png',
					},
				],
			},
			{
				group: 'c',
				teams: [
					{
						country: 'Australia',
						image: 'australia.png',
					},
					{
						country: 'Dinamarca',
						image: 'dinamarca.png',
					},
					{
						country: 'Francia',
						image: 'francia.png',
					},
					{
						country: 'Perú',
						image: 'peru.png',
					},
				],
			},
			{
				group: 'd',
				teams: [
					{
						country: 'Argentina',
						image: 'argentina.png',
					},
					{
						country: 'Croacia',
						image: 'croacia.png',
					},
					{
						country: 'Islandia',
						image: 'islandia.png',
					},
					{
						country: 'Nigeria',
						image: 'nigeria.png',
					},
				],
			},
			{
				group: 'e',
				teams: [
					{
						country: 'Brasil',
						image: 'brasil.png',
					},
					{
						country: 'Costa Rica',
						image: 'costa_rica.png',
					},
					{
						country: 'Suiza',
						image: 'suiza.png',
					},
					{
						country: 'Serbia',
						image: 'serbia.png',
					},
				],
			},
			{
				group: 'f',
				teams: [
					{
						country: 'Alemania',
						image: 'alemania.png',
					},
					{
						country: 'Corea del Sur',
						image: 'corea_del_sur.png',
					},
					{
						country: 'México',
						image: 'mexico.png',
					},
					{
						country: 'Suecia',
						image: 'suecia.png',
					},
				],
			},
			{
				group: 'g',
				teams: [
					{
						country: 'Bélgica',
						image: 'belgica.png',
					},
					{
						country: 'Inglaterra',
						image: 'inglaterra.png',
					},
					{
						country: 'Panamá',
						image: 'panama.png',
					},
					{
						country: 'Túnez',
						image: 'tunez.png',
					},
				],
			},
			{
				group: 'h',
				teams: [
					{
						country: 'Colombia',
						image: 'colombia.png',
					},
					{
						country: 'Japón',
						image: 'japon.png',
					},
					{
						country: 'Polonia',
						image: 'polonia.png',
					},
					{
						country: 'Senegal',
						image: 'senegal.png',
					},
				],
			},
		],
	},
});
