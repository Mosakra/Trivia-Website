const getElement = selector => document.querySelector(selector);

const startScreen = getElement("#start-screen");
const questionScreen = getElement("#question-screen");
const resultsScreen = getElement("#results-screen");

const startBtn = getElement("#start-btn");
const nextBtn = getElement("#next-btn");
const restartBtn = getElement("#restart-btn");

const questionText = getElement("#question-text");
const answersContainer = getElement("#answers-container");
const questionCounter = getElement("#question-counter");
const progressFill = getElement("#progress-fill");

const finalScore = getElement("#final-score");
const scoreMessage = getElement("#score-message");

const loreQuestions = [
    {
        question: "Who was responsible for accidentally killings Yasuo's master, Elder Kusho?",
        answers: ["Cassiopeia", "Riven", "Kayn", "Viego"],
        correctAnswer: "Riven"
    },
    {
        question: "From which region do the champions Vi and Jinx originally come from?",
        answers: ["Piltover", "Noxus", "Demacia", "Zaun"],
        correctAnswer: "Zaun"
    },
    {
        question: "What is the name of the entity that is trapped inside Kayn's scythe?",
        answers: ["Varus", "Rhaast", "Xerath", "Aatrox"],
        correctAnswer: "Rhaast"
    }
];


let questionIndex = 0;
let score = 0;
let selectedAnswer = "";

const displayQuestion = () => {
    const currentQuestion = loreQuestions[questionIndex];

    questionCounter.textContent = `Question ${questionIndex + 1} of ${loreQuestions.length}`;

    questionText.textContent = currentQuestion.question;
    answersContainer.textContent = "";

    for (let i = 0; i < currentQuestion.answers.length; i++){
        const btn = document.createElement("button");
        btn.textContent = currentQuestion.answers[i];

        btn.document.addEventListeners("click", () => {
            selectedAnswer = currentQuestion.answers[i];
        })

        answersContainer.appendChild(btn);
    }
}
