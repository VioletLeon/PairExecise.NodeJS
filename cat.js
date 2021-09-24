const fs = require('fs');

module.exports = (fileName, done) => {

  console.log(fileName)
  let file = '';

  fs.readdir('./','utf8', (err,files) => {
    if(err){
        throw err
    } else{
      file = files.filter(file => file.includes(fileName)).join('');
      fs.readFile(file, 'utf8', (err, data) => {
        if(err){
          done(err);
        }
        else {
          done(data)
          done('\nprompt > ')
        }
      })
    }
  });

}
