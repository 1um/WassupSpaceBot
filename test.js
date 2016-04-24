var core = require('./core');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function promiseLog(text){
  return new Promise(function (resolve, reject) {
    console.log(text);
    resolve();
  });
}


var presenter = {
  showAutor: function(autor){
    return promiseLog(autor.emoji +' /'+autor.name+'/');
  },
  showText: promiseLog,
  showImage: promiseLog,
  showVideo: promiseLog,
  showQuiz: promiseLog,
  showDefault: promiseLog
}

process.stdout.write("-> ");
rl.on('line', function(line){
  core.parse(line, presenter);
  process.stdout.write("-> ");
})
