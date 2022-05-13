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

  function obtenerResultadoSuma(a:number, b:number):number{
    let resultado:number = 0;
    resultado = a+b;
    return resultado;
  }
  
  function obtenerResultadoResta(c:number, d:number):number{
    let resultado:number = 0;
    resultado = c-d;
    return resultado;
  }

  function dibujarGuiones(n: number) {
    let i: number;
    let linea: string = "-";
    for (i = 0; i <= n; i++) {
      linea = linea + "-";
    }
    console.log(linea);
  }
  switch (tercernúmero) {
    case 1:
      dibujarGuiones(40);
      console.log("El resultado de la operación es: ", obtenerResultadoSuma (Number(dato1.value),Number(dato2.value));
      dibujarGuiones(40);
      break;

    case 2:
      dibujarGuiones(20);
      console.log("El resultado de la operación es: ", obtenerResultadoResta(Number(dato1.value),Number(dato2.value));
      dibujarGuiones(20);
      break;

    default:
      dibujarGuiones(10);
      console.log("no se puede man");
      dibujarGuiones(10);
  }
});
