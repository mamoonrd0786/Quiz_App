const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'JavaScript',
        'c': 'PHP',
        'd': 'CSS',
        'correct': 'a'

    },
    {
        'que': 'What year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of these',
        'correct': 'b'

    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Hyper Text Markup Language',
        'b': 'Cascading style sheets',
        'c': 'Jason Object Notation',
        'd': 'Any thing else',
        'correct': 'b'

    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
let questionsInput = document.getElementById('questionsInput');
let options = document.querySelectorAll('.option')
const loadQuestions = () => {
    if (index == total) {
        return endQuiz()
    }
    reset();
    const data = questions[index];
    questionsInput.innerText = `${index + 1}) ${data.que}`;
    options[0].nextElementSibling.innerText = data.a
    options[1].nextElementSibling.innerText = data.b
    options[2].nextElementSibling.innerText = data.c
    options[3].nextElementSibling.innerText = data.d
    // console.log(data)
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    // console.log(ans)
    index++;
    loadQuestions();
    return;
}

const getAnswer = () => {
    let answer;
    options.forEach((input) => {
        if (input.checked) {
            answer =  input.value;
        }

    })
    return answer;
}

const reset = () => {
    options.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
<h3>Thank you for playing the quiz</h3>
<h2>${right} / ${total} are correct</h2>
`
}
loadQuestions();