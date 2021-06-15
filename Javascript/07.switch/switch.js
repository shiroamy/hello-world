// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;

//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

//將上述switch改寫成if...else


let browser = prompt('What\'s browser you used?')
if (browser == 'Edge') alert('You\'ve got the Edge!')
else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') alert('Okay we support these browsers too');
alert('We hope that this page looks ok!');