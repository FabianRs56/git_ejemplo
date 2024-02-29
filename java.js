/*let nombreVaria='valor variable';//crear variable 
var nombrevariable= 10;
//objetos
let object ={
    propoedad1:10,
   // propiedad2:'valor popiedad',
   // propiedadobj:{
       // propiedad4:['valor', 'valor2', 'valor3'],
       // propiedad5:'valor propiedad 5'

    }
};
//para mostrar
//console.log(object);
//console.log(Object.propoedad1);
//consolo.log(object.propiedadobj.propiedad5);*/




//funsion sin parametros
function nombreFuncion(){
console.log('ejecutando funcion "Nombre de la funcio"')
}
//funcion con parametros
function nombreConParametros(nombre,apellido,edad){
let text="nombre:"+nombre+",apellido:"+apellido+",edad:"+edad;
console.log(text);
}
//llamar a la funcion 
nombreFuncion();
//llamar a la funcin con parametros 
nombreConParametros('mauricio','Flores','23')


//documentar /** */ 
/**
 * Retorna el cuadrado de el numero dado
 * @param numero numero
 * @returns 
 */

function square(numero){
    return numero*numero;
}

/**
 * retorno al cubo del numero dado
 * @param  numero numero 
 * @returns 
 */
function cube(numero){
return numero*numero*numero;
}
let valor=8;
console.log(square(valor));
console.log(cube(valor));