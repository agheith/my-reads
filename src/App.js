import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import BookShelf from './components/book_shelf';
import SearchBooks from './components/search_books';



class App extends Component {


  render() {

    return (
      <div className="app">

          <Route exact path="/" render={() => (
              <BookShelf />
              )} />


        <Route path="/search" render={() => (
            <SearchBooks />
            )} />

      </div>
    );
  }
}

export default App;
