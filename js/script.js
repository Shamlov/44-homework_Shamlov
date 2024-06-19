/*Создать html-страницу с трекбаром. 
Предоставить пользователю возможность изменять положение 
синего указателя.*/

const slider = document.getElementById('slider')
const pointer = document.getElementById('pointer')
const pointerRect = pointer.getBoundingClientRect()

let dragEl = null

pointer.addEventListener('mousedown',  () => {
    dragEl = pointer
})

document.body.addEventListener('mouseup', () => {
    dragEl = null
})

document.body.addEventListener('mousemove', (e) => {
    if(!dragEl) {
        return
    }

    dragEl.style.left = e.x - pointerRect.x - dragEl.clientWidth / 2 + 'px'
    if(dragEl.style.left <= 0 + 'px') {
        dragEl.style.left = '0px'
    }
})

// function movePointerClick(e) {
//     if(e.target.closest('#pointer')) {
//         return
//     }
//     pointer.style.cssText = `left: ${e.layerX - 5}px;` 
//     console.log(e.layerX)
// }

// function movePointerSlide (e) {
//     pointer.style.cssText = `left: ${e.layerX - 5}px;`
// }

// slider.addEventListener('click', movePointerClick)


///////////////////////////////////////////////////////////////////////////////////

/*Создать html-страницу с галереей. 
В один момент времени на экране отображается одно изо-
бражение и две кнопки: Назад и Вперед. При нажатии на кнопки 
изображения должны переключатся в указанном порядке. Когда 
следующего/предыдущего изображения нет, то соответствующую 
кнопку необходимо блокировать. Изображения хранить в заранее 
подготовленном массиве. */

const btnLeft = document.querySelector('#btnLeft')
const btnRight = document.querySelector('#btnRight')
const img = document.querySelector('#img')
let imgArr = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
]


let currentSlide = 1
img.setAttribute('src', imgArr[currentSlide])   // фото по умолчанию


function slideLeft () {
    img.setAttribute('src', imgArr[currentSlide - 1])
    currentSlide -= 1
}

function slideRight () {
    img.setAttribute('src', imgArr[currentSlide + 1])
    currentSlide += 1
}

btnLeft.addEventListener('click', slideLeft)
btnRight.addEventListener('click', slideRight)


