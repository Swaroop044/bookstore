import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBooks'
import EditBook from './pages/EditBooks'
import DeleteBook from './pages/DeleteBooks'
const App = () => {
  return (
    <Routes>
    <Route path='/' element></Route>
    <Route path='/books/create' element = {<CreateBook></CreateBook>}></Route>
    <Route path='/books/show:id' element={<ShowBook></ShowBook>}></Route>
    <Route path='/books/edit:id' element={<EditBook></EditBook>}></Route>
    <Route path='/books/delete:id' element={<DeleteBook></DeleteBook>}></Route>
    </Routes>
  )
}

export default App
