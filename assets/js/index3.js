var select1 = document.querySelector("#select1").value
var select2 = document.querySelector("#select2").value
var select3 = document.querySelector("#select3").value
var resultado = document.querySelector("#resultado")

var btnVerificar = document.querySelector("#btnVerificar")
var btnOlvido = document.querySelector("#btnOlvido")



btnVerificar.addEventListener("click", () => {
    select1 = document.querySelector("#select1").value
    select2 = document.querySelector("#select2").value
    select3 = document.querySelector("#select3").value

    if (select1 == 9 && select2 == 1 && select3 == 1) {
      resultado.innerHTML = "Correcto password 1"
    } 
    else if (select1 == 7 && select2 == 1 && select3 == 4) {
        resultado.innerHTML = "Correcto password 2"      
    }
    else {
        resultado.innerHTML = "Password incorrecto"
    }

})

btnOlvido.addEventListener("click", () => {
    alert("La contraseña 1 es 911 y la contraseña 2 es 714")
    })
