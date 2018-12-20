import React from 'react'
import ListBooks from './ListBooks'
import BookShelf from './BookShelf'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //Lifecycle event: making API request in order to fetch books
  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books })
      //console.log(books);
    })
  }

  //removeBook method
  /*removeBook = (book) => {
    this.setState( (state) => ({
      //filter current books on the states
      //remove where the state books ID does not equal the ID of the book that was cliked on
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }*/

  shelfUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then( () => {
      BooksAPI.getAll().then( (books) => {
        this.setState({ books })
    }).catch( (data) => console.log('error'+ data ))
    }).catch( (data) => console.log('error'+ data ))
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={ () =>
          <BookShelf
            books={this.state.books}
            onShelfUpdate={(this.shelfUpdate)}/>
        }/>
        <Route exact path='/search' render={ () =>
          <ListBooks
            /*onDeleteBook={this.removeBook}*/
            books={this.state.books}
            onShelfUpdate={(this.shelfUpdate)}/>
        }/>
      </div>
    )
  }
}

export default BooksApp
