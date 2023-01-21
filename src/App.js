
import './App.css';
import * as BooksAPI from './BooksAPI'
import React, {useState , useEffect} from 'react'
import Categories from './Categories';
function App() {
  // TODO : inaial state of books 
  const [books,setBooks] = useState([])
  // TODO : get All books form API and set state of books
  useEffect(()=>{
      BooksAPI.getAll().then(res=>{
        setBooks(res)
        // console.log(res)
      });
  },[])
 
  const updateBooks = ()=>{
  }
  // const UpdateBooksContext = React.createContext(updateBooks)
  return (
    <div className="App">
      {/* <UpdateBooksContext.Provider value={updateBooks}> */}
        <Categories books={books}/>
      {/* </UpdateBooksContext.Provider> */}
      
    </div>
  );
}

export default App;
