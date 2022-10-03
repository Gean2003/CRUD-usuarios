const express = require('express')
const usersRouter = require('./routes/users.router')

const app = express()

app.use(express.json()) //convierte en json lo que mandeas por el body

app.get('/', (req, res) => {
    res.status(200).json({message: 'server ok'})
})


app.use('/', usersRouter)

app.listen('8000', ()=>{
    console.log('Server on port 8000')
})
