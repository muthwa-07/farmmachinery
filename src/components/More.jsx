import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";



const More = () => {
    const navigate = useNavigate()
  return (
    <div className='row '>
      <Navbar/>
      <div className='justify-content-center'>
        <h1 className='heading'>More...</h1>
        <div className="row">
        <div className="col-md-6">

        <p>Agri-tech development, particularly in selling machines and fertilizers, involves leveraging technology to improve agricultural efficiency and profitability. This includes using digital tools, sensors, and data analytics for precision farming, automated machinery, and optimized resource management. In FarmBetter, this can translate to better crop yield, reduced input costs, and increased farm productivity. </p>

        <div className='card shadow p-4 m-4'> 
        <video
      src="videos/more.mp4"
      autoPlay
      muted
      loop
      className="w-100"
    ></video>
      
        </div>
        </div>
        <div className="col-md-6">
            <h2 className='h2'>Benefits of these agri-tech developments include:</h2>
            <ul>
                <h3>Increased efficiency and productivity:</h3>
                <li>Automated machinery and precision farming practices can lead to higher yields and reduced labor costs. </li>

                <h3>Reduced input costs:</h3>
                <li>Optimized fertilizer application and resource management can minimize the use of inputs without compromising crop yields. </li>

                <h3>Improved sustainability:</h3>
                <li>Reduced reliance on labor and optimized resource use can contribute to more sustainable farming practices. </li>

                <h3>Enhanced decision-making:</h3>
                <li>Data-driven insights enable farmers to make more informed decisions about planting, harvesting, and resource management. </li>

                <p>By embracing these agri-tech innovations, farmers in our enrollment can improve their livelihoods, increase their profitability, and contribute to a more sustainable food production system. </p>
            </ul>
        </div>
        </div>
      </div>
      <div>
      <button class="ui-btn" onClick={() => navigate('/about', {state : {}})}>
          <span>
         Back
            
          </span>
          </button>
      </div>
      <Footer/>
    </div>
  )
}

export default More
