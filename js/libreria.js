// *** PALINDROMA *** 
function palindroma(str) {
    return str == str.split('').reverse().join('');
}
// *** PARI O DISPARI ***
function isEven(num){
    if(num % 2 === 0){
        return true;
    } 
    else {
        return false;
    }
}
// *** NUMERO RANDOM ***
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}