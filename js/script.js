import { addBook } from "./modules/AddBook.js"
import { openEditor } from "./modules/Edit.js"
import { deleteBook } from "./modules/deleteBook.js"


let book = null
let books = JSON.parse(localStorage.getItem('books')) || []
let booksGenre = JSON.parse(sessionStorage.getItem('genre')) || null
let booksRead = JSON.parse(sessionStorage.getItem('read')) || null
let booksUread = JSON.parse(sessionStorage.getItem('unread')) || null

const openAddBookBtn = document.getElementById('add')
const addBookBtn = document.getElementById('addBook')
const removeAllBookBtn = document.getElementById('removeAll')

const main = document.querySelector('.main')

const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__close')

const title = document.getElementById('title')
const author = document.getElementById('author')
const genre = document.getElementById('genre')
const year = document.getElementById('year')
const read = document.getElementById('read')

const footer = document.querySelector('.footer')
const cancel = document.createElement('button')
cancel.classList.add('btn')
cancel.innerHTML = `Отменить фильтр`

openAddBookBtn.addEventListener('click', () => { modal.classList.add('modal_active') })

closeModal.addEventListener('click', () => {
    title.value = ''
    author.value = ''
    genre.value = ''
    year.value = ''
    read.checked = false
    modal.classList.remove('modal_active')
})

removeAllBookBtn.addEventListener('click', () => localStorage.clear())

addBookBtn.addEventListener('click', () => {
    addBook(books, book)
    title.value = ''
    author.value = ''
    genre.value = ''
    year.value = ''
    read.checked = false
    modal.classList.remove('modal_active')
})


function fitlerOnGenre(arr) {
    let genrePrompt = prompt('Введите жанр:', '')
    if (genrePrompt) {
        const newArr = arr.filter(book => book.genre === genrePrompt)
        sessionStorage.setItem('genre', JSON.stringify(newArr))
        document.location.reload()
        if (newArr.length === 0) {
            alert('Книг с таким жанром нет')
        }
    }
}

function filterOnRead(arr) {
    const newArr = arr.filter(book => book.isRead)
    sessionStorage.setItem('read', JSON.stringify(newArr))
    document.location.reload()
    if (newArr.length === 0) {
        alert('Прочитанных книг нет')
    }

}

function filterOnUnead(arr) {
    const newArr = arr.filter(book => !book.isRead)
    sessionStorage.setItem('unread', JSON.stringify(newArr))
    document.location.reload()
    if (newArr.length === 0) {
        alert('Прочитанных книг нет')
    }

}

const filtGenreBtn = document.querySelector('#filterGenre')
filtGenreBtn.addEventListener('click', () => {
    fitlerOnGenre(books)
})

const filtReadBtn = document.querySelector('#readBook')
filtReadBtn.addEventListener('click', () => { filterOnRead(books) })

const filtUneadBtn = document.querySelector('#unreadBook')
filtUneadBtn.addEventListener('click', () => { filterOnUnead(books) })

if (booksGenre !== null) {
    footer.prepend(cancel)
    document.querySelector('.btns').classList.add('hidden')
    cancel.addEventListener('click', () => {
        sessionStorage.clear()
        document.location.reload()
    })
    booksGenre.forEach((item, index) => {
        const article = document.createElement('article')
        article.className = 'book'
        article.innerHTML = `
                <img src="${item.img}" alt="Изображение книги" class="book__img">
                <span class="book__title">${item.title}</span>
                <span class="book__author">${item.author}</span>
                <span class="book__genre">${item.genre}</span>
                <span class="book__genre">${item.year}</span>
                <span class="book__read">${item.isRead ? 'Прочитано' : 'Не прочитано'}</span>
                <button class="book__btn" id="edit">Редактировать</button>
                <button class="book__btn" id="delete">Удалить</button>`
        main.append(article)

        const editBtn = article.querySelector('#edit')
        editBtn.addEventListener('click', () => { openEditor(item, books, index) })

        const deleteBookBtn = article.querySelector('#delete')
        deleteBookBtn.addEventListener('click', () => { deleteBook(books, index) })
    });

} else if (booksRead !== null) {
    footer.prepend(cancel)
    document.querySelector('.btns').classList.add('hidden')
    cancel.addEventListener('click', () => {
        sessionStorage.clear()
        document.location.reload()
    })
    booksRead.forEach((item, index) => {
        const article = document.createElement('article')
        article.className = 'book'
        article.innerHTML = `
                <img src="${item.img}" alt="Изображение книги" class="book__img">
                <span class="book__title">${item.title}</span>
                <span class="book__author">${item.author}</span>
                <span class="book__genre">${item.genre}</span>
                <span class="book__genre">${item.year}</span>
                <span class="book__read">${item.isRead ? 'Прочитано' : 'Не прочитано'}</span>
                <button class="book__btn" id="edit">Редактировать</button>
                <button class="book__btn" id="delete">Удалить</button>`
        main.append(article)

        const editBtn = article.querySelector('#edit')
        editBtn.addEventListener('click', () => { openEditor(item, books, index) })

        const deleteBookBtn = article.querySelector('#delete')
        deleteBookBtn.addEventListener('click', () => { deleteBook(books, index) })
    });
} else if (booksUread !== null) {
    footer.prepend(cancel)
    document.querySelector('.btns').classList.add('hidden')
    cancel.addEventListener('click', () => {
        sessionStorage.clear()
        document.location.reload()
    })
    booksUread.forEach((item, index) => {
        const article = document.createElement('article')
        article.className = 'book'
        article.innerHTML = `
                <img src="${item.img}" alt="Изображение книги" class="book__img">
                <span class="book__title">${item.title}</span>
                <span class="book__author">${item.author}</span>
                <span class="book__genre">${item.genre}</span>
                <span class="book__genre">${item.year}</span>
                <span class="book__read">${item.isRead ? 'Прочитано' : 'Не прочитано'}</span>
                <button class="book__btn" id="edit">Редактировать</button>
                <button class="book__btn" id="delete">Удалить</button>`
        main.append(article)

        const editBtn = article.querySelector('#edit')
        editBtn.addEventListener('click', () => { openEditor(item, books, index) })

        const deleteBookBtn = article.querySelector('#delete')
        deleteBookBtn.addEventListener('click', () => { deleteBook(books, index) })
    });
}
else {
    books.forEach((item, index) => {
        const article = document.createElement('article')
        article.className = 'book'
        article.innerHTML = `
                <img src="${item.img}" alt="Изображение книги" class="book__img">
                <span class="book__title">${item.title}</span>
                <span class="book__author">${item.author}</span>
                <span class="book__genre">${item.genre}</span>
                <span class="book__genre">${item.year}</span>
                <span class="book__read">${item.isRead ? 'Прочитано' : 'Не прочитано'}</span>
                <button class="book__btn" id="edit">Редактировать</button>
                <button class="book__btn" id="delete">Удалить</button>`
        main.append(article)

        const editBtn = article.querySelector('#edit')
        editBtn.addEventListener('click', () => { openEditor(item, books, index) })

        const deleteBookBtn = article.querySelector('#delete')
        deleteBookBtn.addEventListener('click', () => { deleteBook(books, index) })
    });
}



const score = document.querySelector('#score')
score.innerHTML = `Количество книг в списке: ${books.length}`