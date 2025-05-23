import React from 'react'
import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({ children }) => {
  return (
    <div className='bg-black'>
      <Header />
      {children}
      {/* <Footer></Footer> */}
    </div>
  )
}

export default DefaultLayout