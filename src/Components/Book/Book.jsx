/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}= book
    return (
  <Link to={`/books/${bookId}`}>
     <div className="border  mx-auto px-4">
            <div className="card bg-base-50 w-96  shadow-xl border my-4">
  <figure className=" bg-gray-300 py-8">
    <img
      src={image}
      className="h-[166px]"
      alt="Shoes" />
  </figure>
  <div className="flex  justify-center gap-4 my-4  rounded">
  {
    tags.map((tag,idx)=> <button className="bg-green-200 rounded p-1" key={idx} >{tag}</button>)
  }
  </div>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{author}</p>
    <div className=" divider border-dotted"></div>
    <div className="card-actions justify-between items-center">
     

     <div className="badge badge-outline">{category}</div>

     <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-300" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" />
</div>



     <div className="badge badge-outline ">{rating}</div>
     
 


    </div>
  </div>
</div>
        </div>
  </Link>
    );
};

export default Book;