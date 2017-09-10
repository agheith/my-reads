import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './utils/BooksAPI';
import { Route } from 'react-router-dom';
import BookShelf from './components/book_shelf';
import SearchBooks from './components/search_books';
import MsgBox from './components/msg_box';



class App extends Component {

  constructor(props){
      super(props);
      this.state= {
          books: [],
          popMsg: [
              this.currentlyReading: "Currently Reading",
              this.wantToRead: "Want To Read",
              this.read: "Already Read"
          ],
          msgDisplay: 'none',
      }
  }

    showMsg(shelf){
    this.setState({
      popMsg: shelf,
      msgDisplay: 'block'
    }, () => {
      setTimeout(() => {
        this.setState({
          popMsg: '',
          msgDisplay: 'none'
        });
    } , 2000);
    })
    console.log(shelf);
    }

  componentDidMount() {
      this.getAllBooks()
  }

  getAllBooks = () => {
      BooksAPI.getAll()
        .then((books) => {
            this.setState({ books })
            console.log(books);
        })
  }

  addToShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
          this.showMsg(shelf);
          this.getAllBooks()
      })
  }


  render() {

    return (
      <div className="app">
          <MsgBox display={this.state.msgDisplay} status={this.state.popMsg}/>
          <Route exact path="/" render={() => (

                <BookShelf
                    books={this.state.books}
                    onUpdate={this.addToShelf}
                />
              )} />

          <Route path="/search" render={() => (
                  <SearchBooks
                      Books={this.state.books}
                      onUpdate={this.addToShelf}

                  />
              )} />

      </div>
    );
  }
}

export default App;
