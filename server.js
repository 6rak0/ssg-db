if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')

const port = process.env.PORT || 3000
//const reportesRoutes = require('./routes/reportes')
//const usersRoutes = require('./routes/users')
const allRoutes = require('./routes/all')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
//app.use('/', reportesRoutes)
//app.use('/', usersRoutes)
app.use('/api', allRoutes)

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Express is running at port ${port}`))