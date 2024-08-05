export function openEditor(obj, arr, index) {
    const editorModal = document.createElement('div')
    editorModal.className = 'editor'
    editorModal.classList.add('editor_active')


    function editBook(title, author, genre, year, read) {
        const newBook = {
            id: obj.id,
            img: obj.img,
            title: title,
            author: author,
            genre: genre,
            year: year,
            isRead: read
        }

        arr.splice(index, 1, newBook)

        localStorage.setItem('books', JSON.stringify(arr))

        document.location.reload()
    }

    editorModal.innerHTML = `<div class="editor__form">
            <div class="editor__close"></div>
            <div>
                <label for="titleE">Название:</label>
                <input type="text" name="titleE" id="titleE" value="${obj.title}">
            </div>
            <div>
                <label for="authorE">Автор:</label>
                <input type="text" name="authorE" id="authorE"  value="${obj.author}">
            </div>
            <div>
                <label for="yearE">Год издания:</label>
                <input type="text" name="yearE" id="yearE"  value="${obj.year}">
            </div>
            <div>
                <label for="genreE">Жанр:</label>
                <input type="text" name="genreE" id="genreE"  value="${obj.genre}">
            </div>
            <div>
                <input type="checkbox" name="readE" id="readE" ${obj.isRead ? 'checked' : ''}>
                <label for="readE">Прочитано?</label>
            </div>
            <button class="book__btn" id="editBook">Изменить</button>
        </div>`
    document.body.prepend(editorModal)

    const editorCloseBtn = editorModal.querySelector('.editor__close')
    editorCloseBtn.addEventListener('click', () => editorModal.remove())

    const titleEdit = editorModal.querySelector('#titleE')
    const authorEdit = editorModal.querySelector('#authorE')
    const genreEdit = editorModal.querySelector('#genreE')
    const yearEdit = editorModal.querySelector('#yearE')
    const readEdit = editorModal.querySelector('#readE')



    const editBookBtn = editorModal.querySelector('#editBook')
    editBookBtn.addEventListener('click', () => {
        editBook(titleEdit.value,
            authorEdit.value,
            genreEdit.value,
            yearEdit.value,
            readEdit.checked)
        editorModal.remove()
    })
}