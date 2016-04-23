var autors = require('../autors').list;

var templates = [
  {
    keywords: ["Sasha", "Alex", "Boss"],
    present: function(presenter){
      presenter.showAutor(autors.space);
      presenter.showImage("https://scontent-waw1-1.xx.fbcdn.net/hphotos-xtp1/t31.0-8/10931657_860658840660717_3580588527443262148_o.jpg");
      presenter.showText("Oleksandra Rohachova");
    }
  },
  {
    keywords: ["Pasha", "Pavlo", "Boy"],
    present: function(presenter){
      presenter.showAutor(autors.space);
      presenter.showImage("https://scontent-waw1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/10818485_755908891145243_9217941777292189676_o.jpg");
      presenter.showText("Pavlo Razumovskyi");
    }
  },
  {
    keywords: ["Kate", "Kateryna", "Hot"],
    present: function(presenter){
      presenter.showAutor(autors.space);
      presenter.showImage("https://scontent-waw1-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/1911202_1379633368982682_1729009569_o.jpg");
      presenter.showText("Kateryna Khotkevych");
      presenter.showVideo("Video here");
    }
  }
]

exports.match = function(str){
  var matches = [];
  templates.forEach(function(template){
    var keywordRate = 0;
    template.keywords.forEach(function(keyword){
      regexp = new RegExp(keyword, "i");
      if(str.search(regexp)!=-1){
        keywordRate+=1;
      }
    });
    if(keywordRate>0){
      matches.push({
        rate: keywordRate/template.keywords.length,
        present: template.present
      })
    }
  });

  return matches;
}
