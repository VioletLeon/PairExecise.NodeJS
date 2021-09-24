const pwdExport = require('./pwd');
const lsExport = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd==="pwd") {
    pwdExport();
  }
  else if(cmd==='ls'){
    lsExport();
  }
  else process.stdout.write('You typed: ' + cmd)

  process.stdout.write('\nprompt > ');
})

