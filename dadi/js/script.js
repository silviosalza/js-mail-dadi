const CPUnumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(CPUnumber);
const userNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(userNumber);

if (CPUnumber > userNumber){
    console.log("CPU vince!");
} else if (CPUnumber < userNumber) {
    console.log("Hai vinto!");
} else{
    console.log("Pareggio!");
}