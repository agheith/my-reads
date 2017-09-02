import React, { Component } from 'react';
import * as BooksAPI from '../utils/BooksAPI';


class Book extends Component{

    addToShelf(book, shelf){
        BooksAPI.update(book, shelf)
          .then((books) => {
            this.props.onShowMsg(shelf);
            if(this.props.onResetShelf) {
              this.props.onResetShelf();
        }
        });
    }

    render(){
        return(
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 120, height: 190, backgroundImage: `url(${this.props.imgurl})` }}></div>

              <div className="book-shelf-changer">
                <select value={this.props.shelf} onChange={(event) => this.addToShelf(this.props.book, event.target.value)}>
                    <option value="return" disabled>Move to...</option>
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
              </div>

            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.author}</div>
          </div>
        )
    }
}


export default Book;
