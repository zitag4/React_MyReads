import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component{
  state = {
    searchWord: ''
  }

  render() {

    return (
    <div className='app'>

    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search">Close</button>
        <div className="search-books-input-wrapper">
          {/*in Value: The value of this input field has to be what this.state.searchWord is*/}
          {/*in onChange: Whenever the input field changes update the searchWord*/}
          <input type="text"
          placeholder="Search by title or author"

          value={this.state.searchWord}

          //onChange={}
          />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>


      <ol className='list-books'>
      {/*map through 'books' array and list the book's name*/}
        {this.props.books.map( (book) => (
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
                <button onClick={ () => this.props.onDeleteBook(book) } className='book-remove'>
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
}

{/*Using PropTypes to specify the types of each prop*/}
ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onDeleteBook: PropTypes.func.isRequired
}

export default ListBooks
