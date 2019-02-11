import React, {Component} from 'react';
import './Fonts.css';
import './Book.css'




class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
        this.edit = this.edit.bind(this);
        this.updateBook = this.updateBook.bind(this)
    }

    edit() {
        const {book} = this.props
        this.setState({
            editing: true
        })

        this.props.setEditFn(book.title, book.author, book.bookImgUrl, book.summary, book.notes)
    }


    updateBook(id) {
        this.props.updateBookFn(id);
        this.setState({
            editing: false 
        })
    }


    render() {
        const {book, deleteBookFn} = this.props
        return(
            <div className="book-card">
                <figure className="book-image">
                    <img src={book.bookImgUrl} alt={book.title} />
                </figure>
                <div className="book-text-buttons">
                    <div className="book-text">
                        <h2>{book.title}</h2>
                        <h4>{book.author}</h4>
                        <div className="summary-notes">
                            <p>{book.summary}</p>
                            <p>Notes: {book.notes}</p>
                        </div>

                    </div>
                    <div className="book-buttons">
                        {this.props.editing ? (
                            <button onClick={ () => this.updateBook(book.id)}><p>save changes</p></button>
                        ) : (
                            <button onClick={ () => this.edit()}><p>update</p></button>
                        )}
                        <button onClick={ () => {deleteBookFn(book.id)}}><p>delete</p></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;