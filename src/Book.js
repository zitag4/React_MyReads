import React, { Component } from 'react'
import App from './App.css'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class Book extends Component {




  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
               style={{ width: 128, height: 193,
                        backgroundImage: this.props.imageLinks ? `url(${this.props.imageLinks.thumbnail})` : ''
                     }}>
          </div>
          <div className="book-shelf-changer">

            <select
                    value={this.shelf}
                    onChange={ (event) => this.props.shelfUpdate(this.props, event.target.value) }>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      <div className="book-title">{this.props.title}</div>
      <div className="book-authors">{this.props.authors}</div>
      </div>
    )
  }
}

export default Book
