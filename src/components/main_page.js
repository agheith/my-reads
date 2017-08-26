import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import Shelfs from './shelfs';
import Book from './book'

class MainPage extends Component{
    constructor(props) {
      super(props);
      this.state = {
        currently_reading:[],
        want_to_read:[],
      };
    }

    getAllBooks(){
        BooksAPI.getAll().then((books)=>{
            console.log(books);

            let currently_reading = books.filter((book) => {return book.shelf === Shelfs.currentlyReading});
            let want_to_read = books.filter((book) => {return book.shelf === Shelfs.wantToRead});

            this.setState({
                currently_reading: currently_reading,
                want_to_read: want_to_read,
            })
        })
    }

    resetShelf() {
        this.getAllBooks();
    }

    componentDidMount() {
        this.getAllBooks();
    }


    render(){
        return(
            <div className="list-books">

              <div className="list-books-title">
                <h1>My Book Shelf</h1>
              </div>

              <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {this.state.currently_reading.length > 0 && this.state.currently_reading.map((book)=>(
                                <Book key={book.id}
                                      onResetShelf={this.resetShelf.bind(this)}
                                      book={book}
                                      imgurl={book.imageLinks.thumbnail}
                                      title={book.title}
                                      author={book.authors}
                                      shelf={book.shelf}
                                />
                            ))}
                            </ol>
                        </div>
                    </div>
                </div>
              </div>

              <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {this.state.want_to_read.length > 0 && this.state.want_to_read.map((book)=>(
                                <Book key={book.id}
                                      onResetShelf={this.resetShelf.bind(this)}
                                      book={book}
                                      imgurl={book.imageLinks.thumbnail}
                                      title={book.title}
                                      author={book.authors}
                                      shelf={book.shelf}
                                />
                            ))}
                            </ol>
                        </div>
                    </div>
                </div>
              </div>

              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>

            </div>
        )
    }
}

export default MainPage;
