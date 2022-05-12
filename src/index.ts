rótulo1.innerHTML = "Ingrese un número";
rótulo2.innerHTML = "Ingrese un número";
rótulo3.innerHTML = "Para sumar ingrese: 1, para restar ingrese: 2";
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let primernúmero: number = Number(dato1.value);
  let segundonúmero: number = Number(dato2.value);
  let tercernúmero: number = Number(dato3.value);
  let suma: number = primernúmero + segundonúmero;
  let resta: number = primernúmero - segundonúmero;

  switch (tercernúmero) {
    case 1:
      console.log("----------------------------------------");
      console.log("El resultado de la operación es: ", suma);
      console.log("----------------------------------------");
      break;

    case 2:
      console.log("----------------------------------------");
      console.log("El resultado de la operación es: ", resta);
      console.log("----------------------------------------");
      break;

    default:
      console.log("----------------------------------------");
      console.log("no se puede man");
      console.log("----------------------------------------");
  }
});
