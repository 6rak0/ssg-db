require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

const port = process.env.PORT || 3000
const reportesRoutes = require('./routes/reportes')

app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err))

app.use('/api/reportes', reportesRoutes)

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Express is running at port ${port}`))