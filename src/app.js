const express  = require('express')
const path  = require('path')
const hbs  = require('hbs')


//Initializing express
const app = express();

//Creating  server paths
const pathRootDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setting app configs
app.use(express.static(pathRootDirectory))

app.set('view engine', hbs)
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res)=>{
    res.render('index.hbs', {
        title:'Homepage'
    })
})

app.get('/dashboard', (req, res)=>{
     res.render('dashboard.hbs', {
         title:'Homepage'
     })
})

app.listen(3000, ()=>{
   console.log('Server running on port 3000')
})
