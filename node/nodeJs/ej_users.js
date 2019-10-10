const users = require('./users.js')
console.log(users.loadUsers())
users.addUser('Barbara',100,'barbara@tec.mx')
users.addUser('Emilio',80,'emilio.lopez@tec.mx')
console.log(users.loadUsers())


users.deleteUser('barbara@tec.mx')
console.log(users.loadUsers())