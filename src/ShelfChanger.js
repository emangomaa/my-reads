
// import * as BooksAPI from './BooksAPI'
const ShelfChanger = ({book})=>{

    const updateShelf = (e)=>{
        // console.log(e.target.value)
    }

    // useEffect(()=>{
    //     BooksAPI.update(book,shelf).then(res=>{
    //         updateBooks(res)
    //     })
    // },[])
    
    return(
        <div className="book-shelf-changer">
            <select defaultValue={book.shelf} onChange={updateShelf}>
                <option value="none" disabled>
                Move to...
                </option>
                <option value="currentlyReading">
                Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default ShelfChanger;