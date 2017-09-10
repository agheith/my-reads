import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyShelves from './my_shelves';


class BookShelf extends Component{


    render(){

        return(
            <div className="list-books">

              <div className="list-books-title">
                <h1>My Book Shelf</h1>
              </div>

              <div className="list-books-content">
                  <div>
                      <MyShelves
                          books={this.props.books.filter((book) => (book.shelf === "currentlyReading"))}
                          title="Currently Reading"
                          onShelfChange={this.props.onUpdate}

                      />
                      <MyShelves
                          books={this.props.books.filter((book) => (book.shelf === "wantToRead"))}
                          title="Want To Read"
                          onShelfChange={this.props.onUpdate}

                      />
                      <MyShelves
                          books={this.props.books.filter((book) => (book.shelf === "read"))}
                          title="Already Read"
                          onShelfChange={this.props.onUpdate}

                      />
                  </div>
              </div>


              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>

            </div>
        )
    }
}

export default BookShelf;
