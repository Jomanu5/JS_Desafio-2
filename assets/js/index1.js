var imagen = document.querySelector("img")
var boton = document.querySelector(".btn")
var bordeStatus = false

boton.addEventListener("click", () => {
    if (bordeStatus == false) {
        imagen.style.border = "2px solid red"
        bordeStatus = true
        console.log(bordeStatus)
    }
    else if (bordeStatus == true) {
        imagen.style.border = "none"
        bordeStatus = false
        console.log(bordeStatus)
    }
    })
