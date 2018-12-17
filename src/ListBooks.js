import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component{
  state = {
    searchQuery: '',
    showingBooks: [],
    books: []
  }

  //updating the searchQuery state
  updateSearchQuery = (query) => {

    this.setState({ searchQuery: query })

    if (query) {
      BooksAPI.search(query).then( searchResult => {

        if(searchResult.length)
          this.setState({ showingBooks: searchResult })
        else
          this.setState({ showingBooks: []  })

        }).catch(data => { this.setState({ showingBooks: []  })
                            console.log('error'+ data)
                          })
                }
                else
                this.setState({ showingBooks: this.props.books  })
  }



  /*= (query) => {
    //object destructuring: unpacking props and state into distinct variables
    const { books, onDeleteBook } = this.props
    const { searchQuery, showingBooks } = this.state

    // if it's truthy filter out the books which match that specific pattern
    if (searchQuery) {
      //will escapes any special character inside of query
      //const match = new RegExp(escapeRegExp(searchQuery), 'i')
      // filter the books where the name matches with regular expression and pass to showingBooks
      //showingBooks = books.filter( (book) => match.test(book.title))
      BooksAPI.search(searchQuery).then( function (searchResult) {
        if (!searchResult) {
            this.setState( {showingBooks: []})
        } else {
            this.setState( {showingBooks: searchResult })
        }

        console.log(showingBooks);
        console.log(books);
      }

      )
    } else {
      // showingBooks is going to be what initially was
    this.setState( {showingBooks: books })
    }
  //  console.log(showingBooks);
    //Sorting books in alphabetical order
  //  showingBooks.sort(sortBy('name'))

}*/

  //reseting searchQuery which re-renders the app
  clearQuery = () => {
    this.setState({searchQuery: ''})
  }

  render() {
    const { books, onDeleteBook } = this.props
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
              {console.log("div " + this.state.showingBooks)}
      <div className="search-books-results">
        <ol className="books-grid">
        {/*map through 'this.state.showingBooks' array and list the book's name*/}
          {this.state.showingBooks.map( (book) => (
            <li key={book.id} className='list-book-item'>
            {/*Creating the list items (books)*/}
                <Book
                  authors={ book.authors }
                  title={ book.title }
                  imageLinks={ book.imageLinks }
                />
            </li>
          ))}
        </ol>

      </div>
      {/*showing how many of the specific books it's showing out of the total*/}
      {this.state.showingBooks.length !== books.length && (
        <div className='showing-books'>
          <span>Now showing {this.state.showingBooks.length} of {books.length} total </span>
          <button onClick={this.clearQuery}>Show all</button>
        </div>
      )}

    </div>



    </div>
    )
  }
}

{/*Using PropTypes to specify the types of each prop*/}
ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onDeleteBook: PropTypes.func.isRequired
}

export default ListBooks
