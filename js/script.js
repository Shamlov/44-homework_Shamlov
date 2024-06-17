/*Создать html-страницу с трекбаром. 
Предоставить пользователю возможность изменять положение 
синего указателя.*/

let slider = document.getElementById('slider')
let pointer = document.getElementById('pointer')
function movePointerClick(e) {
    if(e.target.closest('#pointer')) {
        return
    }
    pointer.style.cssText = `left: ${e.layerX - 5}px;` 
    console.log(e.layerX)
}

function movePointerSlide (e) {
    pointer.style.cssText = `left: ${e.layerX - 5}px;`
}

slider.addEventListener('click', movePointerClick)
slider.addEventListener('mousedown' , movePointerSlide)

