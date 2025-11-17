const getElement = selector => document.querySelector(selector);

const startScreen = document.getElement("#start-screen");
const questionScreen = document.getElement("#question-screen");
const resultsScreen = document.getElement("#results-screen");

const startBtn = document.getElement("#start-btn");
const nextBtn = document.getElement("#next-btn");
const restartBtn = document.getElement("#restart-btn");

const questionText = document.getElement("#question-text");
const answersContainer = document.getElement("#answers-container");
const questionCounter = document.getElement("#question-counter");
const progressFill = document.getElement("#progress-fill");

const finalScore = document.getElement("#final-score");
const scoreMessage = document.getElement("#score-message");

const questions = {
    Lore: [
        {
            question: "Who was responsible for accidentally killing Yasuo's master, Elder Kusho?"
        },
        {
            question: "From which region do the champions Vi and Jinx originally come from?"
        },
        {
            question: "What is the name of the entity that is trapped inside kayn's scythe?"
        },
        {
            question: "Before being transformed into a human-like Vastaya, What kind of animal was Ahri?"
        },
        {
            question: "Which champion did Thresh trap and capture the soul of, before she was eventually rescued by Lucian?"
        },
        {
            question: "The champion Tryndamere is married to the leader of which Frelijordian tribe?"
        },
        {
            question: "What does the name 'Zac' stand for?"
        },
        {
            question: "Which champion is known as 'The Starcaster'?"
        },
        {
            question: "Which champion can shapeshift into a dragon form?"
        },
        {
            question: "Who is the main antagonist in the 'Ruined King' lore event?"
        },
        {
            question: "What did the yordle Fizz do to earn the acceptance of the people of Bilgewater?"
        },
        {
            question: "Which of these champions does NOT come from the void?"
        },
        {
            question: "In the official lore, what is the relationship between Katarina and Cassiopeia?"
        },
        {
            question: "Which champion has a lore story of tryin to die an honorable death in battle, but is so strong he keeps winning instead?"
        },
        {
            question: "What celestial object is Aurelion Sol responsible for creating?"
        }
    ]
}
