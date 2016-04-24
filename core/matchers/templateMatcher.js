var autors = require('../autors').list;
var emoji = require('node-emoji');

var images = [
      "http://snowbrains.com/wp-content/uploads/2013/04/9.jpg",
      "https://i.ytimg.com/vi/XL5DjLPg7Ms/maxresdefault.jpg",
      "http://img0.mxstatic.com/wallpapers/6ed93476b4301bb18bf25d4bf7c09321_large.jpeg",
      "https://www.nasa.gov/sites/default/files/thumbnails/image/nh-pluto-in-false-color.jpg",
      "http://solarsystem.nasa.gov/images/galleries/nh-color-pluto-charon1.jpg",
      "http://www.nasa.gov/sites/default/files/thumbnails/image/nh_01_stern_05_pluto_hazenew.jpg",
      "http://www.jpl.nasa.gov/images/msl/20160129/pia20316-16.jpg",
      "http://apod.nasa.gov/apod/image/0801/jupiterio_newhorizons.jpg",
      "https://www.nasa.gov/sites/default/files/thumbnails/image/nh-surface.jpg",
      "http://www.nasa.gov/sites/default/files/thumbnails/image/14797031062_4cbe0f218f_o.jpg",
      "http://history.nasa.gov/ap11ann/kippsphotos/5903.jpg",
      "http://inspired.com.ua/wp-content/uploads/2014/10/NEW_SLS_10x7_300.jpeg",
      "http://blog.rtve.es/.a/6a014e6089cbd5970c01bb08855daa970d-600wi",
      "http://www.asc-csa.gc.ca/images/ISS_crew_ISS_2009.jpg",
      "http://www.dlr.de/dlr/en/Portaldata/1/Resources/Bilder/missionen/iss/galerien/iss/galerie_iss03.jpg",
      "http://www.boeing.com/resources/boeingdotcom/space/international_space_station/images/iss_gallery_med_02_960x600.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Southern_Lights.jpg",
      "http://www.artsfon.com/pic/201411/2560x1600/artsfon.com-32297.jpg",
      "http://i.jootix.com/o/unnamed--1571fae08d.jpg"
  ]

var templates = [
  {
    keywordGroups: [["Sasha", "Alex", "Boss"], ["Photo","Image", "Avatar"]],
    present: function(presenter){
      return presenter.showImage("https://scontent-waw1-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/10931657_860658840660717_3580588527443262148_o.jpg")
    }
  },
  {
    keywordGroups: [["toilet", "pipi", "bathrom", "potty", "poop"], ["astronauts","astronaut", "cosmonaut", "cosmonauts"]],
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
  {
    keywordGroups: [["shower", "cleaning", "bath"], ["astronauts","astronaut", "cosmonaut", "cosmonauts", "space"]],
    present: function(presenter){
       return presenter.showAutor(autors.iss).then(function(){
          return presenter.showText("Astronauts wash their hair with a 'rinseless' shampoo that was originally developed for hospital patients who were unable to take a shower. More info here:");
        }).then(function(){
          return presenter.showText("http://www.nasa.gov/audience/foreducators/stem-on-station/ditl_morning_routine");
        }).then(function(){
          return presenter.showText("And here astronaut Mike Fossum demonstrates how to shower in space:");
        }).then(function(){
          return presenter.showText("https://www.youtube.com/watch?v=tDbbJWKKQu0");
        })
    }
  },
  {
    keywordGroups: [["watch"], ["tv", "television", "program","programs"], ["astronauts","astronaut", "cosmonaut", "cosmonauts"]],
    present: function(presenter){
       return presenter.showAutor(autors.iss).then(function(){
          return presenter.showText("Sometimes astronauts watch TV programs.");
        }).then(function(){
          return presenter.showText("For example here astronauts to Watch World Cup aboard Space Station:");
        }).then(function(){
          return presenter.showText("http://www.nasa.gov/content/astronauts-to-watch-world-cup-aboard-space-station");
        })
    }
  },
  {
    keywordGroups: [["photo", "photography", "image", "picture"], ["random", "show", "get"]],
    present: function(presenter){
       var image = images[Math.floor(Math.random() * images.length)];
       return presenter.showImage(image);
    }
  },
  {
    keywordGroups: [["hi", "hello", "good morning", "good evening", "good afternoon"]],
    present: function(presenter){
       return presenter.showAutor(autors.space).then(function(){
          return presenter.showText("Hello, human :)");
        });
    }
  },
  {
    keywordGroups: [["bye", "goodbye", "see you", "have a nice day"]],
    present: function(presenter){
       return presenter.showAutor(autors.space).then(function(){
          return presenter.showText("I don't say 'goodbye'. A say 'see you soon'!");
        });
    }
  },
  {
    keywordGroups: [["how are you", "wassup", "h r u", "h r y", "what's up"]],
    present: function(presenter){
       return presenter.showAutor(autors.space).then(function(){
          return presenter.showText("I'm fine. Catch selfie:")
        }).then(function(){
         return presenter.showImage("https://images.chesscomfiles.com/uploads/images_users/tiny_mce/Till_98/php4VgBId.jpeg");
       });
    }
  },
  {
    keywordGroups: [["I love you", emoji.get(':heart:')]],
    present: function(presenter){
       return presenter.showAutor(autors.space).then(function(){
          return presenter.showText("The Universe loves you too, honey!");
        }).then(function(){
         return presenter.showText(emoji.get(':heart:'));
       });
    }
  },
  {
    keywordGroups: [["42"]],
    present: function(presenter){
       return presenter.showAutor(autors.space).then(function(){
          return presenter.showText("I very carefully checked everything and with all determinancy I declare that it and is the answer. It seems to me if to be with you absolutely fair, then all the matter is that you did not know in what a question.");
        });
    }
  }
]

exports.match = function(str){
  var matches = [];
  templates.forEach(function(template){
    var eachGroupFind = false;
    template.keywordGroups.every(function(group){
      eachGroupFind = false;
      group.forEach(function(keyword){
        regexp = new RegExp(keyword, "i");
        if(str.search(regexp)!=-1){
          eachGroupFind = true;
        }
      });
      return eachGroupFind;
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