const pwdExport = require('./pwd');
const lsExport = require('./ls');
const catExport = require('./cat')
const curlExport = require('./curl');

const done = (output) => {
  process.stdout.write(output);
}

done('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd==="pwd") {
    pwdExport(done);
  }
  else if(cmd==='ls'){
    lsExport(done);
  }
  else if (cmd.substring(0,3) === 'cat'){
    catExport(cmd.substring(4), done);

  }else if(cmd.substring(0,4)==='curl'){
    curlExport(cmd.substring(5), done);
  }
  else done('You typed: ' + cmd)

  done('\nprompt > ');
})



