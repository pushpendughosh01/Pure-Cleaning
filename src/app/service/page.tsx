import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import SmoothScrolling from '@/components/SmoothScrolling'
import React from 'react'
import ServicePage from './Services'

const page = () => {
  return (
    <div>
        <SmoothScrolling>
        <Navbar/>
        <ServicePage/>
        <Footer/>
        </SmoothScrolling>
    </div>
  )
}

export default page