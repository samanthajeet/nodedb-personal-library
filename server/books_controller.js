const books = [
    {
        title: `The Martian Chronicles`,
        author: 'Ray Bradbury',
        bookImgUrl: 'https://upload.wikimedia.org/wikipedia/en/4/45/The-Martian-Chronicles.jpg',
        summary: 'Short stories that chronicles the colonization of Mars by humans fleeing from a troubled and eventually atomically devastated Earth, and the conflict between aboriginal Martians and the new colonists. ',
        notes: 'Great read',
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
    {
        title: `Becoming`,
        author: 'Michelle Obama',
        bookImgUrl: 'https://images.gr-assets.com/books/1528206996l/38746485.jpg',
        summary: `In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world’s most famous address. `,
        notes: `She's a great storyteller`,
        id: 3,
    },
    {
        title: `Harry Ptter and the Deathly Hallows`,
        author: 'J.K. Rowling',
        bookImgUrl: 'https://images.gr-assets.com/books/1474171184l/136251.jpg',
        summary: `To stop Voldemort, Harry knows he must find the remaining Horcruxes and destroy them.

        He will have to face his enemy in one final battle. `,
        notes: ``,
        id: 4,
    },
    {
        title: `Mere Christianity`,
        author: 'C.S. Lewis',
        bookImgUrl: 'https://images.gr-assets.com/books/1468102872l/11138.jpg',
        summary: `In the classic Mere Christianity, C.S. Lewis, the most important writer of the 20th century, explores the common ground upon which all of those of Christian faith stand together. Bringing together Lewis’ legendary broadcast talks during World War Two from his three previous books The Case for Christianity, Christian Behavior, and Beyond Personality, Mere Christianity provides an unequaled opportunity for believers and nonbelievers alike to hear this powerful apologetic for the Christian faith.
        
        In the classic Mere Christianity, C.S. Lewis, the most important writer of the 20th century, explores the common ground upon which all of those of Christian faith stand together. Bringing together Lewis’ legendary broadcast talks during World War Two from his three previous books The Case for Christianity, Christian Behavior, and Beyond Personality, Mere Christianity provides an unequaled opportunity for believers and nonbelievers alike to hear this powerful apologetic for the Christian faith.`,
        notes: ``,
        id: 5,
    },
    {
        title: `Harry Potter and the Sorcerer's Stone`,
        author: 'J.K. Rowling',
        bookImgUrl: 'https://images.gr-assets.com/books/1474154022l/3.jpg',
        summary: `Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands. But doing so will bring him into contact with forces more terrifying than he ever could have imagined.`,
        notes: ``,
        id: 6,
    },


];


module.exports = {

    getBooks: (req, res) => {
        res.status(200).send(books);
    },

    searchBookByTitle: (req, res) => {
        let filtered = books.filter( (book) => book.title.toLowerCase() == req.query.title.toLowerCase());
        res.status(200).send(filtered)
    },

    searchBookByAuthor: (req, res) => {
        let filtered = books.filter( (book) => book.author.toLowerCase() == req.query.author.toLowerCase());
        res.status(200).send(filtered)
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