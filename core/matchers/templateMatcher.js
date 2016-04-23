var autors = require('../autors').list;

var templates = [
  {
    keywordGroups: [["Sasha", "Alex", "Boss"], ["Photo","Image", "Avatar"]],
    present: function(presenter){
      return presenter.showImage("https://scontent-waw1-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/10931657_860658840660717_3580588527443262148_o.jpg")
    }
  },
  {
    keywordGroups: [["toilet", "pipi", "bahtrom", "potty", "poop"], ["astronauts","astronaut", "cosmonaut", "cosmonauts"]],
    present: function(presenter){
       return presenter.showAutor(autors.iss).then(function(){
          return presenter.showText(
            "- Oh, those human limitations... Tim Peake answers one of the most frequently asked question about space exploration. Speaking from the International Space Station, the British astronaut explains how he and his colleagues manage the bodily function using a machine with a suction tube:"
          );
        }).then(function(){
          return presenter.showText("https://www.youtube.com/watch?v=d4FqnPPJ-Vc");
        })
    }
  },
  {
    keywordGroups: [["eclipse"], ["solar","sun"], ["will", "next", "new"]],
    present: function(presenter){
        return presenter.showAutor(autors.nasa).then(function(){
          return presenter.showText("The next solar eclipse will be September 1, 2016.\nDon’t miss it!");
        }).then(function(){
          return presenter.showImage("https://timedotcom.files.wordpress.com/2016/03/solar-eclipse-01.jpg?quality=75&strip=color&w=792");
        })
    }
  },
  {
    keywordGroups: [["eclipse"], ["solar","sun", "moon", "lunar"]],
    present: function(presenter){
        return presenter.showAutor(autors.nasa).then(function(){
          return presenter.showText("An eclipse is an astronomical event that occurs when an astronomical object is temporarily obscured, either by passing into the shadow of another body or by having another body pass between it and the viewer.");
        }).then(function(){
          return presenter.showText("The next solar eclipse will be September 1, 2016.");
         }).then(function(){
          return presenter.showText("The next lunar eclipse will be September 16, 2016.");
        }).then(function(){
          return presenter.showImage("http://www.space.com/images/i/000/050/427/original/lunar-eclipse-2000-espenak.jpg");
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
