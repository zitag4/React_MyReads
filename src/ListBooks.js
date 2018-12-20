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
<<<<<<< HEAD
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
||||||| merged common ancestors
    this.setState({ searchQuery: query.trim() })
=======
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

>>>>>>> fdc83a1d34d1616439c03f3fcb01db16f178889e
  }

  //reseting searchQuery which re-renders the app
  clearQuery = () => {
    this.setState({searchQuery: ''})
    this.setState({ showingBooks: []  })
  }

  render() {
    const { books } = this.props
    const { searchQuery } = this.state

<<<<<<< HEAD
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
||||||| merged common ancestors
    //this is the filtered array for all of the books that match the specific queries
    let showingBooks
    // if it's truthy filter out the books which match that specific pattern
    if (searchQuery) {
      //will escapes any special character inside of query
      const match = new RegExp(escapeRegExp(searchQuery), 'i')
      // filter the books where the name matches with regular expression and pass to showingBooks
      showingBooks = books.filter( (book) => match.test(book.name))
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
        <button className="close-search">Close</button>
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
=======
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
>>>>>>> fdc83a1d34d1616439c03f3fcb01db16f178889e
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
<<<<<<< HEAD
      </div>
    )
  }
||||||| merged common ancestors

      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
      {/*showing how many of the specific books it's showing out of the total*/}
      {showingBooks.length !== books.length && (
        <div className='showing-books'>
          <span>Now showing {showingBooks.length} of {books.length} total </span>
          <button onClick={this.clearQuery}>Show all</button>
        </div>
      )}

    </div>


      <ol className='list-books'>
      {/*map through 'showingBooks' array and list the book's name*/}
        {showingBooks.map( (book) => (
          <li key={book.id} className='list-book-item'>
          {/*Creating the list items (books)*/}
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
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
            <div className="book-title">To Kill a Mockingbird</div>
            <div className="book-authors">Harper Lee</div>
          </div>


          </li>
        ))}
      </ol>
    </div>
    )
  }
=======
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
>>>>>>> fdc83a1d34d1616439c03f3fcb01db16f178889e
}

/*Using PropTypes to specify the types of each prop*/
ListBooks.propTypes = {
  books: PropTypes.array.isRequired
}

export default ListBooks
