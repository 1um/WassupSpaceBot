var questions = [
  {
    question: "How are you?",
    options: [{title: "fine", value: true}, {title: "bad", value: false}]
  },
  {
    question: "Who are you?",
    options: [{title: "Woman", value: true}, {title: "Man", value: false}]
  }
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
