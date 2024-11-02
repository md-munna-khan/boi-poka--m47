import { useLoaderData, useParams } from "react-router-dom";
import {getAddList} from '../utility/addToDb'


const BookDetail = () => {


    const {bookId} = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData()
    const book = data.find(book => book.bookId === id)

    const {bookId:currentBookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} =book


    const handleMarksAsRead = (id)=>{

getAddList(id)
    }
  
    return (
        <div>
           <div className=" grid grid-cols-4 gap-8 my-8 ">
           <div className=" bg-gray-300 py-10 col-span-2 flex justify-center">
    <div className=" items-center  ">
    <img
      src={image}
      className="    h-[500px]"
      alt="Shoes" />
    </div>
  </div>
<div className=" col-span-2 space-y-4"> 
    
    <h1 className=" text-3xl">{bookName}</h1>
    <h3>By :{author}</h3>
    <hr />
    
    <p className="text-gray-500">{review}</p>
    <hr />
    <p>{tags}</p> 
    <hr />
    <p className="text-gray-500">number of page :{totalPages}</p>
    <p className="text-gray-500">Publisher: {publisher}</p>
    <p className="text-gray-500">Year of Publisher: {yearOfPublishing}</p>
    <p className="text-gray-500">Rating: {rating}</p>
    
    <button onClick={()=> handleMarksAsRead(currentBookId)} className="btn btn-outline" >Mark as Read </button>
    <button className=" btn bg-emerald-400 ml-4">add to the Wishlist</button>
     </div>
           </div>
        </div>
    );
};

export default BookDetail;