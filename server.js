require('dotenv').config()

let express = require('express')
let path = require('path')

let app = express()

app.use(require('helmet')())
app.use(require('compression')())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))

require('./routes')(app)

app.listen(process.env.PORT, () => console.log('Running on port ' + process.env.PORT))