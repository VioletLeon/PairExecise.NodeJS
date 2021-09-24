process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd==="pwd") {
    pwd();
  }

  else process.stdout.write('You typed: ')

  process.stdout.write('\nprompt > ');
})

function pwd() {
  let directory = process.cwd();
  process.stdout.write(directory)
}
