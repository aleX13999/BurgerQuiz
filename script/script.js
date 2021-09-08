document.addEventListener('DOMContentLoaded', () => {
    const btnOpenModal = document.querySelector('#btnOpenModal')
    const modalBlock = document.querySelector('#modalBlock')
    const closeModal = document.querySelector('#closeModal')
    const questionTitle = document.querySelector('#question')
    const formAnswers = document.querySelector('#formAnswers')

    const nameBurger = [
        //Название бургера
        'Стандарт',
        'Черный',
    ]

    const sourceImage = [
        //Картинка бургера
        'burger.png',
        'burgerBlack.png',
    ]

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block')
        playTest()
    })

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block')
        formAnswers.innerHTML = ''
    })

    const playTest = () => {
        const renderQuestions = () => {
            questionTitle.textContent = 'Какого цвета бургер вы хотите?'
            for (let i = 0; i < nameBurger.length; i++) {
                formAnswers.innerHTML += `<div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem${
                  i + 1
                }" name="answer" class="d-none">
                <label for="answerItem${
                  i + 1
                }" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="./image/${
                    sourceImage[i]
                  }" alt="burger">
                  <span>${nameBurger[i]}</span>
                </label>
              </div>`
            }
        }

        renderQuestions()
    }
})