function validar(){

var user=document.getElementById(nombre).value;


let traer= require('./modulo');

var nombre=function(){
    return traer.nombre;
}

var programacion=function(){
    return traer.programacion().nombre;
}

var array=function(){
    let a=traer.array();
    for(var i=0;i<a.length;i++){
        console.log( a[i].id+" "+a[i].nombre);
    }
}

var suma=function(){
    return traer.sumar(3,5);
}

var nombre=function(){
    return traer.validarNombre(user);
}

var contrasena=function(){
    return traer.validarCon("qwr123w3Z");
}

var telefono=function(){
    return traer.validarTel("1234567");
}

var correo=function(){
    return traer.validarEmail("example@example.com");
}

var direccion=function(){
    return traer.validarDireccion("Calle 100 46 - 10 sur");
}



console.log(nombre());
console.log(programacion());
console.log(array());
console.log(suma());
console.log(nombre());
console.log(contrasena());
console.log(telefono());
console.log(correo());
console.log(direccion());
}