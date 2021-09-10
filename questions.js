const questions = [{
        question: 'Какого цвета бургер?',
        answers: [{
                title: 'Стандарт',
                url: './image/burger.png',
            },
            {
                title: 'Черный',
                url: './image/burgerBlack.png',
            },
        ],
        type: 'radio',
    },
    {
        question: 'Из какого мяса котлета?',
        answers: [{
                title: 'Курица',
                url: './image/chickenMeat.png',
            },
            {
                title: 'Говядина',
                url: './image/beefMeat.png',
            },
            {
                title: 'Свинина',
                url: './image/porkMeat.png',
            },
        ],
        type: 'radio',
    },
    {
        question: 'Дополнительные ингредиенты?',
        answers: [{
                title: 'Помидор',
                url: './image/tomato.png',
            },
            {
                title: 'Огурец',
                url: './image/cucumber.png',
            },
            {
                title: 'Салат',
                url: './image/salad.png',
            },
            {
                title: 'Лук',
                url: './image/onion.png',
            },
        ],
        type: 'checkbox',
    },
    {
        question: 'Добавить соус?',
        answers: [{
                title: 'Чесночный',
                url: './image/sauce1.png',
            },
            {
                title: 'Томатный',
                url: './image/sauce2.png',
            },
            {
                title: 'Горчичный',
                url: './image/sauce3.png',
            },
        ],
        type: 'radio',
    },
]

const obj = {}

const getData = () => {
    formAnswers.textContent = 'LOAD'

    setTimeout(() => {
        fetch('http://localhost:81/Quiz__intens/db.json')
            .then((res) => res.json())
            .then((obj) => playTest(obj.questions))
    }, 2000)
}

const obj = {}

const inputs = [...formAnswers.elements].filter((elem) => elem.checked)

inputs.forEach((elem, index) => {
    obj[`${index}_${questions[numberQuestion].question}`] = elem.value
})
finalAnswers.push(obj)

// //
// if (numberQuestion >= 0 && numberQuestion <= questions.length - 1) {
//     questionTitle.textContent = `${questions[indexQuestion].question}`
//     renderAnswers(indexQuestion)
//     next.hidden = false
//     prev.hidden = false
//     send.hidden = true
// }

// //
// if (numberQuestion === 0) {
//     prev.hidden = true
// }

// //
// if (numberQuestion === questions.length) {
//     next.hidden = true
//     prev.hidden = true
//     send.hidden = false
//     formAnswers.innerHTML = `
//       <div class="form-group   ">
//         <label for="numberPhone" class="form-label">Введите ваш номер:</label>
//         <input type="phone" class="form-control" id="numberPhone">
//     </div>
//     `
// }

// if (numberQuestion === questions.length + 1) {
//     formAnswers.textContent =
//         'Спасибо за пройденный тест! Это окно закроется через 2 секунды!'
//     setTimeout(() => {
//         modalBlock.classList.remove('d-block')
//     }, 2000)
// }