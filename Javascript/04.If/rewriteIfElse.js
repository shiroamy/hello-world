// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

//用?重寫if else

let login = prompt('What\'s your login charactor?')
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : ''
alert(message)