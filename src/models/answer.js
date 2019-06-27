'use strict';

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
        <p>${this.content}</p>
        <form id="upvote-answer-${this.id}">
          <input type="submit" value="Upvote">
        </form>
        <p>Vote Count:
          <span id="vote-count-${this.id}">
            ${this.vote}
          </span>
        </p>
      </li>
    `
  }
}

Answer.all = []
