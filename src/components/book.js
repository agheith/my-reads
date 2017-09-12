import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

class Book extends Component{

    static propTypes = {
      book: PropTypes.object.isRequired,
      onChange: PropTypes.func.isRequired
    }

    onShelfChange = (event) => {
      this.props.onChange(event.target.value)
    }

    render(){

        let selectedBook = this.props.book;
        let author = selectedBook.authors ? selectedBook.authors.join(' and ') : null;

        return(
          <div className="book">
            <div className="book-top">

              <img className="book-cover" src={this.props.imgurl} alt={selectedBook.title} />

              <div className="book-shelf-changer">
                <select value={selectedBook.shelf} onChange={this.onShelfChange}>
                    <option value="return" disabled>Move to...</option>
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
              </div>

            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{author}</div>
          </div>
        )
    }
}


export default Book;
