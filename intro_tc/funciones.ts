/**
 * 
 * @param {number} numero1 
 * @param {number}  numero2 
 */

function suma(numero1:number,numero2: number) : number {
    
    return numero1 + numero2;
}

function resta(numero1:number,numero2?: number ) : number {
    //if(numero2){
        return numero1 - (numero2 || 0) ;
   // }
    return numero1
}

const multiplicar = (numero1: number, numero2: number)=> numero1 * numero2;


console.log(suma(5 ,5))
console.log(resta(10,2))
console.log(multiplicar(5,6))