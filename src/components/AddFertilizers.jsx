import axios from 'axios';
import React, { useState } from 'react'
import Navbar from './NavBar';
import Footer from './Footer';

const AddFertilizers = () => {


//Create hooks that will enable u to stop diff data

const[fertilizer_name, setFertilizer_name] = useState('');
const[fertilizer_description , setFertilizer_description] = useState('');
const[fertilizer_price,setFertilizer_price] = useState('');
const[fertilizer_image, setFertilizer_image] = useState('');
const[fertilizer_grade, setFertilizer_grade] = useState('');

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
  data.append("fertilizer_name", fertilizer_name)
  data.append("fertilizer_description", fertilizer_description)
  data.append("fertilizer_price", fertilizer_price)
  data.append("fertilizer_image", fertilizer_image)
  data.append("fertilizer_grade", fertilizer_grade)

  try{
    const response = await axios.post("https://muthwa.pythonanywhere.com/api/getfertilizer", data);
      //set loading back  to default
      
      setLoading('');

    //Update your message hook with a message if the details havre been saved succesfully into the DB.
    setMessage('Product added successfuly')


     // set the timeout of the message
     setTimeout(() => {
      setMessage("");
    }, 8000)

    //Claer the data on the other four hooks
    setFertilizer_name('');
    setFertilizer_description('');
    setFertilizer_price('');
    setFertilizer_image('');
    setFertilizer_grade('');
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
         

          <h2>Add Fertilizer</h2>
          {loading}
          {message}
          {error}


          <input type="text"
          placeholder='Enter the product name'
          className='form-control'
          required 
          value={fertilizer_name}
          onChange={(e) => setFertilizer_name(e.target.value)}/>
          <br />
          {/* {product_name} */}



          <textarea placeholder='Enter some description of the fertilizer.'
          className='form-control'
          required
          value={fertilizer_description}
          onChange={(e) => setFertilizer_description(e.target.value)}></textarea>
          <br />
          {/* {product_description} */}


          <textarea placeholder='Enter the grade of the fertilizer.'
          className='form-control'
          required
          value={fertilizer_grade}
          onChange={(e) => setFertilizer_grade(e.target.value)}></textarea>
          <br />

          <input type="number"
          placeholder='Enter the price '
          className='form-control'
          value={fertilizer_price} 
          onChange={(e) => setFertilizer_price(e.target.value)}/>
          <br />
          {/* {product_cost} */}





          <label>Product photo</label> <br />
          <input type="file"
          required 
          className='form-control'
          accept='images/*'
          onChange={(e) => setFertilizer_image(e.target.files[0])}
          />  <br /> <br /> 

          <button type='submit' className='btn btn-danger'>Add </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default AddFertilizers
