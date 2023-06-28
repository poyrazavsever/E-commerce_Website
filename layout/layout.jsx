import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className='mb-24'>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout