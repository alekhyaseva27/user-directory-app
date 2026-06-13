const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyper Transfer Markup Language", correct: false },
            { text: "None", correct: false }
        ]
    },
    {
        question: "Which language runs in browser?",
        options: [
            { text: "Java", correct: false },
            { text: "C", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "CSS is used for?",
        options: [
            { text: "Structuring web pages", correct: false },
            { text: "Styling web pages", correct: true },
            { text: "Database", correct: false },
            { text: "Server-side logic", correct: false }
        ]
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

function showQuestion() {
    reset();

    let q = questions[currentIndex];
    questionEl.innerText = q.question;
    progressEl.innerText = `Question ${currentIndex + 1} of ${questions.length}`;

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt.text;
        btn.classList.add("option");

        btn.onclick = () => selectAnswer(btn, opt.correct);

        optionsEl.appendChild(btn);
    });
}

function selectAnswer(btn, correct) {
    const allBtns = document.querySelectorAll(".option");

    allBtns.forEach(b => b.disabled = true);

    if (correct) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
    }

    nextBtn.style.display = "block";
}

function reset() {
    nextBtn.style.display = "none";
    optionsEl.innerHTML = "";
}

nextBtn.onclick = () => {
    currentIndex++;

    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById("quiz-box").classList.add("hide");
    document.getElementById("result-box").classList.remove("hide");

    document.getElementById("score").innerText =
        `You scored ${score} out of ${questions.length}`;
}

showQuestion();