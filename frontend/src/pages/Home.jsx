// import React , {useState,useEffect} from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import {Link} from 'react-router-dom';
// import {AiOutlineEdit} from 'react-icons/ai';
// import {BsInfoCircle} from 'react-icons/bs';
// import {MdOutlineAddBox , MdOutlineDelete} from 'react-icons/md';
// // import { IoIconName } from "react-icons/io";
// // import { IoMdHeart } from "react-icons/io";


// const Home = () => {
//   const [books , setBooks] = useState([]);
//   const[loading , setLoading] = useState(false);
//   useEffect(()=>{
//     setLoading(true);
//     axios
//       .get('http://localhost:5555/books')
//       .then((response)=>{
//         setBooks(response.data.data);
//         setLoading(false);
//       })
//       .catch((error)=>{
//         console.log(error);
//         setLoading(false);
//       })
//   },[]);
//   return (
//     <div className='p-4'>
//       <div className='flex justify-between items-center'>
//         <h1 className='text-3xl my-8'>Books List</h1>
//         <Link to= '/books/create'>
//           <MdOutlineAddBox className='text-sky-800 text-4xl'/>
//         </Link>
//       </div>
//       {loading? (
//         <Spinner />
//         ) : (
//           <table className='w-full border-separate border-spacing-2'>
//             <thead>
//               <tr>
//                 <th className='border-slate-600 rounded-md'>No</th>
//                 <th className='border-slate-600 rounded-md'>Title</th>
//                 <th className='border-slate-600 rounded-md'>Author</th>
//                 <th className='border-slate-600 rounded-md'>Publish Year</th>
//                 <th className='border-slate-600 rounded-md'>Operations</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>lcmadeeasy</td>
//                 <td>swaroop</td>
//                 <td>2024</td>
//                 <td></td>
//               </tr>
//               {books.map((book , index) => (
//                 <tr key={book._id} className='h-8'>
//                   <td className='border-slate-700 rounded-md text-center'>
//                     {index + 1}
//                   </td>
//                   <td className='border-slate-700 rounded-md text-center'>
//                     {book.title}
//                   </td>
//                   <td className='border-slate-700 rounded-md text-center max-md:hidden'>
//                     {book.author}
//                   </td>
//                   <td className='border-slate-700 rounded-md text-center max-md:hidden'>
//                     {book.publishYear}
//                   </td>
//                   <td className='border-slate-700 rounded-md text-center'>
//                     <div className='flex justify-center gap-x-4'>
//                       <Link to={`/books/details/${book._id}`}>
//                       <BsInfoCircle className='text-2xl text-green-800'/>
//                       </Link>
//                       <Link to={`/books/edit/${book._id}`}>
//                         <AiOutlineEdit className='text-2xl text-yellow-600'/>
//                       </Link>
//                       <Link to={`/books/delete/${book._id}`}>
//                         <MdOutlineDelete className='text-2xl text-red-600'/>
//                       </Link>
//                     </div>
//                   </td>
//                 </tr>
//                 ))}
//             </tbody>
//           </table>
//       )}
//     </div>
//   )
// }

// export default Home
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:9999/books')
      .then((response) => {
        setBooks(response.data.data);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border border-slate-600">
          <thead>
            <tr>
              <th className="border border-slate-600 p-2">No</th>
              <th className="border border-slate-600 p-2">Title</th>
              <th className="border border-slate-600 p-2">Author</th>
              <th className="border border-slate-600 p-2">Publish Year</th>
              <th className="border border-slate-600 p-2">Operations</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td className="border border-slate-600 text-center p-2">1</td>
              <td className="border border-slate-600 text-center p-2">lcmadeeasy</td>
              <td className="border border-slate-600 text-center p-2">swaroop</td>
              <td className="border border-slate-600 text-center p-2">2024</td>
              <td className="border border-slate-600 text-center p-2">
                <div className="flex justify-center gap-x-2">
                  <BsInfoCircle className="text-2xl text-green-800" />
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </div>
              </td>
            </tr> */}
            {/* <Link to="/books/show/1">Click Me</Link> */}
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-600 text-center p-2">{index + 1}</td>
                <td className="border border-slate-600 text-center p-2">{book.title}</td>
                <td className="border border-slate-600 text-center p-2 max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-600 text-center p-2 max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border border-slate-600 text-center p-2">
                  <div className="flex justify-center gap-x-2">
                    <Link to="/books/show/">
                      <BsInfoCircle className="text-2xl text-green-800 " />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600 " />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600 "/>
                    </Link>
                    {/* <Link to={books/details}>
                      <BsInfoCircle className="text-2xl text-green-800 cursor-pointer" />
                    </Link>x``
                    <Link to={books/edit}>
                      <AiOutlineEdit className="text-2xl text-yellow-600 cursor-pointer" />
                    </Link>
                    <Link to={books/delete}>
                      <MdOutlineDelete className="text-2xl text-red-600 cursor-pointer" />
                    </Link> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
