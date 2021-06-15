let account = prompt('Who\'s there?')
let pwd
let message
if (account == 'Admin') {
    pwd = prompt('Password?')
    message = (pwd == 'TheMaster') ? 'Welcome' : (pwd == '' || pwd == null) ? 'Canceled!' : 'Wrong Password!'
} else if (account != null) {
    message = 'I don\'t know you.'
} else message = 'Canceled!'

alert(message)