const TRIVIA_DOM = {
  question_title: document.getElementById("question"),
  inputA: document.getElementById("choiceA"),
  inputB: document.getElementById("choiceB"),
  inputC: document.getElementById("choiceC"),
  inputD: document.getElementById("choiceD"),
  submit_button: document.getElementById("submitBtn"),
  counter_question: document.getElementById("counterQuestions"),
  question_div: document.getElementById("questionDiv"),
  results_div: document.getElementById("resultsDiv"),
};



function draw(arrayOfQuestions, questionCounter) {

  if (!arrayOfQuestions[questionCounter]) { return showResults()};
  
  const { question_title, inputA, inputB, inputC, inputD, counter_question, question_div } = TRIVIA_DOM;
    
  if (question_div.style.display === "none") {
    question_div.style.display = "block";
  } 
  question_title.innerText = arrayOfQuestions[questionCounter].question;
  
  inputA.innerHTML = arrayOfQuestions[questionCounter].choiceA;
  //inputA.previousElementSibling.checked = false
  inputB.innerText = arrayOfQuestions[questionCounter].choiceB;
  inputB.previousElementSibling.checked = false
  inputC.innerText = arrayOfQuestions[questionCounter].choiceC;
  inputC.previousElementSibling.checked = false
  inputD.innerText = arrayOfQuestions[questionCounter].choiceD;
  inputD.previousElementSibling.checked = false
  
  counter_question.innerText = `Question ${questionCounter + 1} of ${arrayOfQuestions.length}`;
}

document.querySelector("#submitBtn").addEventListener("click", getAnswer);

function getAnswer() {
  const { inputA, inputB, inputC, inputD } = TRIVIA_DOM;
  const choice = [inputA, inputB, inputC, inputD];
  const answer = choice.find(c => c.previousElementSibling.checked);
  if (!answer) return alert("Please select your answer");
  const userAnswer = answer.previousElementSibling.value;
  checkAnswer(userAnswer);
}

function checkAnswer(userAnswer) {
  if (arrayOfQuestions[questionCounter].correct === userAnswer) {
    arrayOfQuestions[questionCounter].isCorrect = true;
    correctAnswers++;
  }
  questionCounter++;
  draw(arrayOfQuestions, questionCounter);
}

function showResults() {
  const {question_div, results_div} = TRIVIA_DOM;
  const ul = document.createElement("ul");
  const retakeButton = document.createElement("button")
  
  results_div.style.display = "inline-block"; 
  retakeButton.className = "btn btn-info btn-sm mt-1"
  retakeButton.innerText = "Retake the quiz!"
  retakeButton.id = "retakeButton"
  results_div.append(retakeButton);
  retakeButton.addEventListener("click", retake)
  
  ul.className = "list-group"
  question_div.style.display = "none";
  
  for (let i = 0; arrayOfQuestions.length >= i; i++) {
  
    if (!arrayOfQuestions[i]) return;
    
    if (arrayOfQuestions[i].isCorrect) {
      const li = document.createElement('li');
      li.className = "list-group-item text-center text-success p-1";
      li.innerText = `Question ${i + 1}: correct `; 
      ul.append(li);
    } else {
      const li = document.createElement('li');
      li.className = "list-group-item text-center text-danger p-1";  
      li.innerText = `Question ${i + 1}: incorrect `
      ul.append(li);
    }
    results_div.append(ul, retakeButton);
    
  }
}

function init() {
  draw(arrayOfQuestions, questionCounter);
}

function retake() {
  const {results_div, counter_question} = TRIVIA_DOM;
  results_div.innerHTML = ""; 
  questionCounter = 0;
  correctAnswers = 0;
  arrayOfQuestions.forEach((question) => { if (question.isCorrect) {question.isCorrect = false } })
  counter_question.innerText = `Question ${questionCounter + 1} of ${arrayOfQuestions.length}`;
  init()
}

init()