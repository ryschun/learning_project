const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild
console.log(firstLi);

const section = document.querySelector('section');
// section.style.backgroundColor = 'blue';
// section.className = 'red-bg';

const button = document.querySelector('button')
button.addEventListener('click', () => {
    
    section.classList.toggle('red-bg');
    console.log(section.className);
    section.classList.toggle('blue-bg');
    console.log(section.className);
})

// if (section.className === 'red-bg visible'){
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible'
    // }
    // section.classList.toggle('visible');