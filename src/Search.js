
import { Link } from "react-router-dom";
import { useState} from "react";
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Book from "./Book";
const Search = ({books ,updateBooks})=>{

  const [searchBooks,setSearchBooks] = useState([])
  const[searchQuery,setSearchQuery] = useState('')
  
  
  const handleQuery = (e)=>{
    setSearchQuery(e.target.value)

    getSeachBooks(searchQuery)
}

const getSeachBooks = (query)=>{

  if(query.length === 0){
    setSearchBooks([])
  }
  else{
    BooksAPI.search(query).then(res =>{
      if(res.error){
        setSearchBooks([])
      }
      else{
        setSearchBooks(res)
      }
    })
  }

}
  


    return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to='/'
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={searchQuery}
                onChange={handleQuery}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
              
                searchBooks.map(searchBook=>{
                  
                  books.forEach(book =>{
                    
                    if(book.id !== searchBook.id){
                      searchBook.shelf ='None' ;
                    }
                    else{
                      searchBook.shelf = book.shelf ;
                    }
                  })
                  return <Book key={searchBook.id} book={searchBook} updateBooks={updateBooks}/>
                })
              }
            </ol>
          </div>
        </div>
    )
}
Search.propTypes={
  books:PropTypes.array.isRequired,
  updateBooks:PropTypes.func.isRequired
}
export default Search;