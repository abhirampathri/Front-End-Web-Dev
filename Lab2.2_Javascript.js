const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

addCSS("body{ background:yellow; }")

const myImage = new Image(200, 133);
myImage.src = "https://i1.pickpik.com/photos/72/74/423/various-flag-flags-usa-preview.jpg";
document.body.appendChild(myImage);
myImage.style.position = 'absolute';
myImage.style.top = '300px';
myImage.style.left = '50px';

const myImage2 = new Image(200, 133);
myImage2.src = "https://cdn2.picryl.com/photo/1910/12/31/flagge-portugal-0b3c05-640.jpg";
document.body.appendChild(myImage2);
myImage2.style.position = 'absolute';
myImage2.style.top = '300px';
myImage2.style.left = '325px';

const myImage3 = new Image(200, 133);
myImage3.src = "https://live.staticflickr.com/7282/8743154239_0abf446f45_b.jpg";
document.body.appendChild(myImage3);
myImage3.style.position = 'absolute';
myImage3.style.top = '300px';
myImage3.style.left = '600px';

const myImage4 = new Image(200, 133);
myImage4.src = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Albania.png";
document.body.appendChild(myImage4);
myImage4.style.position = 'absolute';
myImage4.style.top = '300px';
myImage4.style.left = '875px';

const myImage5 = new Image(200, 133);
myImage5.src = "https://upload.wikimedia.org/wikipedia/commons/5/58/Eswatini_flag_300.png";
document.body.appendChild(myImage5);
myImage5.style.position = 'absolute';
myImage5.style.top = '300px';
myImage5.style.left = '1150px';

const quizData = [
    {
        question: "Which country corresponds with the flag on the far left?",
        options: ["South Korea", "Israel", "Australia", "United States"],
        correctAnswer: "United States",
        
        
    },
    {
        question: "Which country corresponds with the flag directtly next to the one on the far left?",
        options: ["Brazil", "Portugal", "India", "Mexico"],
        correctAnswer: "Portugal",
    },
    {
        question: "Which country corresponds with the flag in the middle?",
        options: ["Mongolia", "Greece", "South Africa", "Canada"],
        correctAnswer: "South Africa",
    },
    {
        question: "Which country corresponds with the flag directly next to the one on the far right?",
        options: ["Algeria", "Guatemala", "Somalia", "Albania"],
        correctAnswer: "Albania",
    },
    {
        question: "Which country corresponds with the flag on the far left?",
        options: ["Papua New Guinea", "Bosnia and Herzegovina", "Kyrgyzstan", "Eswatini"],
        correctAnswer: "Eswatini",
    },
];

let currentQuestionIndex = 0;
let correct = 0;

function showQuestion(index) {
    const question = quizData[index];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    for(let i = 0; i < question.options.length; i++){
        const optionButton = document.createElement("button");
        optionButton.textContent = question.options[i];
        optionButton.addEventListener("click", () => {
            checkAnswer(optionButton.textContent)
        })
        optionsElement.appendChild(optionButton);
    }

}

function checkAnswer(selected) {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
    if(selected === correctAnswer){
        correct++;
        alert("Correct!");
    }
    else {
        alert("Incorrect. The correct answer is: " + correctAnswer);
    }

    currentQuestionIndex++

    if(currentQuestionIndex < quizData.length){
        showQuestion(currentQuestionIndex);
    }
    else {
        questionElement.textContent =   `Quiz complete! You scored ${correct} out of ${quizData.length}! Another great resource to practice is Sporcle!`
        optionsElement.innerHTML = "";
    }

}

showQuestion(currentQuestionIndex);