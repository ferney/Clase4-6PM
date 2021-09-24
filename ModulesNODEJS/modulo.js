const nombre="carlos";

function programacion(){
    return {id:1, nombre:"java"};
}

function array(){
    return[
        {id:1, nombre:"const"},
        {id:2, nombre:"var"},
        {id:3, nombre:"let"}
    ];
}

function sumar(a,b){
return a+b;
}

//solo texto, 4-30, sin vacios
function validarNombre(nom){
if(nom==""||nom==null || !(/^[a-zA-Z]{4,30}$/.test(nom))){
return ("ingrese correctamente el nombre");
}
}

function validarCon(con){
if(!(/^[0-9a-zA-Z]{8,}$/.test(con))){
        return("contraseña invalida");
        
    }
}

function validarTel(tel){
if(!(/^[0-9]{7}$/.test(tel))){
        return("telefono invalido");
        
    }
}


function validarEmail(correo){
    if(!(/\S+@\S+\.\S+/.test(correo))){
        return false;
}
}

function validarDireccion(dir){
    if(!(/^[0-9a-zA-Z #-]{8,50}$/.test(dir))){
        return ("direccion invalida");
}
}
module.exports={nombre,programacion,array,
    sumar,validarNombre,validarCon,validarTel,
    validarEmail,validarDireccion};