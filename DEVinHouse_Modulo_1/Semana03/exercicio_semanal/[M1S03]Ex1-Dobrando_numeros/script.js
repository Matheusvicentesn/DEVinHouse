// [M1S03] Ex 1 - Dobrando números
var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]
listaNumeros.forEach ( function(valor,indice) {
    listaNumeros[indice] = (valor * 2);
    });

console.log(listaNumeros)

