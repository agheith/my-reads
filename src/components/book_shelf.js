import React from 'react';
import { Link } from 'react-router-dom';
import MyShelves from './my_shelves';
import { PropTypes } from 'prop-types';


const BookShelf = (props) => (


    <div className="list-books">

      <div className="list-books-title">
        <h1>My Book Shelf</h1>
      </div>

      <div className="list-books-content">
          <div>
              <MyShelves
                  books={props.books.filter((book) => (book.shelf === "currentlyReading"))}
                  title="Currently Reading"
                  onShelfChange={props.onUpdate}

              />
              <MyShelves
                  books={props.books.filter((book) => (book.shelf === "wantToRead"))}
                  title="Want To Read"
                  onShelfChange={props.onUpdate}

              />
              <MyShelves
                  books={props.books.filter((book) => (book.shelf === "read"))}
                  title="Already Read"
                  onShelfChange={props.onUpdate}

              />
          </div>
      </div>


      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>

    </div>
)

  BookShelf.propTypes = {
      books: PropTypes.array.isRequired,
      onUpdate: PropTypes.func.isRequired
}


export default BookShelf;
