import React, { Component } from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import { Link } from 'react-router-dom';
import Book from './book';
import MsgBox from './msg_box';
import _ from 'lodash';


class SearchBooks extends Component{
    constructor(props){
        super(props);
        this.state = {
            popMsg: '',
            msgDisplay: 'none',
            loader: 'none',
            query : '',
            results: [],
            error: false,
        }
    }

    showMsg(status){
    this.setState({
      popMsg: status,
      msgDisplay: 'block'
    }, () => {
      setTimeout(() => {
        this.setState({
          popMsg: '',
          msgDisplay: 'none'
        });
    } , 4000);
    })
  }


    onInputChange = (query) => {
            this.setState({ query }, this.performSearch);
        }

    performSearch(){
        if(this.state.query === ''){
            //Reset
            this.clearSearchResults();
            return;
        }
        _.debounce((query) => { this.performSearch(query) }, 500)
        this.setState({ loader: "block"});
        BooksAPI.search(this.state.query.trim()).then((books) => {
            if(books.error && books.error === "empty query"){
                // No Results
                this.setState({
                    loader: "none",
                    error: true,
                    results: []
                });
            } else{
                if(this.state.results !== books){
                    this.setState({results: books});
                    console.log(books);
                }
                this.setState({loader:"none", error: false});
            }
        })
        .catch((error) => console.log("error", error));
    }

    clearQuery = (query) => {
        this.setState({query: ''});
    }

    clearSearchResults = (query) => {
        this.setState({results: []});
    }

    render(){

        return(
            <div className="search_books">

            <MsgBox display={this.state.msgDisplay} status={this.state.popMsg}/>

              <div className="search-books-bar">

                <Link to="/" className="close-search" >Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text"
                         placeholder="Search by title or author"
                         value={this.state.query}
                         onChange={(event) => this.onInputChange(event.target.value)}
                    />
                </div>

              </div>

              <div className="search-books-results">

                <img alt="loader " className="center" style={{width: "350px", display: this.state.loader}} src={require("../img/books.gif")} />
                {this.state.error && <p>The Book you are searching for is not available</p>}

                <ol className="books-grid">
                    {this.state.results.length > 0 && this.state.results.map((book) => (
                        <Book key={book.id}

                              book={book}
                              imgurl={book.imageLinks.thumbnail}
                              title={book.title}
                              author={book.authors}
                              onShowMsg={this.showMsg.bind(this)}
                        />
                    ))}
                </ol>
              </div>
            </div>
        )
    }
}

export default SearchBooks;
