import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component{

  state = {
    searchQuery: '',
    showingBooks: []
  }

  //updating the searchQuery state
  updateSearchQuery = (query) => {
  /*  let showingBooks
    const {allBooks} =this.props*/
    this.setState({ searchQuery: query.trim() })
  /*  const text = query.trim()
    if (text === '' ) {
      this.setState({ showingBooks: []}); return
    }
    BooksAPI.search(text).then( (response) => {
      if (response) {
        response.map( (book) => {
          allBooks.find( (b) => b.id === book.id)

        })
        this.setState({ showingBooks })
      }
    })*/

  }

  //reseting searchQuery which re-renders the app
  clearQuery = () => {
    this.setState({searchQuery: ''})
  }

  render() {
    //object destructuring: unpacking props and state into distinct variables
    const { books, onDeleteBook } = this.props
    const { searchQuery } = this.state

    //this is the filtered array for all of the books that match the specific queries
    let showingBooks
    // if it's truthy filter out the books which match that specific pattern
    if (searchQuery) {
      //will escapes any special character inside of query
      const match = new RegExp(escapeRegExp(searchQuery), 'i')
      // filter the books where the name matches with regular expression and pass to showingBooks
      showingBooks = books.filter( (book) => match.test(book.title))
    } else {
      //if doesn't match: showingBooks is going to be what initially was
      showingBooks = books
    }
    //Sorting books in alphabetical order
    showingBooks.sort(sortBy('name'))
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
          {/*Link to search page*/}
          <div className="open-search">
            <Link className='search-book' to='/search'>Add book</Link>
          </div>
        </div>
      </div>
      <div className="search-books-results">
      {/*showing how many of the specific books it's showing out of the total*/}
      {showingBooks.length !== books.length && (
        <div className='showing-books'>
          <span>Now showing {showingBooks.length} of {books.length} total </span>
          <button onClick={this.clearQuery}>Show all</button>
        </div>
      )}
        <ol className="books-grid">
        </ol>
      </div>

    </div>

    <ol className='list-books'>
        {/*map through 'showingBooks' array and list the book's name*/}
        {showingBooks.map( (book) => (
          <li key={book.id} className='list-book-item'>
            {/*Creating the list items (books)*/}
            <div className="book">
              <div className="book-top">
                 <div className="book-cover"
                      style={{ width: 128,
                         height: 193,
                         backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}>
                 </div>
                 <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                    {/*Invoke onDeleteBook when the button is clicked on
                      //iterating over whit specific book which is comming from .mop function*/}
                    <button onClick={ () => onDeleteBook(book) } className='book-remove'>
                      Remove
                    </button>
                 </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
    </ol>
  </div>
)}
}

{/*Using PropTypes to specify the types of each prop*/}
ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onDeleteBook: PropTypes.func.isRequired
}

export default ListBooks
