const { Schema, model } = require('mongoose')

const ReporteSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  fraccion: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  nombre: {
    type: String
  },
  ligamento: {
    type: String
  },
  lig: {
    type: String
  },
  acabado: {
    type: String
  },
  aca: {
    type: String
  },
  composicion: {
    type: String
  },
  filfib: {
    type: String
  },
  gramaje: {
    type: String
  },
  ancho: {
    type: String
  },
  tejido: {
    type: String
  },
  otros: {
    type: String
  },
  conclusion: {
    type: String
  },
  creado: {
    type: Number,
    required: true,
  },
  editado: {
    type: Number
  }
})

const Reporte = model('reporte', ReporteSchema)

module.exports = Reporte