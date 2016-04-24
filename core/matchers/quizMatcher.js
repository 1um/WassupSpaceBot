var questions = [
  {
    question: "Have human beings ever set foot on Mars?",
    image: "https://student.societyforscience.org/sites/student.societyforscience.org/files/main/articles/curiosity-landed-drawing.jpg",
    options: [{title: "Yes", value: false}, {title: "No", value: true}]
  },
  {
    question: "How much time does Sun rays take to reach Earth?",
    image: "http://www.thecommentator.com/system/articles/inner_pictures/000/004/822/thumb/sun-earth-orbit1.jpg?1395146670",
    options: [{title: "8 minutes", value: true}, {title: "32 minutes", value: false}]
  },
  {
    question: "Day on Mars is shorter than on Earth?",
    image: "http://mir24.net/media/images/2014/8/11%2016_08%2014_11.jpg",
    options: [{title: "Yes", value: false}, {title: "No", value: true}]
  },
  {
    question: "Which planet is known as the Morning Star or the Evening Star?",
    image: "http://indianapublicmedia.org/amomentofscience/files/2010/03/eveningstar.jpg",
    options: [{title: "Venus", value: true}, {title: "Mercury ", value: false}]
  },
  {
    question: "Ganymede is a moon of which planet?",
    image: "http://indianapublicmedia.org/amomentofscience/files/2010/03/eveningstar.jpg",
    options: [{title: "Saturn", value: false}, {title: "Jupiter ", value: true}]
  },
  {
    question: "Who was the first person to walk on the moon?",
    image: "http://www.nasa.gov/images/content/2333main_MM_Image_Feature_19_rs4.jpg",
    options: [{title: "Yuri Gagarin", value: false}, {title: "Neil Armstrong ", value: true}]
  },
  {
    question: "Is the planet Neptune bigger than Earth?",
    image: "http://userscontent2.emaze.com/images/59cc487b-ea29-4fee-8e15-32e765d3aca2/42078255-6ef3-49dc-a4dd-7a2a01d79faa.jpg",
    options: [{title: "Yes", value: true}, {title: "No", value: false}]
  },
  {
    question: "What planet is famous for its big red spot on it?",
    image: "http://nssdc.gsfc.nasa.gov/image/planetary/jupiter/redspot_false2.jpg",
    options: [{title: "Pluto", value: false}, {title: "Jupiter", value: true}]
  },
  {
    question: "What is the Orbital period of Moon?",
    image: "http://nssdc.gsfc.nasa.gov/image/planetary/jupiter/redspot_false2.jpg",
    options: [{title: "31 day", value: false}, {title: "27 days", value: true}]
  },
  {
    question: "What is the Orbital period of Moon?",
    image: "https://mrhonner.files.wordpress.com/2012/01/moon-orbit.jpg",
    options: [{title: "31 day", value: false}, {title: "27 days", value: true}]
  },
  {
    question: "Which planets do not have moons?",
    image: "http://space-facts.com/wp-content/uploads/galilean-moons.png",
    options: [{title: "Mercury and Venus", value: true}, {title: "Mercury and Neptune", value: false}]
  },
]

exports.match = function(str){
  if(str.match(/quiz/i)){
    var question = questions[Math.floor(Math.random() * questions.length)];
    return [{
      rate: 1,
      present: function(presenter) {
        presenter.showQuiz(question);
      }
    }];
  }
}
