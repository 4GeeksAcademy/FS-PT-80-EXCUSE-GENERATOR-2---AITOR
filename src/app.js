/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuse = document.querySelector("#excuse");

//Comentarios de corrección
//He intentado hacer un código lo más limpio posible utilizando incluso en el console.log los $ para hacerlo sin comillas y que se viera más estético.
//De todas formas meterle caña si veís algo a mejor. Muchas gracias.

//-------------impresión por pantalla mediante h1

window.onload = function() {
  excuse.innerHTML = `${getValue(subjet)} ${getValue(action)} ${getValue(
    complement
  )} ${getValue(result)}`;
};
//-------------valores

const subjet = ["Mi madre", "Un mapache", "El perro", "El dragon Shenlong"];
const action = ["me obligó a", "me prohibió", "me impidió"];
const complement = [
  "abrir la puerta",
  "entrar al bosque",
  "salir del coche",
  "cruzar la calle"
];
const result = [
  "por lo que no llegue a trabajar",
  "por lo que no pude comprar tomate",
  "y no pude picar código",
  "y mi novia ahora esta !contenta"
];

//-------------operador

const getRandom = arra_y => Math.floor(Math.random() * arra_y.length); //función encargada de generar los números aleatorios
const getValue = arra_y => arra_y[getRandom(arra_y)]; //función encargada de extraer el valor de la anterior
