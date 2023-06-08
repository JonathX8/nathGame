// // Array untuk menyimpan closeButton dan openButton
// var closeButtons = [];
// var openButtons = [];

// // Array untuk menyimpan review elements
// var reviews = [];

// // Mengisi array closeButton, openButton, dan reviews dengan elemen-elemen yang sesuai
// for (var i = 1; i <= 8; i++) {
//     closeButtons[i] = document.querySelector('#review' + i + ' button');
//     openButtons[i] = document.querySelector('#openButton' + i);
//     reviews[i] = document.querySelector('#review' + i);
// }

// // Event listener untuk closeButton
// for (var i = 1; i <= 8; i++) {
//     closeButtons[i].addEventListener('click', (function (index) {
//         return function () {
//             reviews[index].style.display = 'none';
//         }
//     })(i));
// }

// // Event listener untuk openButton
// for (var i = 1; i <= 8; i++) {
//     openButtons[i].addEventListener('click', (function (index) {
//         return function () {
//             reviews[index].style.display = 'block';
//         }
//     })(i));
// }


// Mengambil elemen-elemen yang diperlukan

var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener('click', function (event) {
        event.preventDefault()
        toggleModal()
    })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function (evt) {
    evt = evt || window.event
    var isEscape = false
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc")
    } else {
        isEscape = (evt.keyCode === 27)
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
        toggleModal()
    }
};


function toggleModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
};