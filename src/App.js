import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BookForm from './components/BookForm'

function App() {
  return (
    <div className='app'>
    <Navbar/>
    <main>
      <div className='container'>
      <BookForm/>
      </div>
    </main>
    <Footer/>

    </div>
  )
}

export default App
