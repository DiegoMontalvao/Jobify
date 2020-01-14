// Requisitando a dependencia express e armazenando na variavel express

const express = require('express')

// armazenando o método express na variavel app

const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (request, response) => {
    response.render('home')
})
app.get('/vaga', (request, response) => {
    response.render('vaga')
})
app.listen(3000, (err) => {
    if(err){
        console.log('Não foi possível iniciar o servidor do Jobify.')
    }
    else {
        console.log('Servidor do Jobify rodando...')
    }
})