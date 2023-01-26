const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 3) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});

console.log("PRIMERO");
noMondays
    .then( res => console.log("Exito",res) )
    .catch( err => console.log("Error",err) );
console.log("ULTIMO");