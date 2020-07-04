const {Router} = require('express')
const passport = require('passport')
//const bcrypt = require('bcrypt')
const Reporte = require('../models/reportes')
const User = require('../models/users')
const router = Router()
const initializePassport = require('../passport-config')

initializePassport(
  passport, 
  async name => await User.findOne({name: name}),
  async id => await User.findById(id)
)

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureFlash: true
}))

router.get('/logout', function(req, res){
  try {
    req.logout();
    res.json({message:'logged out'})
  } catch (error) {
    res.json({message:error.message})
  }
});

// router.post('/registro',checkNotAuthenticated, async (req, res) => {
//   const hashedPassword = await bcrypt.hash(req.body.password, 10)
//   const newUser = new User({name:req.body.name, password: hashedPassword})
//   try {
//     await newUser.save()
//     res.status(201)
//   } catch (error) {
//     res.json({message:error.message})
//   }
// })

router.get('/reportes', checkAuthenticated, async (req, res) => {
  try {
    const reportes = await Reporte.find()
    res.json(reportes)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

router.post('/reportes', checkAuthenticated, async (req, res) => {
  const nuevoReporte = new Reporte(req.body)
  try {
    await nuevoReporte.save()
    res.status(201).json(nuevoReporte)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
})

router.put('/reportes/:id', checkAuthenticated, getReporte, async (req, res) => {
  try {
     await Reporte.findByIdAndUpdate(req.params.id, req.body, {new:true,useFindAndModify:false},
      (err, todo) => {
          if (err) return res.status(500).json({message:err.message});
          return res.send(todo);
      })
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.delete('/reportes/:id', checkAuthenticated, getReporte, async (req, res) => {
  try {
    await res.reporte.deleteOne()
    res.json({message:'reporte eliminado correctamente', id:res.reporte._id})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

async function getReporte(req, res, next){
  let reporte
  try {
    reporte = await Reporte.findById(req.params.id)
    if(reporte == null){
      return res.status(404).json({message:'reporte no encontrado'})
    }
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
  res.reporte = reporte
  next()
}

function checkAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next()
  }
}

// function checkNotAuthenticated(req, res, next){
//   if(req.isAuthenticated()){
//     return res.redirect('/')
//   }
//   next()
// }

module.exports = router