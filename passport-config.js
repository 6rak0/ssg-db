const { authenticate } = require('passport')
const bcrypt = require('bcrypt')

const LocalStrategy = require('passport-local').Strategy

function initialize(passport, getUserByName, getUserById){
  const authenticateUser = async (name, password, done) => {
    const user = await getUserByName(name)
    if(user == null){
      return done(null, false, {message: 'No existe ese usuario'})
    }
    try {
      if(await bcrypt.compare(password, user.password)){
        return done(null, user)
      } else {
        return done(null, false, {message: 'password incorrecto'})
      }
    } catch (error) {
      return done(error)
    }
  }
  passport.use(new LocalStrategy({usernameField: 'name'}, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser(async (id, done) => {
    return done(null, await getUserById(id))
  })
}

module.exports = initialize