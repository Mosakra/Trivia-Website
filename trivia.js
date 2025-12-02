const getElement = selector => document.querySelector(selector);

const startScreen = getElement("#start-screen");
const categoryScreen = getElement("#category-screen");
const questionScreen = getElement("#question-screen");
const resultsScreen = getElement("#results-screen");

const startBtn = getElement("#start-btn");
const backToStartBtn = getElement("#back-to-start-btn");
const categoryButtons = document.querySelectorAll(".category-btn");
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

const championQuestions = [
    {
        question: "Which champion is permanently obscured and appears as a shadow in the fog of war to enemies outside of their immediate vision range?",
        answers: ["Shaco", "Evelynn", "Twitch", "Kha'Zix"],
        correctAnswer: "Evelynn"
    },
    {
        question: "Which champion's passive ability grants them a unique, temporary shield called Flow when they accumulate enough resource?",
        answers: ["Karma", "Irelia", "Yasuo", "Shen"],
        correctAnswer: "Shen"
    },
    {
        question: "The champion Pyke is known by which ominous title?",
        answers: ["The Bloody Pirate", "The River King", "The Bloodharbor Ripper", "The Drowned God"],
        correctAnswer: "The Bloodharbor Ripper"
    },
    {
        question: "Which champion has an ability that allows them to clone themselves and swap places with their clone upon reactivation?",
        answers: ["LeBlanc", "Neeko", "Wukong", "Shaco"],
        correctAnswer: "Wukong"
    },
    {
        question: "Which champion's basic attack apply a debuff called Dread that causes their target to take bonus damage from all sources?",
        answers: ["Fiddlesticks", "Urgot", "Darius", "Mordekaiser"],
        correctAnswer: "Urgot"
    },
    {
        question: "Which champion is the only one who can place permanent traps on the map without being near a turret?",
        answers: ["Caitlyn", "Teemo", "Jhin", "Nidalee"],
        correctAnswer: "Nidalee"
    },
    {
        question: "Which champion is described as a two-headed monster, wielding a pistol and a cannon?",
        answers: ["Graves", "Gangplank", "Aphelios", "Jinx"],
        correctAnswer: "Aphelios"
    },
    {
        question: "Which champion's ultimate ability allows them to resurrect themselves instantly after being killed?",
        answers: ["Anivia", "Zac", "Zilean", "Akshan"],
        correctAnswer: "Akshan"
    },
    {
        question: "What is the name of the transforming, shape-shifting champion known as 'The Curious Chameleon'?",
        answers: ["Elise", "Neeko", "Shyvana", "Gnar"],
        correctAnswer: "Neeko"
    },
    {
        question: "Which champion is described as the 'Grandmaster at Arms'?",
        answers: ["Fiora", "Master Yi", "Jax", "Garen"],
        correctAnswer: "Jax"
    },
    {
        question: "Which champion is known as 'The Unshackled'?",
        answers: ["Sylas", "Gnar", "Volibear", "Sett"],
        correctAnswer: "Gnar"
    },
    {
        question: "Which champion's ultimate ability, 'Stand United', teleports them to a target allied champion?",
        answers: ["Pantheon", "Shen", "Galio", "Nocturne"],
        correctAnswer: "Shen"
    },
    {
        question: "Which champion's passive causes them to accumulate stacks that increase their movement speed, up to a maximum of 100 stacks?",
        answers: ["Rammus", "Hecarim", "Olaf", "Udyr"],
        correctAnswer: "Hecarim"
    },
    {
        question: "Which champion's basic attacks hit multiple targets in a cone in front of them?",
        answers: ["Graves", "Twitch", "Miss Fortune", "Sivir"],
        correctAnswer: "Graves"
    },
    {
        question: "Which champion can purchase and store a total of 6 wards at one time in their inventory?",
        answers: ["Thresh", "Pyke", "Bard", "Rakan"],
        correctAnswer: "Rakan"
    }
];

