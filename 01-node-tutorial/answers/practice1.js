const os = require('os');
const fs = require('fs');
const sentence = require('./practice2');

const user = os.userInfo().username
console.log(`${sentence} from ${user}`)
fs.writeFile('./content/practice.txt', `${sentence} ` + 'How are you today?' + ' from ' + `${user} `, () => {})