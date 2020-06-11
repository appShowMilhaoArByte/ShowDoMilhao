const listaDeUsuarios = [
    {
        "email": "lucas@teste.com",
        "id": 1,
        "password": "123456",
        "score": 5000,
        "username": "lucas"
    },
    {
        "email": "luciana@teste.com",
        "id": 2,
        "password": "123456",
        "score": 10000,
        "username": "luciana"
    },
    {
        "email": "diego@teste.com",
        "id": 3,
        "password": "123456",
        "score": 30000,
        "username": "diego"
    },
    {
        "email": "joao@teste.com",
        "id": 4,
        "password": "123456",
        "score": 50000,
        "username": "joao"
    },
    {
        "email": "douglas@teste.com",
        "id": 5,
        "password": "123456",
        "score": 100000,
        "username": "douglas"
    },
    {
        "email": "gabriel@teste.com",
        "id": 6,
        "password": "123456",
        "score": 200000,
        "username": "gabriel"
    },
    {
        "email": "evandro@teste.com",
        "id": 7,
        "password": "123456",
        "score": 300000,
        "username": "evandro"
    },
    {
        "email": "emidio@teste.com",
        "id": 8,
        "password": "123456",
        "score": 500000,
        "username": "emidio"
    }
]
​
​
​
listaDeUsuarios.map((usuario) => {console.log(usuario.username)})