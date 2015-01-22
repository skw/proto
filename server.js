var connect = require('connect')
var serveStatic = require('serve-static')

var app = connect()

app.use(serveStatic('./public', {'index': ['index.html', 'index.htm']}))
app.listen(3000)