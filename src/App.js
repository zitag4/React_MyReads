import React from 'react'
import Search from './Search'
import ListBooks from './ListBooks'

import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

const books={'name': 'en', 'name': 'te', 'name': 'o'}

class BooksApp extends React.Component {

  render() {

      return (
        <div>
          <ListBooks books={books}/>

          <Route
            exact path='/search'
            component={Search}
          />
        </div>
      )
    }
  }
  export default BooksApp
