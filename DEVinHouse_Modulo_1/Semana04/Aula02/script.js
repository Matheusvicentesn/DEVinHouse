var pares = []
var impares = []

for (let contador = 1; contador <= 10; contador++) {
   if(contador % 2 === 0){
    pares.push(contador)
   }
   else{
    impares.push(contador)
   }
}
console.log(pares)
console.log(impares)
