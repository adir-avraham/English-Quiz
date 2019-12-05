let questionCounter = 0;
const answers = [];
const arrayOfQuestions = [
  {
    question: "Where in the body is the scapular muscle?",
    choiceA: "Knee",
    choiceB: "Shoulder",
    choiceC: "Head",
    choiceD: "Arm",
    correct: "B"
  },
  {
    question:
      "What is the name of the only bone in the body not connected to another?",
    choiceA: "Axis",
    choiceB: "Ulna",
    choiceC: "Femur",
    choiceD: "Hyoid",
    correct: "D"
  },
  {
    question: "According to the Red Cross what is the most common Blood Type?",
    choiceA: "Blood Type A",
    choiceB: "Blood Type O",
    choiceC: "Blood Type B",
    choiceD: "Blood type AB",
    correct: "B"
  },
  {
    question: "What is the smallest bone in the human body?",
    choiceA: "Stapes",
    choiceB: "Pinna",
    choiceC: "Clavicle",
    choiceD: "Fibula",
    correct: "A"
  },
  {
    question: "How much does an average human heart weigh?",
    choiceA: "Approx. 250gm-300grams - female & 300-350 grams-male",
    choiceB: "Approx. 350-450grams female and 500-600gram male",
    choiceC: "Approx. 100-150grams female and 200-250grams male",
    choiceD: "Approx. 600-700gram female and 800-900grams male",
    correct: "A"
  },
  {
    question: "Where in the body is the thyroid gland found?",
    choiceA: "Stomach",
    choiceB: "Underarm",
    choiceC: "Neck",
    choiceD: "Head",
    correct: "C"
  },
  {
    question: "What Body system do the Skin, hair and nails belong to?",
    choiceA: "Circulatory System",
    choiceB: "Skeletal System",
    choiceC: "Integumentary System",
    choiceD: "Digestive System",
    correct: "C"
  },
  {
    question: "What Body Part changes the least throughout a person’s life?",
    choiceA: "Ears",
    choiceB: "Nose",
    choiceC: "Eyes",
    choiceD: "Tongue",
    correct: "C"
  }
];

const TRIVIA_DOM = {
  question_title: document.getElementById("question"),
  inputA: document.getElementById("choiceA"),
  inputB: document.getElementById("choiceB"),
  inputC: document.getElementById("choiceC"),
  inputD: document.getElementById("choiceD"),
  submit_button: document.getElementById("submitBtn")
};

function draw(arrayOfQuestions, questionCounter) {
    const { question_title, inputA, inputB, inputC, inputD } = TRIVIA_DOM;
    //const { question, choiceA, choiceB, choiceC, choiceD } = arrayOfQuestions;
    
    question_title.innerText = arrayOfQuestions[questionCounter].question;
    inputA.innerHTML = arrayOfQuestions[questionCounter].choiceA;
    inputB.innerText = arrayOfQuestions[questionCounter].choiceB;
    inputC.innerText = arrayOfQuestions[questionCounter].choiceC;
    inputD.innerText = arrayOfQuestions[questionCounter].choiceD;
}



document.querySelector("#submitBtn").addEventListener("click", getAnswer);
//document.querySelector("#submitBtn").addEventListener("click", function(){submit(this.parentElement)});



function getAnswer() {
    const { inputA, inputB, inputC, inputD } = TRIVIA_DOM;
    const choice = [inputA , inputB, inputC, inputD];
    const answer = choice.find(c => c.previousElementSibling.checked)
    if (!answer) return alert("Please select your answer");
    const userAnswer = answer.previousElementSibling.value;
    checkAnswer(userAnswer)
}

function checkAnswer(userAnswer) {
    if (arrayOfQuestions[questionCounter].correct === userAnswer) {
        questionCounter++
        draw(arrayOfQuestions, questionCounter)
    } 
    
    console.log(userAnswer);
}

draw(arrayOfQuestions, questionCounter)
// draw(arrayOfQuestions)

// function draw(array) {

//    array.forEach((q, index) => {
//        const cloneQuestion =  $("#quiz").clone()
//        cloneQuestion.css({ display: "inline-block" });
//        cloneQuestion.find("h3").text(q.question)
//        cloneQuestion.find("#choiceA").text(q.choiceA)
//        cloneQuestion.find("#choiceB").text(q.choiceB)
//        cloneQuestion.find("#choiceC").text(q.choiceC)
//        cloneQuestion.find("#choiceD").text(q.choiceD)

//        cloneQuestion.find("input").attr("id", `q_${index}`);
//        cloneQuestion.find("label").attr("id", `lab_${index}`);
//        cloneQuestion.find("label").attr("for", `q_${index}`);
//        $("#mainDiv").append(cloneQuestion);

//    });

// }

// $("#submit").on("click", check)

// function check() {
//     input.forEach((inp)=> {

//         if (inp) {

//             answers = [...answers, input.value ]
//         }
//     })
// console.log(answers)
// }

// const clonedCard = $("#userCard").clone();
// clonedCard.find("img").attr({src: user_pic});
// clonedCard.css({ display: "inline-block" });
// clonedCard.find("h3").html(`Name: ${user_name}`);
// clonedCard.find("h4").html(`Gender: ${user_gender}`);
// clonedCard.find("h5").html(`age: ${user_age}`);
// clonedCard.find("p").html(`Email: ${user_email}`);
// clonedCard.find("#delBtn").on("click", function (event) {
//     deleteUser(event)
// })
// $("#divUsers").append(clonedCard);
