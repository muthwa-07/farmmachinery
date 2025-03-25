
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from './Footer';
import Navbar from './NavBar';

const FetchFertilizer = () => {

  // CREATE hooks
  const [products, setProducts] = useState([]); // this usestate hook contains an empty array
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

//Create the navigate hook which will help in navigation to the mpes payment page when the purchase now byn is clicked
const navigate = useNavigate()



  // specify the loaction of the image
  const img_url = "https://muthwa.pythonanywhere.com/static/images/"

  // create a function that will handle the get operation(method)
  const getproducts = async () =>{
    // update the loading hook with a message
    setLoading("Please wait as we retrieve the products...")

    try{
      // handle the response given from pythonanywhere
      const response = await axios.get("https://muthwa.pythonanywhere.com/api/fetchfertilizers")

      // update the products hook with the products recieved from the API
      setProducts(response.data)

      // set the loading hook back to default
      setLoading("");
    }
    catch(error){
      // set the loading hook back to default
      setLoading("");

      // project an error message
      setError("There was an error encountered")
    }
  } // end getproducts function

  // below we shall use the useEffect hook to call our getproducts function.
  // useEffect is hook that applies new effects/changes to the user interface after an action has happened.
  useEffect(
    () => {getproducts()},
    []) //dependency. This hook contains an empty array depency to ensure that it only runs once when the component (Getproducts component) renders.

     // Filtered products based on search
     const [search, setSearch] = useState("");
     const filtered_products = products.filter((item) =>
       item.fertilizer_name.toLowerCase().includes(search.toLowerCase())||
       item.fertilizer_description.toLowerCase().includes(search.toLowerCase()) ||
       item.fertilizer_grade.toLowerCase().includes(search.toLowerCase())
      );


  return (
    <div className="row">
      <Navbar/>
      <h3 className="text-info mt-3">Available Fertilizers</h3>

      
<div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    </div>


      {/* bind the loading and error */}
      {loading}
      {error}

      {filtered_products.map((product)=> (
        <div className="col-md-3 justify-content-center mb-4">
        {/* below div will carry the card that contains a single product */}
        <div className="card shadow">
            <img src={img_url + product.fertilizer_image} className="product_img mt-4" alt="" />

            {/* below is the card body */}
            <div className="card-body">
              <h5 className='mt-2'>{product.fertilizer_name}</h5>
              <p className='text-muted'>{product.fertilizer_description.slice(0, 50)}...</p>
              <p className='text-muted'>{product.fertilizer_grade.slice(0, 50)}</p>
              <b className='text-warning'>Kes{product.fertilizer_price}</b> <br /> <br />
              <button className='btn btn-success'onClick={() => navigate('/payment', {state : {product}})} >Purchase now now</button>
            </div>
        </div>
        </div>
      ))}
      <Footer/>
       
    </div>
  )
}

export default FetchFertilizer
