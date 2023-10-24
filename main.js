function numberDoubler(num) {
   while(num<100){
    num *= 2
   }
   return num
}

function stringRepeater(str) {
    let result = str
    while(result.length<10){
        result += str}
        return result
}

function makeDivisible(x, y) {
    while(x % y !==0) {
        x++
    }
    return x
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};