//Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline
    
if(cmd != 'pwd' || cmd !== 'ls'){
    process.stdout.write('You typed: ' + cmd) ;
    process.stdout.write('\nprompt > ');
}
})

const pwd = require('./pwd');
const ls = require('./ls');
// pwd()</