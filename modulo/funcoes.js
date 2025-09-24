/***********************************************************************************
 * Data: 24/09/2025
 * Autor: Paulo Vinicius
 * Versão 1.0
 ***********************************************************************************/


//import do arquivo contatos
const dados = require('./contatos.js')
const MESSAGE_ERROR = {status :false, statuscode: 500, development: 'Paulo Vinicius'}

const getAllDados = function(){
    let message = {status: true,statuscode: 200, development: 'Paulo Vinicius Lima Da Silva', users:[] }

    
    dados.contatos['whats-users'].forEach(function(item){
        let users_json = {}
        users_json.id = item.id
        users_json.account = item.account
        users_json.nickname = item.nickname
        users_json.create_since = item['created-since']
        users_json.profile_imagem = item['profile-image']
        users_json.number = item.number
        users_json.background = item.background
        users_json.contacts = item.contacts

        message.users.push(users_json)

        
    })
    return message
    
}


const getDadosProfile = function(){
    let message = {status: true,statuscode: 200, development: 'Paulo Vinicius Lima Da Silva'}

}

console.log(getAllDados())