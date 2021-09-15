let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then(respuesta => respuesta.json())
    .then(dato => mostrarData(dato))
    .catch(error => console.log(error))

const mostrarData = (dato) =>{
    console.log(dato)
    let body =''
    for(let i=0; i<10; i++){
        body += `<tr><td>${dato[i].name}</td><td>${dato[i].username}</td><td>${dato[i].email}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}