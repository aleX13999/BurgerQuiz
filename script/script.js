document.addEventListener('DOMContentLoaded', () => {
    const btnOpenModal = document.querySelector('#btnOpenModal')
    const modalBlock = document.querySelector('#modalBlock')
    const closeModal = document.querySelector('#closeModal')
    const questionTitle = document.querySelector('#question')
    const formAnswers = document.querySelector('#formAnswers')
    const prev = document.querySelector('#prev')
    const next = document.querySelector('#next')
    const send = document.querySelector('#send')

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
        const finalAnswers = []
        const renderAnswers = (index) => {
            questions[index].answers.forEach((answer, i) => {
                const answerItem = document.createElement('div')
                answerItem.classList.add(
                    'answers-item',
                    'd-flex',
                    'justify-content-center'
                )
                answerItem.innerHTML = `
                <input type="${questions[index].type}" id="answerItem${
          i + 1
        }" name="answer" class="d-none" value="${answer.title}">
                <label for="answerItem${
                  i + 1
                }" class="d-flex flex-column justify-content-between">
                      <img class="answerImg" src="${answer.url}" alt="burger">
                      <span>${answer.title}</span>
                    </label>
                    `
                formAnswers.appendChild(answerItem)
            })
        }

        const renderQuestions = (indexQuestion) => {
            //Очищаем форму ответов
            formAnswers.innerHTML = ''

            // Не придумал как нормально скрыть кнопку Prev на первом вопросе, попадает в кейс '>=', а там все вопросы рендерятся, как вариант сделать почти такой же кейс, но с '==='
            // Ну или отдельным ифом скрывать (как я и сделал), лучше не придумал
            switch (true) {
                // case numberQuestion === 0 && numberQuestion <= questions.length - 1:
                //     questionTitle.textContent = `${questions[indexQuestion].question}`
                //     renderAnswers(indexQuestion)
                //     next.hidden = false
                //     send.hidden = true
                //     prev.hidden = true
                //     break
                case numberQuestion >= 0 && numberQuestion <= questions.length - 1:
                    questionTitle.textContent = `${questions[indexQuestion].question}`
                    renderAnswers(indexQuestion)
                    next.hidden = false
                    prev.hidden = false
                    send.hidden = true
                    break
                case numberQuestion === questions.length:
                    next.hidden = true
                    prev.hidden = true
                    send.hidden = false
                    formAnswers.innerHTML = `
                        <div class="form-group   ">
                            <label for="numberPhone" class="form-label">Введите ваш номер:</label>
                            <input type="phone" class="form-control" id="numberPhone">
                        </div>
                        `
                    break
                case numberQuestion === questions.length + 1:
                    formAnswers.textContent =
                        'Спасибо за пройденный тест! Это окно закроется через 2 секунды!'
                    setTimeout(() => {
                        modalBlock.classList.remove('d-block')
                    }, 2000)
                    break
                default:
                    break
            }

            if (numberQuestion === 0) prev.hidden = true
        }

        const checkAnswer = () => {
            const obj = {}

            const inputs = [...formAnswers.elements].filter(
                (input) => input.checked || input.id === 'numberPhone'
            )
            inputs.forEach((input, index) => {
                if (numberQuestion >= 0 && numberQuestion <= questions.length - 1) {
                    obj[`${index}_${questions[numberQuestion].question}`] = input.value
                } else {
                    obj['Номер телефона'] = input.value
                }
            })

            finalAnswers.push(obj)
        }

        renderQuestions(numberQuestion)

        next.onclick = () => {
            checkAnswer()
            numberQuestion++
            renderQuestions(numberQuestion)
        }

        prev.onclick = () => {
            numberQuestion--
            renderQuestions(numberQuestion)
        }

        send.onclick = () => {
            checkAnswer()
            numberQuestion++
            renderQuestions(numberQuestion)
        }
    }
})