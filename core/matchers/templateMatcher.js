var autors = require('../autors').list;

var templates = [
  {
    keywordGroups: [["Sasha", "Alex", "Boss"], ["Photo","Image", "Avatar"]],
    present: function(presenter){
      presenter.showImage("https://scontent-waw1-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/10931657_860658840660717_3580588527443262148_o.jpg")
    }
  },
  {
    keywordGroups: [["toilet", "pipi", "bahtrom", "potty", "poop"], ["astronauts","astronaut", "cosmonaut", "cosmonauts"]],
    present: function(presenter){
        presenter.showAutor(autors.iss).then(function(){
        presenter.showImage("https://scontent-waw1-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/10931657_860658840660717_3580588527443262148_o.jpg")
      }).then(function(){
        presenter.showText("Oh, those human’s limitations...\nTim Peake answers one of the most frequently asked question about space exploration, how do astronauts go to the toilet in space? Speaking from the International Space Station (ISS), the British astronaut explains how he and his colleagues manage the bodily function using a machine with a suction tube. Peake assures us that the air flow keeps everything going down the pipe:");
      }).then(function(){
        presenter.showText("https://www.youtube.com/watch?v=d4FqnPPJ-Vc");
      })
    }
  },
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
