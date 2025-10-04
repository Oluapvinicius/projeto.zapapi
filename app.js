/***********************************************************************************
 * API WhatsApp - Back-End Node.js
 * Autor: Paulo Vinicius
 * Data: 24/09/2025
 ***********************************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

// Importa as funções do modulo
const funcoes = require('./modulo/funcoes.js')


app.use(cors())
app.use(bodyParser.json())

// Endpoint 1 - Listar todos os dados de usuários
app.get('/v1/whatsapp/users', (req, res) => {
    res.status(200).json(funcoes.getAllDados())
})

//  Endpoint 2 - Dados do profile de um usuário
app.get('/v1/whatsapp/profile/:numero', (req, res) => {
    const numero = req.params.numero
    const result = funcoes.getDadosProfile(numero)
    res.status(result.statuscode).json(result)
})

//  Endpoint 3 - Listar contatos de um usuário
app.get('/v1/whatsapp/contacts/:numero', (req, res) => {
    const numero = req.params.numero
    const result = funcoes.getContactsUsers(numero)
    res.status(result.statuscode).json(result)
});

//  Endpoint 4 - Listar mensagens de um contato específico
app.get('/v1/whatsapp/messages/:numero', (req, res) => {
    const numero = req.params.numero
    const result = funcoes.getMensageUser(numero)
    res.status(result.statuscode).json(result)
})

//  Endpoint 5 - Listar conversa completa (usuário e contato)
app.get('/v1/whatsapp/conversa', (req, res) => {
    const numero = req.query.numero
    const result = funcoes.getDadosUser(numero)
    res.status(result.statuscode).json(result)
})

//  Endpoint 6 - Pesquisar mensagens (filtro por palavra)
app.get('/v1/whatsapp/pesquisa', (req, res) => {
    const numero = req.query.numero
    const palavra = req.query.palavra

    if (!numero || !palavra)
        return res.status(400).json({ status: false, message: "Número e palavra são obrigatórios." })

    const result = funcoes.pesquisarMensagens(numero, palavra)
    res.status(result.statuscode).json(result)
})

//  Inicia o servidor
app.listen(8080, () => {
    console.log('API WhatsApp rodando em http://localhost:8080')
})
