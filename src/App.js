import React from 'react'
<<<<<<< HEAD
||||||| merged common ancestors
//import Search from './Search'
=======
import SearchBook from './SearchBook'
>>>>>>> fdc83a1d34d1616439c03f3fcb01db16f178889e
import ListBooks from './ListBooks'
<<<<<<< HEAD
import BookShelf from './BookShelf'
import { Route } from 'react-router-dom'
||||||| merged common ancestors
import { Route, Link } from 'react-router-dom'
=======
import BookShelf from './BookShelf'
import { Route, Link } from 'react-router-dom'
>>>>>>> fdc83a1d34d1616439c03f3fcb01db16f178889e
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
<<<<<<< HEAD
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
||||||| merged common ancestors
      return (
        <div>
          <ListBooks onDeleteBook={this.removeBook}
                     books={this.state.books}
          />

    {/*      <Route
            exact path='/search'
            component={Search}
          /> */}
        </div>
      )
    }
=======
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
>>>>>>> fdc83a1d34d1616439c03f3fcb01db16f178889e
  }
}

export default BooksApp
