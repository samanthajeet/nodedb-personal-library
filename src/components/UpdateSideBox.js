import React, {Component} from 'react'


class UpdateSideBox extends Component {

    state = {  }
    render() { 
        let {updateBook, editBook, book, setTitle } = this.props
        let {title, author, bookImgUrl, summary, notes} = this.props.book
        return ( 
            <div>
                {this.props.edit ? (
                    <input placeholder="title" value={title} onChange={ (e) => setTitle(e.target.value)} />
                ) : (
                    <p></p>
                )}

                {this.props.edit ? (
                    <input placeholder="author" value={author}/>
                ) : (
                    <p></p>
                )}

                {this.props.edit ? (
                    <input placeholder="Book Image URL" value={bookImgUrl}/>
                ) : (
                    <p></p>
                )}

                {this.props.edit ? (
                    <input placeholder="summary" value={summary}/>
                ) : (
                    <p></p>
                )}

                {this.props.edit ? (
                    <input placeholder="notes" value={notes}/>
                ) : (
                    <p></p>
                )}

                {this.props.edit? (
                    <button onClick={ () => updateBook(book.id)}>Save Changes</button>
                ) : (
                    <button onClick={ () => editBook()}>Update</button>
                )}

            </div>
         );
    }
}
 
export default UpdateSideBox;