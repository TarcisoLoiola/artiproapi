//Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const PORT = process.env.PORT || 8080

// Initialize Express
const app = express()
 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

// Configure middleware

// Use body-parser for handling form submissions
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
// Use express.static to serve the public folder as a static directory
app.use(express.static('public'))
//Set handlebars
const expHbs = require('express-handlebars')
app.engine('handlebars', expHbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (err, res, next ) => {
  res.json({ name: 'Tarciso'})
})

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Artipro'
mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})


// Start the server
app.listen(PORT, function () {
    console.log('App running on port ' + PORT + '!')
})


/*


// Use body-parser for handling form submissions
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(routes)
app.use(express.static('public'))

const expHbs = require('express-handlebars')
app.engine('handlebars', expHbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

require('./routes/api/html-route.js')(app)

const PORT = process.env.PORT || 8080

const MONGODB_URI = 'mongodb://artipro:artipro123@ds259878.mlab.com:59878/heroku_crj3xpw2'
mongoose.Promise = Promise
mongoose.connect(MONGODB_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(res => console.log('MongoDB is running!'))
  .catch(err => console.log(err))

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.`)
})
*/