const gameplayQuestions = [
    {
        question: "How many total stacks of Turret Plating exist on an outer turret before they fall off?",
        answers: ["Three", "Four", "Five", "Six"],
        correctAnswer: "Five"
    },
    {
        question: "Which status effect reduces the effectiveness of all healing, regeneration, and life steal by a percentage?",
        answers: ["Blind", "Stun", "Silence", "Grievous Wounds"],
        correctAnswer: "Grievous Wounds"
    },
    {
        question: "A champion who successfully executes the Rift Herald gains a buff called Eye of the Herald. How long does this item last in the champion's inventory before auto using?",
        answers: ["180 seconds", "200 seconds", "240 seconds", "300 seconds"],
        correctAnswer: "240 seconds"
    },
    {
        question: "What is the minimum number of consecutive basic attacks required for a champion to fully proc the passive effect of the keystone rune Lethal Tempo?",
        answers: ["Two", "Three", "Five", "Six"],
        correctAnswer: "Six"
    },
    {
        question: "The passive effect of the item Banshee's Veil grants what defensive layer?",
        answers: ["Spell Vamp", "Magic Penetraction", "Spell Shield", "Health Regeneration"],
        correctAnswer: "Spell Shield"
    },
    {
        question: "When a team takes the third elemental dragon, they gain a permanent buff. What is the maximum number of unique elemental dragon buffs a team can posses before taking the Dragon Soul?",
        answers: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Three"
    },
    {
        question: "Which of these jungle camp monsters is known for splitting into two smaller units when defeated?",
        answers: ["Gromp", "Blue Sentinel", "Red Brambleback", "Krugs"],
        correctAnswer: "Krugs"
    },
    {
        question: "What is the term for an ability that prevents the target from performing any action, but does not stop them from moving?",
        answers: ["Stun", "Root", "Suppression", "Silence"],
        correctAnswer: "Silence"
    },
    {
        question: "What is the offical name of the buff received from destroying an enemy Inhibitor?",
        answers: ["Elder Minions", "Super Minions", "Mega Minions", "Fortified Minions"],
        correctAnswer: "Super Minions"
    },
    {
        question: "Which of these boots provides a reduction to the duration of incoming Crowd Control effects?",
        answers: ["Berserker's Greaves", "Sorcerer's Shoes", "Mercury's Treads", "Swiftness Boots"],
        correctAnswer: "Mercury's Treads"
    },
    {
        question: "What type of damage is typically dealt by the passive effect of the item Liandry's Anguish",
        answers: ["Physical", "True", "Magic", "Adaptive"],
        correctAnswer: "Magic"
    },
    {
        question: "How many gold coins does a player receive for successfully destroying a single piece of Turret Plating?",
        answers: ["100 Gold", "150 Gold", "175 Gold", "200 Gold"],
        correctAnswer: "175 Gold"
    },
    {
        question: "Which major objective temporarily replaces the Dragon spawn aafter one team secures their Dragon Soul?",
        answers: ["Void Grubs", "Rift Herald", "Elder Dragon", "Scuttle Crab"],
        correctAnswer: "Elder Dragon"
    },
    {
        question: "Which common objective provides a large burst of True Damage to enemies based on a percentage of their current health?",
        answers: ["Mountain Drake", "Baron Nashor", "Infernal Drake", "Cloud Drake"],
        correctAnswer: "Infernal Drake"
    },
    {
        question: "What role in the team, after making one bad play. Get's talked down to the most?",
        answers: ["TOP", "MID", "ADC", "JGL"],
        correctAnswer: "JGL"
    }
]

const allQuestions = {
    lore: loreQuestions,
    champions: championQuestions,
    gameplay: gameplayQuestions
}


let questionIndex = 0;
let score = 0;
let selectedAnswer = "";
let gameQuestions = [];
let currentQuestionPool = [];

const randomQuestions = (questionPool) => {
    gameQuestions = [];
    const questionCount = Math.min(10, questionPool.length)
    const availableQuestions = [...questionPool];

    for (let i = 0; i < questionCount; i++){
        const randomQuestionIndex = Math.floor(Math.random() * availableQuestions.length);

        gameQuestions.push(availableQuestions[randomQuestionIndex]);

       availableQuestions.splice(randomQuestionIndex, 1);
    }
}

const displayQuestion = () => {
    const currentQuestion = gameQuestions[questionIndex];

    questionCounter.textContent = `Question ${questionIndex + 1} of ${gameQuestions.length}`;

    const progress = ((questionIndex + 1) / gameQuestions.length) * 100;
    progressFill.style.width = progress + "%";

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
    finalScore.textContent = score + " / " + gameQuestions.length;

    const percentage = (score / gameQuestions.length) * 100;
    if (percentage === 100){
        scoreMessage.textContent = "Perfect, Your a true summoner!";
    }
    else if (percentage >= 80){
        scoreMessage.textContent = "Excellent work, You know your lore!";
    }
    else if (percentage >= 60){
        scoreMessage.textContent = "Good job, Keep learning more about it!";
    }
    else if (percentage >= 40){
        scoreMessage.textContent = "Not bad, but there's room for improvent!";
    }
    else{
        scoreMessage.textContent = "Keep learning, You'll get better eventually!"
    }
}


const nextQuestion = () => {
    if (selectedAnswer === gameQuestions[questionIndex].correctAnswer){
        score++;
    }
    questionIndex++;

    if (questionIndex < gameQuestions.length){
        displayQuestion();
    }
    else{
        showResults();
    }
}

const startGame = () => {
    randomQuestions(currentQuestionPool);

    categoryScreen.style.display = "none";
    questionScreen.style.display = "block";

    displayQuestion();
}


startBtn.addEventListener("click", () => {
    score = 0;
    questionIndex = 0;

    startScreen.style.display = "none";
    categoryScreen.style.display = "block";

})

backToStartBtn.addEventListener("click", () => {
    categoryScreen.style.display = "none";
    startScreen.style.display = "block";
})

nextBtn.addEventListener("click", () => {
    nextQuestion();
})

restartBtn.addEventListener("click", () => {
    startScreen.style.display = "block";
    questionScreen.style.display = "none";
    resultsScreen.style.display = "none";
})

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");

        if (category === 'lore'){
            currentQuestionPool = allQuestions[category];

            startGame();
        }
        else if (category === 'champions'){
            currentQuestionPool = allQuestions[category];

            startGame();
        }
        else if (category === 'gameplay'){
            currentQuestionPool = allQuestions[category];

            startGame();
        }
    })
});