const { suma , restaA }  = require('./funciones')

/*
if(condición){
    ...codigo
}
*/

var n1 = 5;
var n2 = 10
/* if((n1 > n2) || n2==10){
    console.log(`${n1} es mayor que ${n2}`)
}
 */

if(n1>n2){
    console.log(`${n1} es mayor que ${n2}`)
}else{
    console.log(`${n2} es mayor que ${n1}`)
}

const dia = 'lunes'

if(dia==='viernes'){
    console.log('viernes')
}else if(dia==='jueves'){
    console.log('jueves')
}else if(dia==='miercoles'){
    console.log('jueves')
}else if(dia==='martes'){
    console.log('jueves')
}else{
    console.log('dia incorrecto')
}

var dia_mes = 15
var mes ='Julio'
if(dia_mes<=15){
    if(mes==='Julio'){
        console.log('Bono 14')
    }else{
        console.log('Solo quincena')
    }
}else{
    console.log('fin de mes')
}





/* var option = 5
console.log(`
    Suma           1)
    Resta          2)
    Division       3)
    Multiplicacion 4)
`)  



switch(option){
    case 1:{
        console.log(suma(21,23))
        break;
    }
    case 2:{
        console.log(restaA(2,3))
        break;
    }
    case 3:{
        console.log(restaA(2,3))
        break;
    }case 4:{
        console.log(restaA(2,3))
        break;
    }
    default:{
        console.log('Operación no permitida')
    }

}
 */
//#####################################

/* for(let i = 1;i<=10;i++){
    console.log(`${i} x 5 = ${i*5}`)
}
 */
let contador = 1;
while(true){
    contador++
    console.log(`while ${contador}`)
    if(contador === 5){
        break;
    }
}

let x = 10
do{
    console.log(`Do while ${x}`)

}while(x < 9)