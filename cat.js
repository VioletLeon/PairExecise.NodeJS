const fs = require('fs');

function cat (fileName) {

  let file = '';

  fs.readdir('./','utf8', (err,files) => {
    if(err){
        throw err
    }else{
      file = files.filter(file => file.includes(fileName)).join('');
      fs.readFile(file, 'utf8', (err, data) => {
        if(err){
          throw err;
        }
        else {
          process.stdout.write(data)
          process.stdout.write('\nprompt > ')
        }
      })
    }
  });
}

module.exports = cat;
