require('dotenv').config()

let express = require('express')
let path = require('path')

let app = express()

app.use(require('helmet')())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/static', express.static(path.join(__dirname, 'static')))

require('./routes')(app)

app.listen(process.env.PORT, () => console.log('Running on port ' + process.env.PORT))