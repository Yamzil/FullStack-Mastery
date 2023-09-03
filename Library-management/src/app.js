const GetAddButton = document.getElementById('add-book-button');
const GetDeleteButton = document.getElementsByClassName('delete-book-button').item(0);
const GetSaveButton = document.getElementsByClassName('save-book-button').item(0);
const GetCard = document.getElementsByClassName('card-book').item(0);
const showCard = document.querySelector('.card-book');

let FillBookName = document.getElementById('title-input');
let FillBookAuthor = document.getElementById('author-input');
let FillBookRead = document.getElementById('already-read');

let bookList = [];

GetAddButton.addEventListener('click', function () {
    showCard.style.display = 'block';
});

GetDeleteButton.addEventListener('click', function () {
    showCard.style.display = 'none';
});

GetSaveButton.addEventListener('click', function () {
    showCard.style.display = 'none';
    let haveReadValue = FillBookRead.checked ? 'Have Read' : 'Have Not Read';

    let book = {
        title: FillBookAuthor.value,
        author: FillBookName.value,
        AlreadyRead: FillBookRead.checked,
        haveRead: haveReadValue
    };
    bookList.push(book);
    renderBookList();
});


function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
    <div class="book-card">
        <span class="style">Book Title:</span>
        <div class="book-card__title">${book.title}</div>
        <span class="style">Author:</span>
        <div class="book-card__author">${book.author}</div>
        <div class="book-card__read">${book.haveRead}</div>
        <button class="delete-book-button-second">Delete</button>
    </div>
    `;
    bookCard.querySelector('.delete-book-button-second').addEventListener('click', function (event) {
        const bookCard = event.target.closest('.book-card');
        if (bookCard) {
            bookCard.style.display = 'none';
            bookCard.style.backgroundColor = 'red';
            console.log('delete');
        }
    });
    return bookCard;
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-book-button')) {
        const bookCard = event.target.closest('.book-card');
        if (bookCard) {
            bookCard.style.display = 'none';
        }
    }
});



function renderBookList() {
    const bookListContainer = document.querySelector('.card-container');
    bookListContainer.innerHTML = '';
    bookList.forEach(function (book) {
        const bookCard = createBookCard(book);
        bookListContainer.appendChild(bookCard);
    });
}


function googleSignIn() {
    gapi.auth2.getAuthInstance().signIn().then(function (googleUser) {
        // Handle successful login here
        var idToken = googleUser.getAuthResponse().id_token;
        // Send this token to your server for further authentication and user management
    }, function (error) {
        // Handle errors here
        console.error(error);
    });
}

gapi.load('auth2', function () {
    gapi.auth2.init({
        client_id: '453250132334-3jt295i8rlor6564s19j1uj50n4j00o4.apps.googleusercontent.com',
    });
});

