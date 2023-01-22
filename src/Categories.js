
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";
const Categories = ({books,updateBooks})=>{
    return(
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
              <h2 className="bookshelf-title">currentlyReading</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                  {
                    books.filter(book => book.shelf === "currentlyReading").map(book =><Book key={book.id} book={book} updateBooks={updateBooks}/> )
                  }
                  </ol>
              </div>
          </div>
          <div className="bookshelf">
              <h2 className="bookshelf-title">wantToRead</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                  {
                    books.filter(book => book.shelf === "wantToRead").map(book =><Book key={book.id} book={book} updateBooks={updateBooks}/> )
                  }
                  </ol>
              </div>
          </div>
          <div className="bookshelf">
              <h2 className="bookshelf-title">read</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                  {
                    books.filter(book => book.shelf === "read").map(book =><Book key={book.id} book={book} updateBooks={updateBooks}/> )
                  }
                  </ol>
              </div>
          </div>
        </div>
        <div className="open-search">
            <Link to='./search' ></Link>
          </div>
      </div>
    )
}

Categories.propTypes={
  books:PropTypes.array.isRequired,
  updateBooks:PropTypes.func.isRequired
}
export default Categories;