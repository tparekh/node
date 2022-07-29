const fs = require('fs');
const process = require('process');

/** read file at path and print it out. */

function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

cat(process.argv[2]);


const fileName = require('fileName'); 
const process = require('process'); 

fs.readFile()




async function webcat(url){
  try {
    let resp = await axious.get(url); 
    console.log(resp);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
  }
}


