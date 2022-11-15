//arreglo de objetos
let peliculas=[
    {
        nombre:"Avatar el camino del agua",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/AVATAR%20EL%20CAMINO%20DEL%20AGUA1.jpg?alt=media&token=41618374-37fd-4748-a827-5d78b6787c2f"

    },
    {
        nombre:"Black Adam",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/Black%20adam%20ultimonuevo.jpg?alt=media&token=eb1d423d-6885-469e-be8b-31d663c3ba74"
    },
    {
        nombre:"Minions",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/minions2posternuevo.jpg?alt=media&token=dc7c97ca-ebb7-4342-b0c9-a9fd7b0f1af1"
    },
    {
        nombre:"Tadeo",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/tadeo3nuevoposter.jpg?alt=media&token=3b31d4c0-3c0b-4317-ba8a-fc47a47e2a84"
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690"
    },
    {
        nombre: "Dungeons Dragons",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/DUNGEONS%20DRAGONS.jpg?alt=media&token=13738642-6770-4b90-bd12-7e904c803cfd"
    },
    {
        nombre: "Mario Bross",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/MARIO%20BROS1.jpg?alt=media&token=b390d998-90e6-4d2e-848c-5d3497152c58"
    },
    {
        nombre: "One Piece",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/ONEPIECE1.jpg?alt=media&token=da834271-b5e3-49cd-8b30-64c2b2755389"
    },
    {
        nombre: "Gato con Botas",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/gatoconbotasnuevo.jpg?alt=media&token=947b7753-2a7f-4492-8a13-7702b85eca72"
    },
    {
        nombre: "La Mujer Rey",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/LA%20MUJER%20REY%20NUEVO%20POSTER1.jpg?alt=media&token=09c7ccf5-b0ec-466a-b4ff-25d8469a9ca0"
    }
]

/*let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid","w-100")

    fila.appendChild(foto)

})*/

let etiquetaFila=document.getElementById("fila")

//Si ya tengo datos que normalmente llegan al front como un arreglo de objetos debemos recorrer y depurar dicha informacion
peliculas.forEach(function(pelicula){
    // para pintar la informacion de cada pelicula debemos aplicar una tecnica conocida como traversing
    //travarsing= crear etiquetas de html desde js
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100")
    poster.src=pelicula.poster

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center","fw-bold")
    nombre.textContent=pelicula.nombre

    let duracion=document.createElement("h5")
    duracion.classList.add("text-start")
    duracion.textContent="Duracion: "+pelicula.duracion+" Min"

    //padres e hijos
    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
})
