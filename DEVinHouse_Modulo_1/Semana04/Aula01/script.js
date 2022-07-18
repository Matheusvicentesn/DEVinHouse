var idade = 16;
if (idade > 18 && idade < 65) {
    console.log('Adulto')
}

var isAdmin = true
var hasPermission = false

if (isAdmin || hasPermission || idade > 18){
    console.log('Tem permissão')
}