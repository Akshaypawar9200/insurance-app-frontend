'use client'
import React, { useState,useEffect} from 'react'
import './sample.css'
import Navbar from '@/sharedcomponent/navbar/Navbar'
import { useRouter } from 'next/navigation'

const page = () => {
const [animationTriggered, setAnimationTriggered] = useState(false);

  const router=useRouter()
  useEffect(() => {
    setAnimationTriggered(true);
  }, []);
  const handleInsurance=()=>{
    router.push('/insurance')
  }
  const handlePlan=()=>{
    router.push('/plan')
  }
  const handleAllFeedback=()=>{
    router.push('/feedback')
  }
  const handleAllPolicy=()=>{
    router.push('/admindashboardforpolicy')
  }

  return (
    <>
      <Navbar/>
   
      <div className="main-container">
        <div className="box">
          <div   className="card1">
          <div onClick={handleInsurance} className={`card ${animationTriggered ? 'animated' : ''}`}>
              <div  className="info">
                <h5>Insurance Type</h5>
            </div>
          
            </div>
            <div  onClick={handlePlan} className={`card ${animationTriggered ? 'animated' : ''}`}><div className="info">
            <h5>Plan</h5>
            </div>
           
            </div>
            <div onClick={handleAllPolicy} className={`card ${animationTriggered ? 'animated' : ''}`}>
              <div className="info">
              <h5>Policies</h5>
              </div></div>
            <div onClick={handleAllFeedback} className={`card ${animationTriggered ? 'animated' : ''}`}>
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