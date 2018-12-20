import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component{
  state = {
    searchQuery: '',
    showingBooks: []
  }

  //updating the searchQuery state
  updateSearchQuery = (query) => {
    this.setState({ searchQuery: query })
    if (query) {
      BooksAPI.search(query).then( (searchResult) => {
        if (searchResult.length)
          this.setState({ showingBooks: searchResult })
        else
          this.setState({ showingBooks: []  })
        }).catch( (data) => { this.setState({ showingBooks: []  })
                            console.log('error'+ data)
           })
    }
    else
      this.setState({ showingBooks: []  })
  }

  //reseting searchQuery which re-renders the app
  clearQuery = () => {
    this.setState({searchQuery: ''})
    this.setState({ showingBooks: []  })
  }

  render() {
    const { books } = this.props
    const { searchQuery } = this.state

    return (
      <div className='app'>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className='close-search'to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                     placeholder="Search by title or author"
                     //in Value: The value of this input field has to be what this.state.searchQuery is
                     value={searchQuery}
                     //in onChange: Whenever the input field changes update the searchQuery
                     onChange={ (event) => this.updateSearchQuery(event.target.value) }
                     />
            </div>
          </div>
                  {/*{console.log("div " + this.state.showingBooks)}*/}
          <div className="search-books-results">
            <ol className="books-grid">
              {/*map through 'this.state.showingBooks' array and list the book's name*/}
              {this.state.showingBooks.map( (book) => (
                <li key={book.id} className='list-book-item'>
                  {/*Creating the list items (books)*/
                  this.props.books.forEach( (mybook) => {
                    if (book.id === mybook.id)
                      book.shelf = mybook.shelf
                  })}
                    <Book
                      id={ book.id}
                      authors={ book.authors }
                      title={ book.title }
                      imageLinks={ book.imageLinks }
                      onShelfUpdate={this.props.onShelfUpdate}
                      shelf={!book.shelf ? 'none' : book.shelf}
                    />
                </li>
              ))}
            </ol>
          </div>
          {/*showing how many of the specific books it's showing*/}
          {this.state.showingBooks.length !== books.length && (
            <div className='showing-books'>
              <span>Now showing {this.state.showingBooks.length} books </span>
              <button onClick={this.clearQuery}>Reset</button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

/*Using PropTypes to specify the types of each prop*/
ListBooks.propTypes = {
  books: PropTypes.array.isRequired
}

export default ListBooks
