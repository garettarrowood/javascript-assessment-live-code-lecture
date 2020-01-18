# Quora-esque domain

Three models - Question & Answer

## Topics

+ Class vs Instance methods in ES6
+ Object Relationships
+ DOM manipulation with jQuery
+ Event Listeners

To run your html:

- Inside your cloned down folder, in terminal, type `pwd` to get your full file path. Copy and paste that path into your browser url and include `/index.html` to the end of that path.

## Deliverables

Build out the following functions on the `Answer` class (Use ES6 syntax)

+ `Answer.all`
  + should return all of the answer objects in an array
  + a property of the Answer class
+ `new Answer(content, questionId)`
  + should initialize with an id, question object (findQuestion) and content (the actual text of the answer)
  + should save new answer to Answer.all property
+ `Answer.prototype.answerEl()`
  + returns a string of html
  + html has an `li` tag that shows the answer content, vote count, and renders a form to increment votes
+ `Answer.prototype.findQuestion(questionId)`
  + given a question id, returns the question object with that id
  + before returning the question obj, add the answer to the question's `answers` property

Build out the following methods on the `AnswersController` class (Use ES6 syntax)

+ `AnswersController.prototype.answerFormListener()`
  + iterates through each question form and adds an eventlistener to trigger a function on form submit
  + function should grab the questionId + answerContent and create a new Answer with those arguments
  + execute the render function on that found question to append the new answer
+ `AnswersController.prototype.render(answer, questionId)`
  + selects the appropriate question element for the answer
  + renders the new answer element into the correct `ul`
  + assigns upvoteFormListener for voting
+ `AnswersController.prototype.upvoteFormListener(answer)`
  + selects correct answer form and adds an eventlistener to trigger a function on form submit
  + function should grab the current voteCount and update the DOM with it one vote higher
