import React, { Component } from 'react'

class ListBooks extends Component{
  render() {

    return (
      <ol className='list-books'>
      //map through 'books' array and list the book's name
        {this.props.books.map( (book) => (
          <li key={book.id}>
            {book.name}
          </li>
        ))}
      </ol>
    )
  }
}

export default ListBooks
