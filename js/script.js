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

// первый вариант
// const btnLeft = document.querySelector('#btnLeft')
// const btnRight = document.querySelector('#btnRight')
// const img = document.querySelector('#img')
// let imgArr = [
//     'img/1.jpg',
//     'img/2.jpg',
//     'img/3.jpg',
//     'img/4.jpg',
// ]

// let currentSlide = 1
// img.setAttribute('src', imgArr[currentSlide])   // фото по умолчанию

// function slideLeft () {
//     if(currentSlide == 0) {
//         return
//     }
//     img.setAttribute('src', imgArr[currentSlide - 1])
//     currentSlide -= 1
//     btnRight.classList.remove('inactive')
//     if(currentSlide == 0) {
//         btnLeft.classList.add('inactive')
//     }
// }

// function slideRight () {
//     if(currentSlide == imgArr.length - 1) {
//         return
//     }
//     img.setAttribute('src', imgArr[currentSlide + 1])
//     currentSlide += 1
//     btnLeft.classList.remove('inactive')
//     if(currentSlide == imgArr.length - 1) {
//         btnRight.classList.add('inactive')
//     }
// }

// btnLeft.addEventListener('click', slideLeft)
// btnRight.addEventListener('click', slideRight)


// второй вариант
const galary = document.querySelector('.gallery-block')
const img = galary.querySelector('#img')
const btnLeft = galary.querySelector('#btnLeft')
const btnRight = galary.querySelector('#btnRight')
let imgArr = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
]

let currentSlide = 2
img.setAttribute('src', imgArr[currentSlide])   // фото по умолчанию

function sliderGallery (e) {
    if(e.target.closest('.left-arrow')) {
        if(currentSlide == 0) {
            return
        }
        img.setAttribute('src', imgArr[currentSlide - 1])
        currentSlide -= 1
        btnRight.classList.remove('inactive')
        if(currentSlide == 0) {
            btnLeft.classList.add('inactive')
        }
    }
    if(e.target.closest('.right-arrow'))  {
        console.log(345345)
        if(currentSlide == imgArr.length - 1) {
            return
        }
        img.setAttribute('src', imgArr[currentSlide + 1])
        currentSlide += 1
        btnLeft.classList.remove('inactive')
        if(currentSlide == imgArr.length - 1) {
            btnRight.classList.add('inactive')
        }
    }
}

galary.addEventListener('click', sliderGallery)


///////////////////////////////////////////////////////////////////////
/* Создать html-страницу с блоками информации, которые от-
крываются по щелчку на заголовок. В один момент времени может 
быть развернут только один блок информации. */

const accordionBlock = document.querySelector('#accordionBlock')
const panel = document.querySelectorAll('.panel')

function accordion(e) {
    if(e.target.closest('.panel')) {
        return
    }
    if(!e.target.nextElementSibling.classList.contains('d-none')) {
        e.target.nextElementSibling.classList.add('d-none')
    } else {
        panel.forEach((el) => {
        el.classList.add('d-none')
        }   
        )
        e.target.nextElementSibling.classList.remove('d-none')
    }
}

accordionBlock.addEventListener('click' , accordion)

///////////////////////////////////////////////////////////////////////

/* Создать html-страницу с новостями. 
Необходимо отлавливать, когда скролл доходит до конца стра-
ницы, и догружать еще новости в список. Новости для подгрузки 
хранить в заранее подготовленном массиве. 
Облегченный вариант: вместо отлова, когда скролл дойдет до 
конца страницы, используйте кнопку в конце списка новостей.
*/

const newsBlock = document.querySelector('#newsBlock')

let newsArray = [
    '111111Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
    '222222222Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
    '33333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
    '444444444444Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
    '555555555555Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
    '666666666666666Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
    '77777777777777Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
    '8888888888Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
    '99999999999999Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
    '10 10 101 0101010101Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
    '11 11 11 11 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
    '12 12 12 12 12 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ratione delectus, rerum deleniti omnis, necessitatibus dolore dignissimos consectetur incidunt doloremque, qui sapiente? Consequatur, ab suscipit culpa sequi doloremque voluptatibus!',
]






