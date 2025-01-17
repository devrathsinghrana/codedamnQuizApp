//target form and handle submit. Make array of user answers and real answers. Calculate score.
const form = document.querySelector(".quiz-form");
const realAnswers = ["D", "B", "C", "B", "D"];
let score = 0;
const resultSection = document.querySelector(".result");
const tryAgainBtn = document.querySelector(".reload button");
const submitBtn = document.querySelector(`input[type=submit]`);
let isSubmitBtnClicked = false;
const questionDiv = document.querySelectorAll(".question");

const handleFormSubmit = (ev) => {
  ev.preventDefault();
  if (isSubmitBtnClicked) return;
  isSubmitBtnClicked = true;
  const userAnswers = [];
  ev.target.querySelectorAll(`input[type="radio"]`).forEach((element) => {
    if (element.checked) {
      userAnswers.push(element.value);
    }
  });
  //target questions div and change color of background accordingly using correct or wrong css class
  realAnswers.forEach((realAnswer, questionId) => {
    if (realAnswer === userAnswers[questionId]) {
      questionDiv[questionId].classList.add("correct");
      score++;
    } else {
      questionDiv[questionId].classList.add("wrong");
    }
  });
  //target result class and remove hide class and update result text content
  resultSection.classList.remove("hide");
  const resultP = resultSection.querySelector("p");
  resultP.innerText = `You have scored ${score}/5`;
  submitBtn.setAttribute("disabled", true);
  submitBtn.style.opacity = "0.5";
  submitBtn.style.cursor = "unset";
};
const handleReloadBtnClick = () => window.location.reload();

form.addEventListener("submit", handleFormSubmit);
//click final result and reload page
tryAgainBtn.addEventListener("click", handleReloadBtnClick);
