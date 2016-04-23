var MAX_MATCHES = 2;
var matchers = require('./matchers');

exports.parse = function(message, presenter){
  var matches = [];
  matchers.list.forEach(function(matcher) {
    matches = matches.concat(matcher.match(message)||[]);
  })

  matches
    .sort(function(a, b){ return a.rate - b.rate})
    .slice(0, MAX_MATCHES)
    .forEach(function(m){ m.present(presenter)});
}
