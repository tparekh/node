const fs = require('fs');

const line = "an eternity in an hour"; 

fs.writeFile('poem.txt', line, 'utf8', err => {
    if(err){
        console.log("error", err)
        process.kill(1)
    }
    console.log("it worked")
})

