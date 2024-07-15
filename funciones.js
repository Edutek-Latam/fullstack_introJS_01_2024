
/**
 * 
 * @param {number} n1 - debe de ser un valor numerico mayo a 0
 * @param {number} n2 - debe de ser un valor numerico mayo a 0
 * @returns 
 */
function suma(n1,n2){
    const total = n1 + n2;
    return total
}

/**
 * 
 * @param { number } n1 
 * @param {number} n2 
 */
function multiplicar(n1,n2){

}
const restaA = (n1,n2) => n1-n2

/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @returns 
 */
const restaB = (n1,n2) =>{
    const total = n1 - n2
    return total
}

//suma(34,24)
/* console.log( suma(10,24));

console.log(restaA(15,3))
console.log(restaB(15,3)) */


let usuarios = {primer_nombre:'Sherwin', primer_apellido:'Gonzalez',correo:'sagonzalezgt@gmail.com', pass:'sher123' }
let total = 23;

function suma_a(valor){
     valor += 4;
    console.log(valor)
    return valor;
}

suma_a(total);
console.log(total)


function encrypt(user){
    user.pass = user.pass + '123';
    return user;
}

//console.log(usuarios)
let newUser =  encrypt({...usuarios});
console.log(newUser)
console.log(usuarios)

module.exports = { suma, restaA }