const book = {
    title: 'Book One',
    author: 'Tausif',
    published: 2013,
    getSummery: function () {
        return `${this.title} was writter by ${this.author} in ${this.published}`
    },
}

console.log(book.getSummery())

// to get values
console.log(Object.keys(book))

// to get the keys
console.log(Object.values(book))
