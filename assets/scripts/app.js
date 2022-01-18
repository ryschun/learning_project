//варіант як це ще можна написати
// const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.getElementById('#add-modal');
// const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
// const confirmAddMovieButton = document.querySelector('.btn--success');
// const userInputs = addMovieModal.getElementsByTagName('input')
const addMovieModal = document.body.children[1];
const cancelAddMovieButton = document.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const userInputs = addMovieModal.querySelectorAll('input');
const movies = [];
const entryTextSection = document.getElementById('entry-text');
const areYouSure = document.getElementById('delete-modal')

const toggleBackDrop = () => {
    backdrop.classList.toggle('visible');
};

//functions:

const showMovieModal = () => { // opens the modal window
    addMovieModal.classList.toggle('visible');
    toggleBackDrop();
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}


const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackDrop();
    clearMovieInputs();
}

const backdropClickHandler = () => {
    cancelMovieDeletion();
    closeMovieModal();
    clearMovieInputs();
}

const clearMovieInputs = () => {
    for (const usrInput of userInputs) {
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
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackDrop();
    clearMovieInputs();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
}

const updateUI = () => { // ми забираємо додаємо опис списку на гол еркані залежно від того є фільми в списку чи нє
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove('');
    // listRoot.removeChild(listRoot.children[movieIndex].remove)
    cancelMovieDeletion();
    updateUI();
}

const cancelMovieDeletion = () => {
    toggleBackDrop();
    areYouSure.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
    areYouSure.classList.add('visible');
    toggleBackDrop();
    const cancelDeletionButton = areYouSure.querySelector('.btn--passive');
    let confirmDeletionButton = areYouSure.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

    confirmDeletionButton = areYouSure.querySelector('.btn--danger');

    // confirmDeletionButton.removeEventListener('click', deleteMovie.bind(null, movieId)); // не буде праюцвати

    cancelDeletionButton.removeEventListener('click', cancelMovieDeletion);

    cancelDeletionButton.addEventListener('click', () => {
        cancelMovieDeletion();
    });

    confirmDeletionButton.addEventListener(
        'click',
        deleteMovie.bind(null, movieId))

};



const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">    
    </div>      
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

// buttons 

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);