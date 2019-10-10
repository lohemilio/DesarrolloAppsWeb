

const fs = require('fs')
saveUsers = function(users){
    const data = JSON.stringify(users)
    fs.writeFileSync('usuarios.json',data)
}
addUser = function(nombre, edad, email){
    const users = loadUsers()
    const usuariosDuplicados = users.find(function(user){
        return user.email == email
    })

    if(!usuariosDuplicados){
        users.push({
            nombre: nombre,
            edad: edad,
            email: email
        })
        saveUsers(users)
        console.log(`Usuario con email: ${email} guardado!`)
    }else{
        console.log(`Usuario con email: ${email} ya existe`)
    }
   

    
}

loadUsers = function(){
    try{
        const bufferData = fs.readFileSync('usuarios.json')
        const dataJSON = JSON.parse(bufferData)
        return dataJSON
    } catch(err){
        return []
    }
    
}

deleteUser = function(email){
    const users = loadUsers()
    const usuariosAConservar = users.filter(function(user){
        return user.email != email
    })
    if(users.length > usuariosAConservar.length){
        saveUsers(usuariosAConservar)
        console.log(`Usuario con email ${email} borrado!`)

    }else{
        console.log(`Usuario con email ${email} no existe!`) 
    }
}

module.exports = {
    addUser : addUser,
    loadUsers : loadUsers,
    deleteUser: deleteUser,
    saveUsers: saveUsers
}
