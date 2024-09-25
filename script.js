const container = document.getElementById("container")
const boton = document.getElementById("boton")

let url = "https://hp-api.onrender.com/api/characters";

boton.addEventListener("click", () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let datos = data
      crearCard(datos)
    });
})

function crearCard(data){
  let cardsHTML = ""

  let imagen_por_defecto = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/640px-HP_-_Harry_Potter_wordmark.svg.png"

  for (let i = 0; i < data.length; i++){
    let user = data[i];
  
    cardsHTML += `
      <div class="caja">
          <p class="name_card">${user.name}</p>
          <img src="${user.image ? user.image : imagen_por_defecto}" alt="${user.image}">
          <p>${user.house}</p>
      </div>
    `
  }
    container.innerHTML = cardsHTML
}