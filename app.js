const questions = document.querySelectorAll(".question");
const questionClick = document.querySelectorAll(".question-title");

questionClick.forEach(function (questionTitle) {
  questionTitle.addEventListener("click", function () {
    const question = questionTitle.parentElement;
    question.classList.toggle("show-text");
    
    questions.forEach(function (item) {
      if (question !== item) {
        item.classList.remove("show-text");
      }
    });
  });
});
