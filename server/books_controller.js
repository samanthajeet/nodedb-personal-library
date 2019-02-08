const books = [
    {
        title: `The Martian Chronicles`,
        author: 'Ray Bradbury',
        bookImgUrl: 'https://upload.wikimedia.org/wikipedia/en/4/45/The-Martian-Chronicles.jpg',
        summary: 'Short stories that chronicles the colonization of Mars by humans fleeing from a troubled and eventually atomically devastated Earth, and the conflict between aboriginal Martians and the new colonists. ',
        notes: 'Pretty darn good',
        id: 0,
    },
    {
        title: `Version Control`,
        author: 'Dexter Palmer',
        bookImgUrl: 'https://tinyurl.com/yb9tztxy',
        summary: `The compelling story of a couple living in the wake of a personal tragedy.`,
        notes: 'Pretty darn good',
        id: 1,
    },
    {
        title: `Bossypants`,
        author: 'Tina Fey',
        bookImgUrl: 'https://tinyurl.com/y7nskcng',
        summary: `An autobiographical comedy book written by the American comedian Tina Fey.`,
        notes: 'My mood, always',
        id: 2,
    },

];


module.exports = {

    getBooks: (req, res) => {
        res.status(200).send(books);
    },

    createBook: (req, res) => {
        const {title, author, bookImgUrl, summary, notes} = req.body;
        let id = books.length;
        books.push({
            title,
            author,
            bookImgUrl,
            summary,
            notes,
            id
        }),
        id++;
        res.status(200).send(books);
    },

    deleteBook: (req, res) => {
        const {id} = req.params;

        const index = books.findIndex( (book) => book.id == id);

        books.splice(index,1);

        res.status(200).send(books);
    },

    updateBook: (req, res) => {
        const {id} = req.params;
        const {title, author, bookImgUrl, summary, notes} = req.body;

        let index = books.findIndex( (book) => book.id == id);

        let foundBook = books[index];

        foundBook = {
            title: title || foundBook.title,
            author: author || foundBook.author,
            bookImgUrl: bookImgUrl|| foundBook.bookImgUrl,
            summary: summary || foundBook.summary,
            notes: notes || foundBook.notes,
            id: foundBook.id
        }

        books.splice(index,1, foundBook);

        res.status(200).send(books)
    }




}