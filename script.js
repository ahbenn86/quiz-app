const quizData = [
    {
        question: "Which one of these is a JavaScript data type?",
        a: "Parse",
        b: "True",
        c: "Boolean",
        d: "Variable",
        correct: "c",

    },
    {
        question: "Which of these data types is non-primitive?",
        a: "String",
        b: "Number",
        c: "Boolean",
        d: "Array",
        correct: "d",
    },
    {
        question: "Which of these operators is the increment operator?",
        a: "++",
        b: "-",
        c: "%",
        d: "+",
        correct: "a",
    },
    {
        question: "Which of these comparison operators means (no equal value or type?)",
        a: "==",
        b: ">",
        c: "==!",
        d: ">=",
        correct: "c",
    },
    {
        question: "Which of these data types are considered primitive?",
        a: "String",
        b: "Object",
        c: "Null",
        d: "Array",
        correct: "a",
    },
    {
        question: "Which of these is a string method?",
        a: ".length",
        b: ".box",
        c: ".stringify",
        d: ".splice",
        correct: "a",
    },
    {
        question: "Which of these array methods will join several arrays into one?",
        a: "slice",
        b: "concat",
        c: "join",
        d: "reverse",
        correct: "b",
    },
    {
        question: "Which is the definition of an (onClick) mouse event?",
        a: "When the user double-clicks on an element",
        b: "When the pointer is moved onto an element",
        c: "When the user clicks on an element",
        d: "When the user right clicks on an element",
        correct: "c",
    },
    {
        question: "Which of these is an HTML DOM event?",
        a: "input",
        b: "charCode",
        c: "createEvent",
        d: "detail",
        correct: "a",
    },
    {
        question: "What is the definition of block scoped?",
        a: "You can only use variables within a defined scope",
        b: "The scope restricts the variable that is declared inside a specific block",
        c: "Only blocks can be defined within the scope",
        d: "None of the above",
        correct: "b",
    },


]
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer

}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++ 

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onClick="location.reload()">Reload</button>
            `
        }
    }
})
