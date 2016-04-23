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
          return presenter.showText("- An eclipse is an astronomical event that occurs when an astronomical object is temporarily obscured, either by passing into the shadow of another body or by having another body pass between it and the viewer.");
        }).then(function(){
          return presenter.showText("The next solar eclipse will be September 1, 2016.");
         }).then(function(){
          return presenter.showText("The next lunar eclipse will be September 16, 2016.");
        }).then(function(){
          return presenter.showImage("http://www.space.com/images/i/000/050/427/original/lunar-eclipse-2000-espenak.jpg");
        })
    }
  },
  {
    keywordGroups: [["our planet", "Earth", "home"], ["night","from space", "from the space", "look", "looks", "view"]],
    present: function(presenter){
        return presenter.showAutor(autors.iss).then(function(){
          return presenter.showText("Take a look:");
        }).then(function(){
          return presenter.showImage("https://i.ytimg.com/vi/wKIr9DEgiq4/maxresdefault.jpg");
        }).then(function(){
          return presenter.showText("Online view from The International Space Station:");
           }).then(function(){
          return presenter.showText("https://www.youtube.com/watch?v=njCDZWTI-xg");
        })
    }
  },
  {
    keywordGroups: [["how many", "now"], ["people","human", "humans", "astronauts", "cosmonauts"], ["space"]],
    present: function(presenter){
        return presenter.showAutor(autors.nasa).then(function(){
          return presenter.showText("There are 6 people in space right now. More info here:");
        }).then(function(){
          return presenter.showText("http://www.howmanypeopleareinspacerightnow.com/");
        }).then(function(){
          return presenter.showAutor(autors.alien);
        }).then(function(){
          return presenter.showText("Hmmm... Are you sure they are alone?");
        })
    }
  },
  {
    keywordGroups: [["pluto"], ["planet", "what"]],
    present: function(presenter){
        return presenter.showAutor(autors.nasa).then(function(){
          return presenter.showText("Pluto is not called a planet anymore. More info here:");
        }).then(function(){
          return presenter.showText("http://www.nasa.gov/audience/forstudents/k-4/stories/nasa-knows/what-is-pluto-k4.html");
        }).then(function(){
          return presenter.showAutor(autors.pluto);
        }).then(function(){
          return presenter.showText("But whyyyyyyyy? :(");
        })
    }
  },
  {
    keywordGroups: [["question"], ["Life", "Universe", "Everything"]],
    present: function(presenter){
        return presenter.showAutor(autors.space).then(function(){
          return presenter.showText("Well, let me think ...");
        }).then(function(){
          return presenter.showText("Hmmm ...");
        }).then(function(){
          return presenter.showText("My answer is ...");
        }).then(function(){
          return presenter.showImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Answer_to_Life.png/220px-Answer_to_Life.png");
        })
    }
  },
  {
    keywordGroups: [["breath", "oxygen", "air", "breathing"], ["iss","spase station"]],
    present: function(presenter){
       return presenter.showAutor(autors.iss).then(function(){
          return presenter.showText("Life support systems on the ISS provide oxygen, absorb carbon dioxide, and manage vaporous emissions from the astronauts themselves. More info:");
        }).then(function(){
          return presenter.showText("http://science.nasa.gov/science-news/science-at-nasa/2000/ast13nov_1/");
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
