//варіант як це ще можна написати
// const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.getElementById('#add-modal');
// const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
// const confirmAddMovieButton = document.querySelector('.btn--success');
// const userInputs = addMovieModal.getElementsByTagName('input')
const addMovieModal = document.body.children[1];
const cancelAddMovieButton = document.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
console.log(confirmAddMovieButton);
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input')
const movies = [];



//functions:

const toggleMovieModal = () => { // opens the modal window
    addMovieModal.classList.toggle('visible');
    toggleBackDrop();
};

const toggleBackDrop = () => {
    backdrop.classList.toggle('visible');
}

const cancelAddMovieHandler = () => {
    toggleMovieModal();
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

const clearMovieInputs = () => {
    for (const usrInput of userInputs){
        usrInput.value = '';
    }

}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if (titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        ratingValue.trim() < 1 ||
        ratingValue.trim() > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5)')
        return;
    }
    const newMovie = {
        title: titleValue,
        iamge: imageUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);