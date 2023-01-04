const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
app.use(express.json())


//Defining paths
const publicDirectoryPath = path.join(__dirname + '../public')
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Engine set up
app.set('view engine', '.hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath));
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/img',express.static('public/img'));

app.get('/',(req, res)=> {
    res.render('index', {

    })
})


const port = process.env.PORT

app.listen(port, ()=> {
    console.log('Server is up on port '+ port)
})