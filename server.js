const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const path = require('path')

const { port, mongoURI } = require('./config')
const reportesRoutes = require('./routes/reportes')

app.use(cors())
app.use(bodyparser.json())
app.use(morgan('tiny'))

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err))

app.use('/api/reportes', reportesRoutes)

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/public'))
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Express is running at port ${port}`))