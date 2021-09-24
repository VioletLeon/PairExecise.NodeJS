const pwdExport = require('./pwd');
const lsExport = require('./ls');
const catExport = require('./cat')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd==="pwd") {
    pwdExport();
  }
  else if(cmd==='ls'){
    lsExport();
  }
  else if (cmd.substring(0,3) === 'cat'){
    catExport(cmd.substring(4));
  }
  else process.stdout.write('You typed: ' + cmd)

  process.stdout.write('\nprompt > ');
})

