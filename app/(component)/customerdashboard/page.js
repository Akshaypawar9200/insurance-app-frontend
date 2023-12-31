'use client'
import React, { useState, useEffect } from 'react'
import './style.css'
import Navbar from '@/sharedcomponent/navbar/Navbar'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const page = () => {
    const [animationTriggered, setAnimationTriggered] = useState(false);

    const router = useRouter()
    useEffect(() => {
        setAnimationTriggered(true);
    }, []);
    const handleCreatePolicy = () => {
        router.push('/policyforcustomer')
    }
    const handleplan = () => {
        router.push('/plans')
    }
    const handleInsuranceType = () => {
        router.push('/insurancetype')
    }
    return (
        <>
        <Navbar />
  
        <div className="main-container">
          <div className="box">
            <div className="card1">
              <div onClick={handleInsuranceType} className={`card ${animationTriggered ? 'animated' : ''}`}>
                <div>
                <Image src="/assets/insurance-type.jpg" alt="me" width="220" height="200" />
                </div>
                <div className="info">
                  <h5>Insurance Type</h5>
                </div>
              </div>
              <div onClick={handleplan} className={`card ${animationTriggered ? 'animated' : ''}`}>
                <div>
                <Image src="/assets/Insurance-plan.jpg" alt="me" width="220" height="200" />
                </div>
                <div className="info">
                  <h5>Plan Type</h5>
                </div>
              </div>
              <div  onClick={handleCreatePolicy}className={`card ${animationTriggered ? 'animated' : ''}`}>
                <div>
                <Image src="/assets/policy.jpeg" alt="me" width="220" height="200" />
                </div>
                <div className="info">
                  <h5>Policies</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
            )
}

            export default page