let update = document.getElementById('empty');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const formEl = document.querySelector('.form');
formEl.addEventListener('submit', event => {
    event.preventDefault();
    let newBook = {
        Author: author.value,
        Title: title.value,
        Pages: pages.value,
        info() {
            return `Author: ${author.value},` + `<br />` + `Title: ${title.value},` + `<br />` + `Pages read: ${pages.value}`; 
        }
    }
    myLibrary.push(newBook);
    displayBook();
    document.forms[0].reset();
})

let myLibrary = [];

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        if (i === (myLibrary.length -1)) {
            const cardEl = document.createElement('div');
            cardEl.classList.add('card');
            cardEl.innerHTML += myLibrary[i].info();
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('remove');
            removeBtn.innerHTML = 'REMOVE';
            cardEl.append(removeBtn);
            removeBtn.addEventListener('click', event => {
                cardEl.innerHTML = '';
                cardEl.classList.remove('card');
            })
            update.appendChild(cardEl); 
        }
    }
}