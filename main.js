// 1.Pintar usuarios

// Imprimir por consola la lista de usuarios.

const url = "https://jsonplaceholder.typicode.com/users"

function mostrar() {

    axios.get(url).then((susers) => console.log(susers)).catch((err) => console.error(err));
}

mostrar()

// Imprimir por consola solo el nombre de los usuarios.


axios.get(url)
    .then((listaNombres) => {
        const usuarios = listaNombres.data
        usuarios.forEach(nombres => {
            console.log(nombres.name)
        });
    }).catch((error) => console.log(error))


// Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)

let users = []

axios.get(url)
    .then(response => {
        users = response.data;
    })
    .catch((error) => {
        console.log(error);
    })

// Crea una función que muestre por consola la variable global que habías creado

const usersDiv = document.querySelector(".users")
function mostrarUsers() {
    usersDiv.innerHTML = users.map((user) => `<p>${user.name}</p>`);

}
mostrarUsers()

// Crea un botón que cuando lo cliques ejecute la función que habías creado

// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML)

