import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './NavBar';



const MpesaPay = () => {

//We passed the state of our card from the component(getproduct).We shall use the use location hook to extract the diff detail passed from the getproducts component     
const{machine} = useLocation().state || {};

//create useState hooks
//no.  .message
const[ phone, setPhone] = useState('');
const[message,setMessage] = useState('');

  // specify the loaction of the image
  const img_url = "https://muthwa.pythonanywhere.com/static/images/"



//create t a function to handle payment.
const submit = async (e) => {
    //site from reloading
    e.preventDefault()

    //update message hook eith some message
    setMessage('Please wait as we process your payment')

    //craete form dta object and add the phone
    const data= new FormData();

    //append the phone
    data.append("phone",phone)

    //append cost from the details passed from the uselocation hook
    data.append("amount", machine.machine_price)

    //use axios to acess http method post
    const response = await axios.post("https://muthwa.pythonanywhere.com/api/mpesa_payment", data)

    //update the message hook with a new message
    setMessage(response.data.message)
}

// console.log(product.product_name)

  return (
    <div className='row justify-content-center mt-3'>
      <Navbar/>
    



  
      

    <h1 className='text-danger'>Lipa na Mpesa</h1>

    <div className="col-md-6 card shadow p-3">

        <b className='text-success'>{message}</b>



    <h4>Product Name: <span className='text-primary'>{machine.machine_name}</span></h4>

    <form onSubmit={submit}>

        {/* <label>Price of product</label> */}

        <h4>Price of the Product: <span className='text-primary'>{machine.machine_price}</span></h4>
        <h4> <span className='text-primary'><img src={ img_url + machine.machine_photo} className="product_img mt-4" alt="" /></span></h4>
        <input 

        type="number"

        value={phone}

        onChange={(e) => setPhone(e.target.value)}        

        placeholder='Enter your mpesa number'

        className='form-control' />

        {/* {phone}  */}

        <br />

        <br />

        <button className='btn btn-success'>Make Payment</button>

    </form>

    </div>




</div>
  )
}

export default MpesaPay
