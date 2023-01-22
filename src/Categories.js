import BooksShelf from "./BooksShelf";
import { Link } from "react-router-dom";
const Categories = ({books})=>{
  const categories = ['currentlyReading','wantToRead','read']
    return(
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            {
              categories.map(category => <BooksShelf key={category} shelfTitle={category} shelfBooks = {books}/>)
            }
        </div>
        <div className="open-search">
            <Link to='./search' ></Link>
          </div>
      </div>
    )
}
export default Categories;