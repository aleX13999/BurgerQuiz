document.addEventListener('DOMContentLoaded', () => {
    const btnOpenModal = document.querySelector('#btnOpenModal')
    const modalBlock = document.querySelector('#modalBlock')
    const closeModal = document.querySelector('#closeModal')
    const questionTitle = document.querySelector('#question')
    const formAnswers = document.querySelector('#formAnswers')
    const prev = document.querySelector('#prev')
    const next = document.querySelector('#next')

    const questions = [{
            question: 'Какого цвета бургер вы хотите?',
            answers: [
                // title - название бургера, url - путь до картинки, type - тип ответа
                {
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
                    title: 'Нет',
                    url: './image/sauce.png',
                },
                {
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

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block')
        playTest()
    })

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block')
    })

    const playTest = () => {
        numberQuestion = 0
        const renderAnswers = (index) => {
            questions[index].answers.forEach((question, i) => {
                const answerItem = document.createElement('div')
                answerItem.classList.add('answers-item', 'd-flex', 'flex-column')
                answerItem.innerHTML = `
                <input type="${questions[index].type}" id="answerItem${
          i + 1
        }" name="answer" class="d-none">
                <label for="answerItem${
                  i + 1
                }" class="d-flex flex-column justify-content-between">
                      <img class="answerImg" src="${question.url}" alt="burger">
                      <span>${question.title}</span>
                    </label>
                    `
                formAnswers.appendChild(answerItem)
            })
        }

        const renderQuestions = (indexQuestion) => {
            //Если numberQuestion = 0 скрывать кнопку Prev и показывать ее, если numberQuestion > 0
            if (numberQuestion === 0) prev.hidden = true
            else prev.hidden = false

            //Если numberQuestion = длине нашего объекта минус 1 скрывать кнопку Next
            if (numberQuestion < questions.length - 1) next.hidden = false
            else next.hidden = true

            //Очищаем форму ответов
            formAnswers.innerHTML = ''

            //Заполняем форму ответов
            questionTitle.textContent = `${questions[indexQuestion].question}`
            renderAnswers(indexQuestion)
        }

        renderQuestions(numberQuestion)

        next.onclick = () => {
            numberQuestion++
            renderQuestions(numberQuestion)
        }

        prev.onclick = () => {
            numberQuestion--
            renderQuestions(numberQuestion)
        }
    }
})