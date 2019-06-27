'use strict';

class QuestionsController {
  init() {
    Question.load()
  }

  static render(question) {
   $('#questions').append(question.questionEl());
 }
}
