import React, {Component} from 'react'
import Book from './book'

class MyShelves extends Component {

    bookUpdate = (book, shelf) => {
      this.props.onShelfChange(book, shelf)
    }

  render() {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books.map((book) => (
                <li key={book.id}>
                    <Book
                        book={book}
                        imgurl={book.imageLinks.thumbnail}
                        author={book.authors}
                        title={book.title}
                        onChange={(shelf) => {
                            this.bookUpdate(book, shelf)
                        }}
                    />
                </li>
                ))}
                </ol>
            </div>
        </div>
    )
  }
}

export default MyShelves;
