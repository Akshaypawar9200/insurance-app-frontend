'use client'
import React from 'react'
import './sample.css'
import Navbar from '@/sharedcomponent/navbar/Navbar'
import { useRouter } from 'next/navigation'
const page = () => {
  const router=useRouter()

  const handleCustomer=()=>{
    router.push('/customer')
  }
  return (
    <>
      <Navbar/>
   
      <div className="main-container">
        <div className="box">
          <div   className="card1">
            <div onClick={handleCustomer} className="card">
              <div  className="info">
                <h5>Customer</h5>
            </div>
          
            </div>
            <div className="card"><div className="info">
            <h5>Agent</h5>
            </div>
           
            </div>

          </div>
          <div className="card1">
            <div className="card"><div className="info">
            <h5>Insurance Type</h5>
            </div>
            
            </div>
            <div className="card"><div className="info">
            <h5>Plan Type</h5>
            </div>
              
            </div>

          </div>
          <div className="card1">
            <div className="card">
              <div className="info">
              <h5>Policies</h5>
              </div></div>
            <div className="card">
              <div className="info">
              <h5>Feedback</h5>
              </div></div>

          </div>
        </div>
      </div>

    </>
  )
}

export default page