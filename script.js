const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
//get all elements

let quiz = document.getElementById('quiz')


// qestion heading
let qestionHeading = document.getElementById('questionHeadling');

//all option radio
let optionlist = document.querySelectorAll('.optionlist');

// each options lable
let optionA = document.getElementById('option_a');
let optionB = document.getElementById('option_b');
let optionC = document.getElementById('option_c');
let optionD = document.getElementById('option_d');

//submit button
let submitbtn = document.getElementById('submit');

let score = 0;
let currentQuizcount = 0;
loadQuiz();
function loadQuiz(){
    //   console.log("load Quiz");
    deselection();
    let currentQuizData = quizData[currentQuizcount];
    qestionHeading.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d
};



// deselection

function deselection(){
    optionlist.forEach((element)=>{
        element.checked=false;
    })
}
// selection option
function getSelected(){
    let selectedanswer;
    optionlist.forEach((element)=>{
        if(element.checked){
            selectedanswer=element.id;
        }
    })
    return selectedanswer;
}
submitbtn.addEventListener('click',()=>{
    let answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer===quizData[currentQuizcount].correct){
            score++;
        }
        currentQuizcount++;
        console.log(currentQuizcount)

        if(currentQuizcount<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=(`
            
            <h2> Your Score : ${score}/${quizData.length}</h2>
            <button class = "submit" onclick=location.reload()>Reload</button>
            `)
        }
    }    
})