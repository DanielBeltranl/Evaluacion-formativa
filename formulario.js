const input = document.querySelectorAll('input');
const btn_registro = document.getElementById('btn_registro');


btn_registro.addEventListener('click', function (){

    camposVAcios = false;

    input.forEach( input => {
        if (input.value.trim() === '') {
            input.style.border = '2px solid red';
            camposVacios = true;
        }else{
            input.style.border = '';
        }
    })

    if (camposVacios){

        event.defaultPrevented();
    }



});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', validarCampos);
});



