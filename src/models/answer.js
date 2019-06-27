'use strict'

class Answer {
  constructor(content, questionId) {
    this.id = this.constructor.all.length
    this.question = this.findQuestion(parseInt(questionId))
    this.content = content
    this.vote = 0
    this.constructor.all.push(this)
  }

  findQuestion(questionId) {
    return Question.all.find(question => {
      if (question.id === questionId) {
        question.answers.push(this)
        return true
      }
    })
  }

  answerEl() {
    return `
    <li>
      Answer: ${this.content}</br>
      (Votes: <strong id="vote-count-answer-${this.id}"">0</strong>)
      <form id="upvote-answer-${this.id}" action="#" method="post">
      <input type="submit" value="Upvote">
      </form>
    </li>`
  }
}


Answer.all = []
