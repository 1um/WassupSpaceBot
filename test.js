var core = require('./core');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
var presenter = {
  showAutor: function(autor){
    console.log(autor.emoji +' /'+autor.name+'/');
  },
  showText: console.log,
  showImage: console.log,
  showVideo: console.log
}

process.stdout.write("-> ");
rl.on('line', function(line){
  core.parse(line, presenter);
  process.stdout.write("-> ");
})
