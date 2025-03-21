import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import PageError from './Components/PageError/PageError.jsx';
import Home from './Components/Home/Home.jsx';
import DashBoard from './Components/Dashboard/DashBoard.jsx';
import BookDetail from './Components/BookDetail/BookDetail.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
element: <Root></Root>,
errorElement:<PageError></PageError>,
children:[
  {
    path:"/",
    element:<Home></Home>
  },{
    path: "dashboard",
    element: <DashBoard></DashBoard>
  },{ 
    path:"/books/:bookId",
    element:<BookDetail></BookDetail>,
    loader: ()=> fetch('/booksData.json')
    
  },{
    path: "listedBooks",
    element: <ListedBooks></ListedBooks>,
   
    loader:()=> fetch("/booksData.json")
  }
]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
