export function deleteBook(arr, index) {
    arr.splice(index, 1)
    localStorage.setItem('books', JSON.stringify(arr))
    if(arr.length === 0) {
        localStorage.clear()
    }
    document.location.reload()
}