import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:9999/books/${id}`)
    .then((response) => {
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setTitle(response.data.title);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
      alert('An error happened. Please check console');
      });
  },[])
  // useEffect
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.put(`http://localhost:9999/books/${id}`, data)
    .then(() => {
      setLoading(true);
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      alert('An error happened. Please check console')
      console.log(error);
    })
  

  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner/> : '' }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px]'>
        <div className="my-4">
          <label className="text-xl text-gray-500">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='boder-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className="my-4">
          <label className="text-xl text-gray-500">Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='boder-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className="my-4">
          <label className="text-xl text-gray-500">Publish Year</label>
          <input type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className='boder-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>Save</button>
      </div>
    </div>
  )
}

export default EditBook
