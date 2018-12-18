import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'



class BookShelf extends Component{
  render() {

    return (


          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.filter( book => book.shelf === 'currentlyReading').map(
                        book => <Book key={book.id}
                        id={ book.id}
                        authors={ book.authors }
                        title={ book.title }
                        imageLinks={ book.imageLinks }
                        onShelfUpdate={this.props.onShelfUpdate}
                        shelf={this.props.shelf}
                        />
                      )}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter( book => book.shelf === 'wantToRead').map(
                      book => <Book key={book.id}
                      id={ book.id}
                      authors={ book.authors }
                      title={ book.title }
                      imageLinks={ book.imageLinks }
                      onShelfUpdate={this.props.onShelfUpdate}
                      shelf={this.props.shelf}
                      />
                    )}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter( book => book.shelf === 'read').map(
                      book => <Book key={book.id}
                    id={ book.id}
                      authors={ book.authors }
                      title={ book.title }
                      imageLinks={ book.imageLinks }
                      onShelfUpdate={this.props.onShelfUpdate}
                      shelf={this.props.shelf}
                      />
                    )}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link className='search-book' to='/search'>Add book</Link>
            </div>
          </div>


    )
  }
}



export default BookShelf
