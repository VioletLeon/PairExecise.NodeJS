function pwd() {
    let directory = process.cwd();
    process.stdout.write(directory)
  }

module.exports = pwd;