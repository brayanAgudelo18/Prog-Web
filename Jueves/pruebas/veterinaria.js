function validarNit(){
    var elementoNit= $('#txnombre');
    var nit = $(elementoNit).val();
    var expReg = /^[0-9]{9}\-\d$/;
    if(nit.length == 0 || !expReg.test(nit)) {
        $(elementoNit).addClass('error');
        return false;
    } 
}
function validarNombre(){
    var elementoNombre= $('#txrazon');
    var nombre = $(elementoNombre).val();
    var expReg = /^[\w\s]+$/;
    if(nombre.length == 0 || !expReg.test(nombre)) {
        $(elementoNombre).addClass('error');
        return false;
    } 
}
function validarDireccion(){
    var elementoDireccion= $('#txdireccion');
    var direccion = $(elementoDireccion).val();
     var expReg = /^[A-Za-z0-9 #\-_]+$/;
    if(direccion.length == 0 || !expReg.test(direccion)) {
        $(elementoDireccion).addClass('error');
        return false;
    } 
}
function validarTelefono(){
    var elementoTelefono= $('#txtelefono');
    var telefono = $(elementoTelefono).val();
     var expReg = /^(\(\d{3}\)\s?|\d{3}[\s\-]?)\d{3}[\s\-]?\d{4}$/;
    if(telefono.length == 0 || !expReg.test(telefono)) {
        $(elementoTelefono).addClass('error');
        return false;
    } 
}
function validarEmail(){
    var elementoEmail= $('#txemail');
    var email = $(elementoEmail).val();
     var expReg =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.length == 0 || !expReg.test(email)) {
        $(elementoEmail).addClass('error');
        return false;
    } 
}
function validarEmpleados(){
    var elementoEmpleados= $('#txempleados');
    var empleados = $(elementoEmpleados).val();
     var expReg =/^[a-zA-Z0-9_]{4,10}$/;
    if(empleados.length == 0 || !expReg.test(empleados)) {
        $(elementoEmpleados).addClass('error');
        return false;
    } 
}
function validarFecha(){
    var elementoFecha= $('#txfechaF');
    var fecha = $(elementoFecha).val();
     var expReg = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    if(fecha.length == 0 || !expReg.test(fecha)) {
        $(elementoFecha).addClass('error');
        return false;
    } 
    
}
var veterinarias = new Array();
function guardarVeterinaria(){
    var veterinaria = new Object();
    veterinaria.nombre =$('#txnombre').val();
    veterinaria.direccion =$('#txdireccion').val();
    veterinaria.telefono =$('#txtelefono').val();
    veterinaria.razonsocial =$('#txrazon').val();

    veterinarias.push(vetyerinaria);
    alert ('veterinaria guardada con exito');
    limpiarCampos();
}
function limpiarCampos(){
     $('#txnombre').val('');
     $('#txdireccion').val('');
     $('#txtelefono').val('');
     $('#txrazon').val('');

}
function mostrarVterinaria(){
    
}


