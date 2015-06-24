
var React = require('react')
var Root = require('./components/Root.jsx')

module.exports = function render(locals, callback) {
  var html = React.renderToStaticMarkup(React.createElement(Root, locals))
  callback(null, '<!DOCTYPE html>' + html)
}

