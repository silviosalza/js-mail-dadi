const userMail = prompt("Scrivi qui il tuo insirizzo mail");

const permittedMail = ["silvio@gmail.com" , "giulia@gmail.com" , "moka@gmail.com" , "fiona@gmail.com"]

let result = "Accesso negato"
for (let i = 0; i<permittedMail.length; i++){
    const currentMail = permittedMail[i];

    if (currentMail.toLocaleLowerCase() === userMail.toLocaleLowerCase()){
        result = "Accesso riuscito";
    }
}
console.log(result);