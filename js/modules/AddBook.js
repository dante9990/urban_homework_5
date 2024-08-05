export function addBook(arr, obj) {
    if (arr.length === 0) {
        obj = {
            id: arr.length + 1,
            img: '../img/book_img.svg',
            title: title.value,
            author: author.value,
            genre: genre.value,
            year: year.value,
            isRead: read.checked
        }
        arr.push(obj)
        localStorage.setItem('books', JSON.stringify(arr))
    } else {
        obj = {
            id: arr.length + 1,
            img: '../img/book_img.svg',
            title: title.value,
            author: author.value,
            genre: genre.value,
            year: year.value,
            isRead: read.checked
        }
        let newArr = [...arr, obj]
        localStorage.setItem('books', JSON.stringify(newArr))
    }

    document.location.reload()
}