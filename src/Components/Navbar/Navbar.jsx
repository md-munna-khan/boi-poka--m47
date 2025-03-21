import { NavLink } from "react-router-dom";


const Navbar = () => {
const links = <>
 <li><NavLink to="/">Home</NavLink></li>
       
       <li><NavLink to="/listedBooks">Listed Books</NavLink></li>

</>
    return (
        <div>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {links}
    </ul>
  </div> 
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>



        </div>
    );
};

export default Navbar;
// import { useState } from "react";
// import { MdMenuBook,MdClose } from "react-icons/md";
// const Navbar = () => {
//   const [open,setOpen]=useState(false)
//     return (
//         <div className="">
//           <div className=" md:hidden text-2xl" onClick={()=> setOpen(!open)}>
// {
//   open  ?<p><MdMenuBook className="text-3xl ml-8  "></MdMenuBook></p>

  
//   :   <MdClose className="text-3xl ml-8" />
// }
// </div>
            
//           <div className={`md:flex duration-1000 absolute       justify-between md:static  w-11/12 mx-auto ml-8 
//             ${open ? 'top-8 ':"-top-60"}  `} >
        



//             <div>
//               <h3 className=" font-bold"> Book Vibe</h3>
//             </div>
//             <div className=" space-x-2 text-gray-600 md:flex ">
//               <h3>Home</h3>
//               <h3>Listed Books</h3>
//               <h3>Pages to Read</h3>
//             </div>
//             <div className="space-x-2 md:flex">
//               <button className="bg-[#23BE0A] rounded p-1 text-white px-2">Sign In</button>
//               <button className="bg-[#59C6D2] rounded p-1 text-white px-2">Sign up</button>
//             </div>
//           </div>
//         </div>
//     );
// };

// export default Navbar;