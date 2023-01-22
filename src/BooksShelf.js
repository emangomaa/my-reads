
import Book from './Book'
import { update } from './BooksAPI';
import { useState } from 'react';
const BooksShelf = ({shelfTitle,shelfBooks})=>{

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        shelfBooks.map(book => book.shelf === shelfTitle && <Book key={book.id} book={book}/>)
                    }
                </ol>
            </div>
        </div>
    )
}
export default BooksShelf;