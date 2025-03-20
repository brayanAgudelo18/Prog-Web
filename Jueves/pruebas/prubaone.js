function HolaMundo(){
    alert("Hola Mundo");
}

function Saludo(nombre){
    var nombre = document.getElementById('txusuario').value;
    alert("hola, " + nombre);


    nombre = nombre.toLowerCase();
    for(var i = 0; i < nombre.length; i++){
        if(nombre[i] == "a" || nombre[i] == "e" || nombre[i] == "i" || nombre[i] == "o" || nombre[i] == "u");{
            console.log('El nombre si tiene una vocal ' + nombre[i]);
            break;

        }
    }

}
function suma(){
    var num1 = prompt('dame el primer numero');
    var num2 = prompt('Dame el segundo numero ');
   
    
    if(isNaN(num1) || isNaN (num2)){
        console.log('debes ingresar numeros');
    }else{
        var suma = parseInt(num1) + parseInt (num2);
        console.log( 'La suma es : ' + suma);
    }


}















/*comentarios*/
