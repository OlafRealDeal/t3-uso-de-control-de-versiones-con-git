const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')

// Creamos el servidor
const app = express()

// Conectamos a la Base de Datos
conectarDB();
app.use(cors())

app.use(express.json())

app.use('/api/products', require('./routes/product'))

app.listen(4000, () => {
    console.log('El servidor esta corriendo correctamente');
})