var input1 = document.querySelector("#input1").value || 0
console.log(input1)
var input2 = document.querySelector("#input2").value || 0
console.log(input2)
var input3 = document.querySelector("#input3").value || 0
console.log(input3)
var cantidadSpan = document.querySelector("#cantidadSpan")
var demasSpan = document.querySelector("#demasSpan")
var btnVerificar = document.querySelector("#btnVerificar")

var cantidadTotal = Number(input1) + Number(input2) + Number(input3)





btnVerificar.addEventListener('click', () => {
    
    input1 = document.querySelector("#input1").value || 0
    input2 = document.querySelector("#input2").value || 0
    input3 = document.querySelector("#input3").value || 0
    cantidadTotal = Number(input1) + Number(input2) + Number(input3)
    

    if(cantidadTotal > 0){
        cantidadSpan.innerHTML = cantidadTotal
        cantidadSpan.style.color = "green"
        console.log(cantidadTotal)
          demasSpan.innerHTML = ""
    }
   else if (cantidadTotal == 0){
        cantidadSpan.innerHTML = "ningun"
        cantidadSpan.style.color = "red"
        demasSpan.innerHTML = "Debes seleccionar al menos un Sticker"
    }
    
    if (cantidadTotal> 10){
        cantidadSpan.innerHTML = "demasiados"
        cantidadSpan.style.color = "red"
        demasSpan.innerHTML = "Solo puedes llevar hasta 10 Stickers"
        
    }
})



