import * as valid from './formulario.js';
import {validarCampos} from "./formulario.js";
//flujo de validacion

//inicializamos variables
const formulario = document.querySelector('form')
const inputs = document.querySelectorAll('input');
const arrayUsers = []

//validamos que los campos no esten vacios
formulario.addEventListener('submit', function (event) {valid.validarCampos(event, inputs, arrayUsers)});

console.log(arrayUsers);