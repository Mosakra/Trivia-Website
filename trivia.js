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
    },
    {
        question: "Before being transformed into a human-like Vastaya, what kind of animal was Ahri?",
        answers: ["Bear", "Wolf", "Fox", "Snake"],
        correctAnswer: "Fox"
    },
    {
        question: "Which champion did Thresh trap and capture the soul of, before they were eventually rescued by Lucian?",
        answers: ["Caitlyn", "Senna", "Lux", "Sivir"],
        correctAnswer: "Senna"
    },
    {
        question: "The champion Tryndamere is married to is the leader of which Frelijordian tribe?",
        answers: ["Lissandra of the Frostguard", "Sejuani of the Winter's Claw", "Anivia of the Avarosan", "Ashe of the Avarosan"],
        correctAnswer: "Ashe of the Avarosan"
    },
    {
        question: "What does the name 'Zac' stand for?",
        answers: ["Zealot Annihilating Combatant", "Zaun Amorphous Combatant", "Ziggs' Amazing Creation", "Zone Alpha Cylon"],
        correctAnswer: "Zaun Amorphous Combatant"
    },
    {
        question: "Which champion is known as 'The Starcaster'?",
        answers: ["Zoe", "Aurelion Sol", "Lulu", "Janna"],
        correctAnswer: "Aurelion Sol"
    },
    {
        question: "Which champion can shapeshift into a dragon form?",
        answers: ["Shyvana", "Sett", "Rengar", "Aurelion Sol"],
        correctAnswer: "Shyvana"
    },
    {
        question: "Who is the main antagoonist in the 'Ruined King' lore event?",
        answers: ["Mordekaiser", "Hecarim", "Viego", "Zed"],
        correctAnswer: "Viego"
    },
    {
        question: "What did the yordle Fizz do to earn the acceptance of the people of Bilgewater?",
        answers: ["He killed a wanted pirate", "He found a powerful magical treasure for them", "He saved the city from a massive dragon-shark", "He helped negotiate a treaty with Noxus"],
        correctAnswer: "He saved the city from a massive dragon-shark"
    },
    {
        question: "Which of these champions does NOT come from the void?",
        answers: ["Kha'Zix", "Cho'Gath", "Kassadin", "Karthus"],
        correctAnswer: "Karthus"
    },
    {
        question: "In the official lore, what is the relationship between Katarina and Cassiopeia?",
        answers: ["They are sisters", "They are rivals", "They are mother and daughter", "They are unrelated"],
        correctAnswer: "They are sisters"
    },
    {
        question: "Which champion has a lore story of tryin to die an honorable death in battle, but is so strong he keeps winning instead?",
        answers: ["Gragas", "Olaf", "Braum", "Tryndamere"],
        correctAnswer: "Olaf"
    },
    {
        question: "What celestial object is Aurelion Sol responsible for creating?",
        answers: ["The moon", "The sun", "The stars", "The planet Runeterra"],
        correctAnswer: "The stars"
    }
];


let questionIndex = 0;
let score = 0;
let selectedAnswer = "";
let gameQuestions = [];

const randomQuestions = () => {
    
}

const displayQuestion = () => {
    const currentQuestion = loreQuestions[questionIndex];

    questionCounter.textContent = `Question ${questionIndex + 1} of ${loreQuestions.length}`;

    questionText.textContent = currentQuestion.question;
    answersContainer.textContent = "";
    nextBtn.style.display = "none";

    for (let i = 0; i < currentQuestion.answers.length; i++){
        const btn = document.createElement("button");
        btn.textContent = currentQuestion.answers[i];
        btn.classList.add("answer-btn");

        btn.addEventListener("click", () => {
            const answerBtns = answersContainer.querySelectorAll("button");
            for (let j = 0; j < answerBtns.length; j++){
                answerBtns[j].classList.remove("selected");
            }
            btn.classList.add("selected");
            selectedAnswer = btn.textContent;
            nextBtn.style.display = "block";
        })

        answersContainer.appendChild(btn);
    }
}

const showResults = () => {
    questionScreen.style.display = "none";
    resultsScreen.style.display = "block";
    finalScore.textContent = score + " / " + loreQuestions.length;
}


const nextQuestion = () => {
    if (selectedAnswer === loreQuestions[questionIndex].correctAnswer){
        score++;
    }
    questionIndex++;

    if (questionIndex < loreQuestions.length){
        displayQuestion();
    }
    else{
        showResults();
    }
}


startBtn.addEventListener("click", () => {
    score = 0;
    questionIndex = 0;

    startScreen.style.display = "none";
    questionScreen.style.display = "block";

    displayQuestion();
})

nextBtn.addEventListener("click", () => {
    nextQuestion();
})

restartBtn.addEventListener("click", () => {
    startScreen.style.display = "block";
    questionScreen.style.display = "none";
    resultsScreen.style.display = "none";
})