import axios from 'axios';
import React, { useState } from 'react'
import Navbar from './NavBar';
import Footer from './Footer';

const AddMachines = () => {


//Create hooks that will enable u to stop diff data

const[machine_name, setMachine_name] = useState('');
const[machine_description , setMachine_description] = useState('');
const[machine_quality, setMachine_quality] = useState('');
const[machine_price,setMachine_price] = useState('');
const[machine_photo, setMachine_photo] = useState('');

//Create tree additional hooks to manage the 3 states of the application when a person clicks the add products button

const[loading,setLoading] = useState('');
const[message , setMessage] = useState('');
const[error,setError] = useState('');

//Create a function that will handle the submitt event.
const submit = async (e) =>{
  //prevent the sight from reloading.
  e.preventDefault();


  //update the loading hook with a message.
  setLoading("Please wait......")


  //Create a form data variable that will hold all the details from the hook.
  const data = new FormData()

  //AAppend info from hooks
  data.append("machine_name", machine_name)
  data.append("machine_description", machine_description)
  data.append("machine_quality",machine_quality)
  data.append("machine_price", machine_price)
  data.append("machine_photo", machine_photo)

  try{
    const response = await axios.post("https://muthwa.pythonanywhere.com/api/getmachine", data);
      //set loading back  to default
      
      setLoading('');

    //Update your message hook with a message if the details havre been saved succesfully into the DB.
    setMessage('Product added successfuly')


     // set the timeout of the message
     setTimeout(() => {
      setMessage("");
    }, 8000)

    //Claer the data on the other four hooks
    setMachine_name('');
    setMachine_description('');
    setMachine_quality('');
    setMachine_price('');
    setMachine_photo('');
  }
  catch(error){
    setError('Failed to add product,please try again.')
    setLoading('')
    
  }




}


  return (
    <div className='row justify-content-center mt-4'>
        <Navbar/>
      <div className="col-md-6 card shadow p-4">


        <form onSubmit={submit}>
         

          <h2>Add Machine</h2>
          {loading}
          {message}
          {error}


          <input type="text"
          placeholder='Enter the product name'
          className='form-control'
          required 
          value={machine_name}
          onChange={(e) => setMachine_name(e.target.value)}/>
          <br />
          {/* {product_name} */}



          <textarea placeholder='Enter some description of the machine.'
          className='form-control'
          required
          value={machine_description}
          onChange={(e) => setMachine_description(e.target.value)}></textarea>
          <br />
          {/* {product_description} */}




          <textarea placeholder='Enter the quality of the machine.'
          className='form-control'
          required
          value={machine_quality}
          onChange={(e) => setMachine_quality(e.target.value)}></textarea>
          <br />


          <input type="number"
          placeholder='Enter the price of the machine'
          className='form-control'
          value={machine_price} 
          onChange={(e) => setMachine_price(e.target.value)}/>
          <br />
          {/* {product_cost} */}





          <label>Product photo</label> <br />
          <input type="file"
          required 
          className='form-control'
          accept='images/*'
          onChange={(e) => setMachine_photo(e.target.files[0])}
          />  <br /> <br /> 

          <button type='submit' className='btn btn-danger'>
             Add
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default AddMachines
