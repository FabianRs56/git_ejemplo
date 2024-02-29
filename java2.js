//for
/*for(let index =0;index<11;index ++){
    let numero=10*index;
    console.log(numero);
}

//while
let whileindex=0;
while(whileindex<11){
    let numero= whileindex *10;
    console.log(numero);
    whileindex++;
}

//do-while
do{
    let numero=indexDoWhile*10;
    console.log(numero);
    indexDoWhile++;

}while(indexDoWhile<10);
*/

/**
 * 
 * @param {numero} tabla 
 * @param {numero} limite 
 */
function tablaFor(tabla,limite){
    for(let index =0;index<limite;index ++){
        let numero=tabla*index;
        console.log(numero);

    

    }
}

/**
 * duncion while
 * @param {numero} tabla 
 * @param {numero} limite 
 */
function tablaWhile(tabla,limite){
    let whileindex=0;
while(whileindex<limite){
    let numero= whileindex *tabla;
    console.log(numero);
    whileindex++;
}
}


/**
 * fucion dowhile
 * @param {numero} tabla 
 * @param {numero} limite 
 */
function tablaDoWhile(tabla,limite){
    let indexDoWhile=0;
    do{
        let numero=indexDoWhile*tabla;
        console.log(numero);
        indexDoWhile++;
    
    }while(indexDoWhile<limite);
   

}
console.log(tablaFor(8,100));
console.log(tablaWhile(8,10));
console.log(tablaDoWhile(7,5));