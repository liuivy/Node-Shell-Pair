//Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline
    const [command, argument] = cmd.split(' ');
    
    if(cmd != 'pwd' || cmd != 'ls' || cmd[0] != 'cat') {
        process.stdout.write('You typed: ' + cmd) ;
        process.stdout.write('\nprompt > ');
    }
})
const prompt = (data) => {
    process.stdout.write('prompt > ');
}
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')(argument, prompt);
// pwd()</