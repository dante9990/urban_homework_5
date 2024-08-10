export function addBook(arr, obj) {
    obj = {
        id: arr.length + 1,
        img: '../img/book_img.svg',
        title: title.value,
        author: author.value,
        genre: genre.value,
        year: year.value,
        isRead: read.checked
    }
    if (arr.length === 0) {
        
        arr.push(obj)
        localStorage.setItem('books', JSON.stringify(arr))
    } else {
        let newArr = [...arr, obj]
        localStorage.setItem('books', JSON.stringify(newArr))
    }

    document.location.reload()
}