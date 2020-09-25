const fs = require('fs');

// module.exports = process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim().split(' '); 
    
//     if(cmd[0] === 'cat') {
//         fs.readFile(fileName, (err, data) => {
//             if (err) throw err;
//             console.log(data);
//   })
// }
// });

module.exports = (fileName) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            throw err;
            console.log(data);
        } else {
            
        }
    })
}
