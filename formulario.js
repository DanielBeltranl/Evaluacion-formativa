import {Usuario} from "./Usuario.js";

//funcion para guardar los dusuarios
export function guardar (inputs) {

    const user = new Usuario(inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value,
        inputs[4].value,
        inputs[5].value,
        inputs[6].value);

    return user;

}


//Funcion para validar que los campos no esten vacios

export function validarCampos(event, inputs, arrayUsers) {

    let estaVacio = false;

    inputs.forEach(input => {

        if (input.value.trim() === '') {

            input.style.border = '2px solid red';

             estaVacio = true;

        }else{

            input.style.border = '';
        }

    })

    if (estaVacio) {

        event.preventDefault();
    }else{

       const user =  guardar(inputs)

        arrayUsers.push(user)

        console.log(arrayUsers);

    }



}












