import React from 'react'
import Search from './Search'
import ListBooks from './ListBooks'

import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  //Add array to component state
  state = {
    books: [{'id':'1', 'name': 'en'},
                  {'id':'2', 'name': 'te'},
                  {'id':'3', 'name': 'o'}]
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
        <div>
          <ListBooks books={this.state.books}/>

          <Route
            exact path='/search'
            component={Search}
          />
        </div>
      )
    }
  }
  export default BooksApp
