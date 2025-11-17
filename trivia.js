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


const questions = [
    "Who was responsible for accidentally killings Yasuo's master, Elder Kusho?",
    "From which region do the champions Vi and Jinx originally come from?",
    "What is the name of the entity that is trapped inside Kayn's scythe?"
];

const answer1 = [
    "Cassiopeia",
    "Piltover",
    "Varus"
];

const answer2 = [
    "Riven",
    "Noxus",
    "Rhaast"
];

const answer3 = [
    "Kayn",
    "Demacia",
    "Xerath"
];

const answer4 = [
    "Viego",
    "Zaun",
    "Aatrox",
];

const correctAnswer = [
    "Riven",
    "Zaun",
    "Rhaast"
];


