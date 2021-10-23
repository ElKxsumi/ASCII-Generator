const figlet = require('figlet');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Write the word :', args =>{
    figlet(args, (err, data) => {
        if (err) {
            console.log("Something went wrong...")
            console.dir(err);
            return;
        }
        console.log(data);
    })
readline.close();
})