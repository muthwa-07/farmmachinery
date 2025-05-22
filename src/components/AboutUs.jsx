import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";






const AboutUs = () => {


  const navigate = useNavigate()

  return (
    <div className='row jstify-content-center'>
      <Navbar/>
        <h1 className='display-4 text-danger'>About Us</h1>
      <div className="col-md-6">
        <div className='card shadow p-4 m-4'> 
        <video
      src="videos/videooo.mp4"
      autoPlay
      muted
      loop
      className="w-100"
    ></video>
      
        </div>
      </div>
      <div className="col-md-6">


        <h2 className='text-success'>Members</h2>
        
        <ul>
            <li>Muthwa ; CEO</li>
            <li>Yamal ; Treasurer</li>
            <li>Musiala ; COO</li>
            <li>Hujsen ; Member</li>
            <li>Asencio ; Member</li>
        </ul>
        


        <h1>Our patners</h1>
        <div className='row'>
        <div className="col-md-6 justify-content-center">

        <a href="https://www.facebook.com/p/Modern-Farmer-KE-100077568406324/">
                <img src="images/MF.jpeg" alt="" className="socialspictures"/>Modern Farmer-KE
                </a>
                </div>

        <div className='col-md-6'>
                <a href="https://www.facebook.com/CTFke/">
                <img src="images/CF.jpeg" alt="" className="socialspictures"/>CaptainFarmTech
                </a> 
        </div>       

                 
         </div>
        
          <div className='row'>           
         <div className="col-md-6">
        <button class="ui-btn" onClick={() => navigate('/', {state : {}})}>
          <span>
         home
            
          </span>
        </button>
        </div>
         



        <div className="col-md-6">
        <button class="ui-btn" onClick={() => navigate('/more', {state : {}})}>
          <span>
         more..
            
          </span>
        </button>
        </div>
        </div>

        

        
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
