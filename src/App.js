import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import BookShelf from './components/book_shelf';
import SearchBooks from './components/search_books';



class App extends Component {


  render() {

    return (
      <div className="app">

          <Route exact path="/" component={BookShelf} />


          <Route path="/search" component={SearchBooks} />

      </div>
    );
  }
}

export default App;
