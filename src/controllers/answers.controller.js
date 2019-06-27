class AnswersController {
  init() {
    this.answerFormListener()
  }

  answerFormListener() {
    const $forms = $(".add-answer")

    $forms.on("submit", (event) => {
      event.preventDefault()

      const questionId = event.target.dataset.id
      const content = $(`#answer-content-${questionId}`).val()
      $(`#answer-content-${questionId}`).val("")
      const answer = new Answer(content, questionId)
      this.render(answer, questionId)
    })
  }

  render(answer, questionId) {
    const $answerList = $(`#answers-${questionId}`)
    $answerList.append(answer.answerEl())
    this.upvoteFormListener(answer)
  }

  upvoteFormListener(answer) {
    const $form = $(`#upvote-answer-${answer.id}`)
    $form.on("submit", (event) => {
      event.preventDefault()

      const currentVote = answer.vote
      answer.vote = currentVote + 1

      const $voteCount = $(`#vote-count-${answer.id}`)
      $voteCount.text(answer.vote)
    })
  }
}
