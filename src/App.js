
import './App.css';
import * as BooksAPI from './BooksAPI'
import React, {useState , useEffect} from 'react'
import Categories from './Categories';
import Search from './Search';
import NotFound from './NotFound'
import {Route,Routes } from 'react-router-dom';
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
 
  const updateBooks = (book,newSelf)=>{
    BooksAPI.update(book,newSelf)
  }

  BooksAPI.getAll().then(res=>{
    setBooks(res)
  });
  
  // const UpdateBooksContext = React.createContext(updateBooks)
  return (
    <Routes>
      <Route path='/' element= {<Categories books={books} updateBooks={updateBooks}/>}/>
      <Route path='/search' element={<Search books={books} updateBooks={updateBooks}/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
        
  );
}

export default App;
