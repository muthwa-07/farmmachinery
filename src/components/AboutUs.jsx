import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <div className='row jstify-content-center'>
      <Navbar/>
        <h1 className='display-4 text-danger'>About Us</h1>
      <div className="col-md-6">
        <div className='card shadow p-4 m-4'> 
            <img src="images/team.jpeg" alt="" />
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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui beatae autem ullam debitis. Perferendis sapiente excepturi consequuntur, fugiat culpa labore doloremque officiis. Esse voluptatibus blanditiis repellendus possimus quidem laborum ipsam quibusdam illo labore necessitatibus cupiditate quod harum optio error, distinctio amet beatae. Dolore, impedit aspernatur.</p>

        <h3>Over 30 services offerd,over 27000 customers served</h3>

        
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
