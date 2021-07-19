const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0                                        // узнать какой слайд активный - по умаолчанию ставим 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`                        //.style - обращаемся к свойствам стиля
                                                                   // надо вычесть 1, так как у нас уже присутствует один слайд
upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {                  //если кнопка, которую мы нажимаем на клавиатуре...
        changeSlide('up')                           // подключаем поддержку клавиатуры, что повышает User Experience
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {                               //направление, кнопка
    if (direction=== 'up') {                                    //еслм нажали вверх
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {                 //если уже прошлись по всем, вернуться к начальному слайду
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {                          //если нажали вниз
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`          //здесь убираю - (он уже был здесь: sidebar.style.top = `-${(slidesCount - 1) * 100}vh`)
}