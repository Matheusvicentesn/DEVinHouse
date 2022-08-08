function sleep(number) {
    return new Promise(resolve =>{
        setTimeout(() =>(number **2), 3000)
    } )
}

sleep(1).then((res) => console.log(res))