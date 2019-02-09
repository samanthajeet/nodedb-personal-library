import React, { Component } from 'react';
import Book from './Book';
import axios from 'axios';
import './Library.css'
import Greeting from './Greeting'

class Library extends Component {
    constructor(){
        super();
        this.state ={
            books: [],
            title: ``,
            author: '',
            bookImgUrl: '',
            summary: ``,
            notes: ``,
            id: 0,
            editing: false,
            userSearch: ''
        }
        this.deleteBook = this.deleteBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.setEdit = this.setEdit.bind(this);
        
    }

    componentDidMount() {
        axios.get('/api/books').then( (res) => {
            this.setState({
                books: res.data
            })
        })
    }

    handleTitle(value) {
        this.setState({
            title: value
        })
    }

    handleAuthor(value) {
        this.setState({
            author: value
        })
    }

    handleImgUrl(value) {
        this.setState({
            bookImgUrl: value
        })
    }

    handleSummary(value) {
        this.setState({
            summary: value
        })
    }

    handleNotes(value) {
        this.setState({
            notes: value
        })
    }

    handleSearch(value) {
        this.setState({
            userSearch: value
        })
    }


    createBook(title, author, bookImgUrl, summary, notes){
        axios.post('/api/book', {title, author, bookImgUrl, summary, notes}).then( (res) => {
            this.setState({
                books: res.data
            })
        })
        this.setState({
            title: ``,
            author: '',
            bookImgUrl: '',
            summary: ``,
            notes: ``,
        })
    }

    
    deleteBook(id){
        axios.delete(`/api/book/${id}`).then( (res) => {
            this.setState({
                books: res.data
            })
        })

    }

    setEdit(title, author, bookImgUrl, summary, notes ){
        this.setState({
            title,
            author,
            bookImgUrl,
            summary,
            notes,
            editing: true
        })
    }

    updateBook(id) {
        const {title, author, bookImgUrl, summary, notes } = this.state
        axios.put(`/api/book/${id}`, {title, author, bookImgUrl, summary, notes}).then( (res) => {
            this.setState({
                books:res.data,
                title: ``,
                author: '',
                bookImgUrl: '',
                summary: ``,
                notes: ''
            })
        })
    }

    searchByTitle(){
        axios.get(`/api/searchBookByTitle?title=${this.state.userSearch}`).then( (req) => {
            if (req.data.length < 1) {
                alert('no books found')
            } else {
            this.setState({
                books: req.data
            })}
        })
        this.setState({
            userSearch: ''
        })
    }



    render() { 
        const {title, author, bookImgUrl, summary, notes, userSearch} = this.state
        let mappedBooks = this.state.books.map( (book, index) => {
            return (
                <div key={index}>
                <Book
                    key={book.id}
                    book={book}
                    deleteBookFn={this.deleteBook}
                    updateBookFn={this.updateBook}
                    setEditFn={this.setEdit}
                    setTitle={this.handleTitle}
                />
                </div>
            )
        })
        return (
            <div>
                <div className="library">
                    <Greeting className="greeting" name={this.props.user} />
                    <div className="create-search-bar">
                        <div className="create-edit-input">
                            <input type="text" placeholder="Book Title" onChange={ (e) => this.handleTitle(e.target.value)} value={title}/>
                            <input type="text" placeholder="Author" onChange={ (e) => this.handleAuthor(e.target.value)} value={author}/>
                            <input type="text" placeholder="Book Image Url" onChange={ (e) => this.handleImgUrl(e.target.value)} value={bookImgUrl}/>
                            <input type="text" placeholder="Summary" onChange={ (e) => this.handleSummary(e.target.value)} value={summary}/>
                            <input type="text" placeholder="Notes" onChange={ (e) => this.handleNotes(e.target.value)} value={notes} />
                            <button onClick={() => this.createBook(title, author, bookImgUrl, summary, notes)}>Add New Book</button>
                        </div>
                        <div className="search-by-title">
                            <input placeholder="Book Title to Search" onChange={(e) => this.handleSearch(e.target.value)} value={this.state.userSearch}/>
                            <button onClick={() => this.searchByTitle(this.state.userSearch)}> Searchby Title</button>
                            <button onClick={() => this.componentDidMount()}>Reset Search Results</button>
                        </div>
                    </div>
                </div>
                <div className="book-display">
                {mappedBooks}
                </div>

            </div>

         );
    }
}
 
export default Library;