'use strict';

function Question(query, author) {
  this.id = Question.all.length
  this.query = query
  this.author = author
  this.answers = []
  Question.all.push(this)
}

Question.prototype.questionEl = function() {
  return `<div class="question">
    <ul id="question-${this.id}" data-id="${this.id}">
      <h3>${this.query}</h3>
      <p>Asked by: ${this.author}</p>
      <ul id="answers-${this.id}"></ul>
      <form class="add-answer" data-id=${this.id} action="#" method="post">
        <label for="answer-content"></label>
        <input type="text" id="answer-content-${this.id}" name="answer-content" placeholder="answer">
        <input type="submit" value="Submit Answer">
      </form>
    </ul>
  </div>`;
};

Question.load = function() {
  Question.stock.map(function(question){
    const newQuestion = new Question(question.query, question.author)
    QuestionsController.render(newQuestion)
  })
}

Question.all = [];

Question.stock = [
  {
    query: "How many licks does it take to get to the center of a Tootsie Roll Pop?",
    author: "Wise Owl"
  },
  {
    query: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    author: "Chuck Norris"
  },
  {
    query: "Who knew?",
    author: "Your friend"
  },
  {
    query: "What is the meaning of life?",
    author: "Big Bird"
  }
]
