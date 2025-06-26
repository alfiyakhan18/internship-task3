const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-size", "text-style", "text-size"],
    answer: "font-size"
  },
  {
    question: "Which language runs in the browser?",
    options: ["PHP", "Java", "JavaScript"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="option" value="${opt}"> ${opt}`;
    optionsDiv.appendChild(label);
  });
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return alert("Please select an option!");

  if (selected.value === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question-box").style.display = "none";
    const scoreEl = document.getElementById("score");
    scoreEl.style.display = "block";
    scoreEl.innerText = `Your score is: ${score}/${questions.length}`;
  }
}

window.onload = showQuestion;