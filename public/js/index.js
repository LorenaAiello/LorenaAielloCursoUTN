//validar formulario
function validarFormulario(){

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let contenido = document.getElementById('contenido').value;
    let boleana = false;

    //test nombre
    if ((nombre == null) || nombre.length == 0) {
        alert('Error: complete con su nombre');
        return false;
    }

    //test correo
    if ((!(/\S+@\.\S+/.test(correo)))) {
        alert('Error: debe escribir un correo válido');
        return false;
    }

    //test contenido
    if ((contenido == null) || contenido.length == 0){
        alert('Error: debe escribir su consulta');
        return false;
    }
    return true;
}