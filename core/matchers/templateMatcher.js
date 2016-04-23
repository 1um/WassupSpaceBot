var autors = require('../autors').list;

var templates = [
  {
    keywordGroups: [["Sasha", "Alex", "Boss"], ["Photo","Image", "Avatar"]],
    present: function(presenter){
      presenter.showImage("https://scontent-waw1-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/10931657_860658840660717_3580588527443262148_o.jpg")
    }
  }
]

exports.match = function(str){
  var matches = [];
  templates.forEach(function(template){
    var eachGroupFind = false;
    template.keywordGroups.forEach(function(group){
      eachGroupFind = false;
      group.forEach(function(keyword){
        regexp = new RegExp(keyword, "i");
        if(str.search(regexp)!=-1){
          eachGroupFind = true;
        }
      });
    });
    if(eachGroupFind){
      matches.push({
        rate: 1,
        present: template.present
      })
    }
  });

  return matches;
}
