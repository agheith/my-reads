import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './components/main_page';
import SearchBooks from './components/search_books';


class App extends Component {
  render() {
    return (
      <div className="app">

        <Route exact path="/" component={MainPage} />


        <Route path="/search" component={SearchBooks} />

      </div>
    );
  }
}

export default App;
