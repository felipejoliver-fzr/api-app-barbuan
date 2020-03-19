const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Sucesso')
})

app.listen(3000, () => {
    console.log('api funcionando...')
})