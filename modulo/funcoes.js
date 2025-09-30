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


const getDadosProfile = function(numero){
    let userNumero = numero

    let message = {status: true,statuscode: 200, development: 'Paulo Vinicius Lima Da Silva'}

    let profile = dados.contatos['whats-users'].find(function(profile){
        return profile.number === userNumero
    })

    if(profile){
        let profile_json = {}
        profile_json.nick = profile.nickname
        profile_json.foto = profile['profile-image']
        profile_json.numero = profile.number
        profile_json.Background = profile.background
        profile_json.criacaoDaConta = profile['created-since'].start
        profile_json.encerramentoDaConta = profile['created-since'].end

        message.perfil = profile_json
    }
    return message
}

const getContactsUsers = function(numero){
    let contactsNumero = numero

    let message = {status: true,statuscode: 200, development: 'Paulo Vinicius Lima Da Silva'}

    let profile = dados.contatos['whats-users'].find(function(profile){
        return profile.number === contactsNumero
    })

    if(profile){

        let array_json = []
        profile.contacts.forEach(function(contato){
            let users_json = {}

            users_json.nome = contato.name
            users_json.foto = contato.image
            users_json.descricao = contato.description

            array_json.push(users_json)
            
        })
        message.contacts = array_json

        return message
    }else{
        return MESSAGE_ERROR
    }
}

const getMensageUser = function(numero){ 
    let messageUser = numero

    let message = {status: true,statuscode: 200, development: 'Paulo Vinicius Lima Da Silva'}

    let userMensage = dados.contatos['whats-users'].find(function(profile){
        return profile
    })

    let macumbinha = []
    if(userMensage){

        let getNumber = userMensage.contacts.find(function(item){
            return item.number === messageUser
        })
        
        message_json = {}
        message_json.name = getNumber.name
        message_json.message = getNumber.messages

        macumbinha.push(message_json)


    }
    message.contacts = message_json
    return message
}


//const teste = getAllDados()
//console.log(teste.users[0].contacts[0].messages) Esse console.log ele entra dentro dos arrays mostrando as mensagens
///console.log(teste)

//console.log(getDadosProfile('11987876567'))

//console.log(getContactsUsers('11987876567'))

//console.log(getMensageUser('26999999963'))