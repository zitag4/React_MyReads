import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'


class Search extends Component {
  state = {
    query: '',
    searchResult: []
  }

  getResult = (query) => {
    if (query) {
      BooksAPI.search(query).then( result => {
        if(result.error)
          this.setState({ searchResult: [] })
        else
          this.setState({ searchResult: result })
      })
    }
    else
      this.setState({ searchResult: [] })
  }

//debugger


  render() {
    return (

        <div className='search-books'>
          <div className='search-books-bar'>
            <Link className='close-search'to='/'>Close</Link>
            <div className='search-books-input-wrapper'>
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input
                type="text"
                placeholder="Search by title or author"
              //  value={this.state.query}
                onChange={ event => this.getResult(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>


      )}
          </div>
        </div>


    )
  }

}



export default Search
