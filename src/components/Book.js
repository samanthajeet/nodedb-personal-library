import React, {Component} from 'react';



class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
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
            <div>

                <h3>{book.title}</h3>
                <img src={book.bookImgUrl} alt={book.title} />
                <h5>{book.author}</h5>
                <p>{book.summary}</p>


                {this.state.editing ? (
                    <button onClick={ () => this.updateBook(book.id)}>Save Changes</button>
                ) : (
                    <button onClick={ () => this.edit()}>Update</button>
                )}


                <button onClick={ () => {deleteBookFn(book.id)}}>Delete</button>


            </div>
        );
    }
}

export default Book;