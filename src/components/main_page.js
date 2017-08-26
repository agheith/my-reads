import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import Shelfs from './shelfs';
import Book from './book'

class MainPage extends Component{
    state={
        currently_reading:[]
    }


    getAllBooks(){
        BooksAPI.getAll().then((books)=>{
            console.log(books);

            let currently_reading = books.filter((book) => {return book.shelf === Shelfs.currentlyReading});

            this.setState({
                currently_reading: currently_reading
            })
        })
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
                                      book={book}
                                      imgurl={book.imageLinks.thumbnail}
                                      title={book.title}
                                      author={book.authors}
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
