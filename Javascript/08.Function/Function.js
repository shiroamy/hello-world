// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
//   }

function checkAge(age) {
    return (age > 18) ? true : confirm('Do you have your parents permission to access this page?')
}

let age = prompt('How old are you?');

if (checkAge(age)) {
    alert('Access granted');
} else {
    alert('Access denied');
}