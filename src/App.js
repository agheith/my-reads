import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './components/main_page';
import SearchBooks from './components/search_books';


class App extends Component {
  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
                <MainPage />
            )} />


        <Route path="/search" render={() => (
                <SearchBooks showMsg={this.showMsg}/>
            )} />

      </div>
    );
  }
}

export default App;
