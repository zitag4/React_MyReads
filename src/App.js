import React from 'react'
import SearchBook from './SearchBook'
import ListBooks from './ListBooks'
import BookShelf from './BookShelf'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  //Add array to component state
  state = {
    books: []
  }
  //Lifecycle event: making API request in order to fetch books
  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books })
    })
  }

//removeBook method
  removeBook = (book) => {
    this.setState((state) => ({
      //filter current books on the states
      //remove where the state books ID does not equal the ID of the book that was cliked on
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }



  render() {
      return (
        <div className='app'>
        <Route exact path='/' render={ () => (
          <ListBooks onDeleteBook={this.removeBook}
                     books={this.state.books}
          />
        )}/>


        <Route
            path='/search' render={ () => (
              <SearchBook
                allBooks={this.state.books}

              />

            )}
          />

        </div>
      )
    }
  }
  export default BooksApp
