const uuid = require('uuid')

const users = [
    {
	id: '09f75103-2088-48c8-98e7-4f71fe3d400c',
	first_name: 'Gean Franco',
	last_name: 'Saboya',
	email: 'gean1@mail.com',
	password: 'gean1234',
	birthday: '2003/09/18'
    },
    {
	id: '35b9b9e4-5fd4-4d4c-bfcb-cb91a20cca3c',
	first_name: 'jesus',
	last_name: 'robles',
	email: 'jesus112@mail.com',
	password: 'jesus157',
	birthday: '1995/05/02'
    },
    {
	id: '7bb182fe-4d42-43c2-b8b1-64ed78972a5f',
	first_name: 'Ricardo',
	last_name: 'Rengifo',
	email: 'ric121@mail.com',
	password: 'ric475',
	birthday: '200/12/10'
    }
]

//crear funcion que retorne la bd

const getAllUsers = () => {
    return users    
}

//Crear funcion que busque usuarios por id pasados como parametro

const getUserById = (id) => {
    const data = users.find(user => user.id === id)
    return data   
}  

//Crear funcion que cree un nuevo usuario

const createUser = (first_name, last_name, email, password, birthday) => {
    const newUser = {
	id: uuid.v4(),
	first_name,
	last_name,
	email,
	password,
	birthday
    }

    users.push(newUser)
    return newUser   
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}

