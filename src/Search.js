
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import * as BooksAPI from './BooksAPI'
import Book from "./Book";
const Search = ({books})=>{

  const [searchBooks,setSearchBooks] = useState([])
  const[searchQuery,setSearchQuery] = useState('')
  const handleQuery = (e)=>{
      setSearchQuery(e.target.value)
  }

  // useEffect(()=>{
  //   const time = setTimeout(() => {
  //     BooksAPI.search(searchQuery,20).then(res => {
  //       setSearchBooks(res)
  //     })
  //   }, 3000);

  //   return ()=>{
  //     clearTimeout(time)
  //   }
  // },[searchQuery])

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
                searchBooks.map(book=><Book key={book.id} book={book}/>)
              }
            </ol>
          </div>
        </div>
    )
}
export default Search;