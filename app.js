let questionCounter = 0;
let correctAnswer = 0;

const arrayOfQuestions = [
  {
    question: "Where in the body is the scapular muscle?",
    choiceA: "Knee",
    choiceB: "Shoulder",
    choiceC: "Head",
    choiceD: "Arm",
    correct: "B",
    isCorrect: false
  },
  {
    question:
      "What is the name of the only bone in the body not connected to another?",
    choiceA: "Axis",
    choiceB: "Ulna",
    choiceC: "Femur",
    choiceD: "Hyoid",
    correct: "D",
    isCorrect: false
  },
  {
    question: "According to the Red Cross what is the most common Blood Type?",
    choiceA: "Blood Type A",
    choiceB: "Blood Type O",
    choiceC: "Blood Type B",
    choiceD: "Blood type AB",
    correct: "B",
    isCorrect: false
  },
  {
    question: "What is the smallest bone in the human body?",
    choiceA: "Stapes",
    choiceB: "Pinna",
    choiceC: "Clavicle",
    choiceD: "Fibula",
    correct: "A",
    isCorrect: false
  },
  {
    question: "How much does an average human heart weigh?",
    choiceA: "Approx. 250gm-300grams - female & 300-350 grams-male",
    choiceB: "Approx. 350-450grams female and 500-600gram male",
    choiceC: "Approx. 100-150grams female and 200-250grams male",
    choiceD: "Approx. 600-700gram female and 800-900grams male",
    correct: "A",
    isCorrect: false
  },
  {
    question: "Where in the body is the thyroid gland found?",
    choiceA: "Stomach",
    choiceB: "Underarm",
    choiceC: "Neck",
    choiceD: "Head",
    correct: "C",
    isCorrect: false
  },
  {
    question: "What Body system do the Skin, hair and nails belong to?",
    choiceA: "Circulatory System",
    choiceB: "Skeletal System",
    choiceC: "Integumentary System",
    choiceD: "Digestive System",
    correct: "C",
    isCorrect: false
  },
  {
    question: "What Body Part changes the least throughout a person’s life?",
    choiceA: "Ears",
    choiceB: "Nose",
    choiceC: "Eyes",
    choiceD: "Tongue",
    correct: "C",
    isCorrect: false
  }
];

const TRIVIA_DOM = {
  question_title: document.getElementById("question"),
  inputA: document.getElementById("choiceA"),
  inputB: document.getElementById("choiceB"),
  inputC: document.getElementById("choiceC"),
  inputD: document.getElementById("choiceD"),
  submit_button: document.getElementById("submitBtn"),
  counter_question: document.getElementById("counterQuestions")
};

function draw(arrayOfQuestions, questionCounter) {
  if (!arrayOfQuestions[questionCounter]) {
    return alert(`${correctAnswer} of ${arrayOfQuestions.length} are corrcet`);
  }
  const { question_title, inputA, inputB, inputC, inputD, counter_question } = TRIVIA_DOM;
  question_title.innerText = arrayOfQuestions[questionCounter].question;
  inputA.innerHTML = arrayOfQuestions[questionCounter].choiceA;
  inputB.innerText = arrayOfQuestions[questionCounter].choiceB;
  inputC.innerText = arrayOfQuestions[questionCounter].choiceC;
  inputD.innerText = arrayOfQuestions[questionCounter].choiceD;
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
    correctAnswer++;
  }
  questionCounter++;
  draw(arrayOfQuestions, questionCounter);
}

draw(arrayOfQuestions, questionCounter);
