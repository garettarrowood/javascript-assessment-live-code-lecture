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
    this.upVoteFormListener(answer)
  }

  upVoteFormListener(answer) {
    const $form = $(`#upvote-answer-${answer.id}`)
    $form.on("submit", (event) => {
      event.preventDefault()
    const $voteCount = $(`#vote-count-answer-${answer.id}`)
    const updatedVoteCount = parseInt($voteCount.text()) + 1
    $voteCount.html(updatedVoteCount)
   })
  }
}



// first part of constroller    // selected every element and form in the DOM(add-answer) iterate over the forms
    // .on submit its the event listener
    // $form becuasue its a jquery object and eventListener is jquery
 // grab question id, console.log(this.dataset.id)
 // grab answer content console.log(content)
 // create new Answer Obj
