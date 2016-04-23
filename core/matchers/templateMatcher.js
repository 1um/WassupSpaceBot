var autors = require('../autors').list;

var templates = [
  {
    keywordGroups: [["Sasha", "Alex", "Boss"], ["Photo","Image", "Avatar"]],
    present: function(presenter){
      presenter.showImage("http://placehold.it/"+Math.floor(Math.random()*1200)+"x"+Math.floor(Math.random()*800))
    }
  },
  {
    keywordGroups: [["toilet", "pipi", "bahtrom", "potty", "poop"], ["astronauts","astronaut", "cosmonaut", "cosmonauts"]],
    present: function(presenter){
        presenter.showAutor(autors.iss).then(function(){
          presenter.showText(
            "- Oh, those human limitations... Tim Peake answers one of the most frequently asked question about space exploration. Speaking from the International Space Station, the British astronaut explains how he and his colleagues manage the bodily function using a machine with a suction tube:"
          );
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
