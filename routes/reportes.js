const {Router} = require('express')
const Reporte = require('../models/reportes')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const reportes = await Reporte.find()
    if(!reportes){
      throw new Error('No existen reportes.')
    }
    res.status(200).json(reportes)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.post('/', async (req, res) => {
  const reporte = req.body
  const nuevoReporte = new Reporte(reporte)
  try {
    const reporte = await nuevoReporte.save()
    if(!reporte){
      throw new Error('Ocurrió un error al guardar el reporte.')
    }
    res.status(200).json(reporte)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

router.put('/:id', async (req, res) => {
  const {id} = req.params
  const reporte = req.body
  try {
    if(!reporte){
      throw new Error('No se encontró el reporte')
    }
    Reporte.findByIdAndUpdate(id,reporte,{new:true},
      (err, todo) => {
      // Handle any possible database errors
          if (err) return res.status(500).send(err);
          return res.send(todo);
      })
  } catch (error) {
    res.status(404).json({message: error.message})
  }
})

router.delete('/:id', async (req, res) => {
  const {id} = req.params
try {
  const reporte = Reporte.findById(id)
  if(!reporte){
    throw new Error('No se encontró reporte')
  }
  const removed = await reporte.remove()
  if(!removed){
    throw new Error('Ocurrió un problema al eliminar el reporte')
  }
  res.status(200).json({id})
} catch (error) {
  res.status(404).json({message: error.message})
}
})

module.exports = router