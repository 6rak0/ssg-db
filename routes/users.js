const {Router} = require('express')
const path = require('path')
const bcrypt = require('bcrypt')
const passport = require('passport')
const User = require('../models/users')

const initializePassport = require('../passport-config')

initializePassport(
  passport, 
  async name => await User.findOne({name: name}),
  async id => await User.findById(id)
)

const router = Router()

router.get('/', checkAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname+'/../index.html'))
})
router.get('/login', checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname+'/../login.html'))
})
router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))
router.post('/api/login', checkNotAuthenticated, passport.authenticate('local', {
  //successRedirect: '/',
  //failureRedirect: '/login',
  failureFlash: true
}))
router.get('/registro', checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname+'/../registro.html'))
})
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
});

router.post('/test', (req, res) => {
  console.log(req.body.name, req.body.password);
})

router.post('/registro',checkNotAuthenticated, async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const newUser = new User({name:req.body.name, password: hashedPassword})
  try {
    await newUser.save()
    res.status(201).redirect('/login')
  } catch (error) {
    res.redirect('/registro')
  }
})

function checkAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return res.redirect('/')
  }
  next()
}

module.exports = router