const keystone = require('keystone')

exports = module.exports = function (req, res) {
  const view = new keystone.View(req, res)
  const { locals } = res

  locals.title = 'Notas de partido | Mundial de la igualdad'

  view.render('matches')
}