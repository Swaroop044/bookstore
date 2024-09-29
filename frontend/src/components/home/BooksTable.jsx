import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
const BooksTable = ({ books }) => {
    return (
        <div>
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
                                {JSON.stringify(book.publishYear)}
                            </td>
                            <td className="border border-slate-600 text-center p-2">
                                <div className="flex justify-center gap-x-2">
                                    <Link to={`/books/show/${book._id}`}>
                                        <BsInfoCircle className="text-2xl text-green-800 " />
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`}>
                                        <AiOutlineEdit className="text-2xl text-yellow-600 " />
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`}>
                                        <MdOutlineDelete className="text-2xl text-red-600 " />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BooksTable

