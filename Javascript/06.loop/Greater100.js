// let message
// while (true) {
//     message = prompt('Enter a number greater than 100?')
//     if (message > 100 || message == null) break
// }
let num
do {
    num = prompt('Enter a number greater than 100?')
} while (num <= 100 && num)//num是null時也是<100，故要增加 &&