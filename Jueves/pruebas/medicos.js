$(document).ready(function(){
    $('select').formSelect();
});
document.addEventListener('DOMContentLoaded', function(){
    M.AutoInit();
});
function validarDireccion(){
    var elementoDireccion= $('#txDmedico');
    var direccion = $(elementoDireccion).val();
     var expReg = /^[A-Za-z0-9 #\-_]+$/;
    if(direccion.length == 0 || !expReg.test(direccion)) {
        $(elementoDireccion).addClass('error');
        return false;
    } 
}
function validarNombre(){
    var elementoNombre= $('#txNmedico');
    var nombre = $(elementoNombre).val();
    var expReg = /^[\w\s]+$/;
    if(nombre.length == 0 || !expReg.test(nombre)) {
        $(elementoNombre).addClass('error');
        return false;
    } 
}
function validarApellido(){
    var elementoApellido= $('#txAmedico');
    var apellido = $(elementoApellido).val();
    var expReg = /^[\w\s]+$/;
    if(apellido.length == 0 || !expReg.test(apellido)) {
        $(elementoApellido).addClass('error');
        return false;
    } 
}
function validarCedula(){
    var elementoCedula= $('#txCmedico');
    var cedula = $(elementoCedula).val();
    var expReg = /^\d{6,10}$/;
    if(cedula.length == 0 || !expReg.test(cedula)) {
        $(elementoCedula).addClass('error');
        return false;
    } 
}
function validarEmail(){
    var elementoEmail= $('#txEmedico');
    var email = $(elementoEmail).val();
     var expReg =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.length == 0 || !expReg.test(email)) {
        $(elementoEmail).addClass('error');
        return false;
    } 
}
function validarTelefono(){
    var elementoTelefono= $('#icon_telephone');
    var telefono = $(elementoTelefono).val();
     var expReg = /^(\(\d{3}\)\s?|\d{3}[\s\-]?)\d{3}[\s\-]?\d{4}$/;
    if(telefono.length == 0 || !expReg.test(telefono)) {
        $(elementoTelefono).addClass('error');
        return false;
    } 
}
$(document).ready(function() {
    M.updateTextFields();
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});
$(document).ready(function(){
    $('select').formSelect();
});
  



