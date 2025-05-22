
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
      <h3 className="text-info mt-3 title-fade-in">Available Fertilizers</h3>

      
<div className="row mt-3 mb-3">


<div class="grid"></div>
<div id="poda">
  <div class="glow"></div>
  <div class="darkBorderBg"></div>
  <div class="darkBorderBg"></div>
  <div class="darkBorderBg"></div>

  <div class="white"></div>

  <div class="border"></div>

  <div id="main">

    <input value={search}
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Search..." 
          type="text" 
          name="text"
           class="input" />
    <div id="input-mask"></div>
    <div id="pink-mask"></div>
    <div class="filterBorder"></div>
    <div id="filter-icon">
      <svg
        preserveAspectRatio="none"
        height="27"
        width="27"
        viewBox="4.8 4.56 14.832 15.408"
        fill="none"
      >
        <path
          d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
          stroke="#d6d6e6"
          stroke-width="1"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
    <div id="search-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        height="24"
        fill="none"
        class="feather feather-search"
      >
        <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
        <line
          stroke="url(#searchl)"
          y2="16.65"
          y1="22"
          x2="16.65"
          x1="22"
        ></line>
        <defs>
          <linearGradient gradientTransform="rotate(50)" id="search">
            <stop stop-color="#f8e7f8" offset="0%"></stop>
            <stop stop-color="#b6a9b7" offset="50%"></stop>
          </linearGradient>
          <linearGradient id="searchl">
            <stop stop-color="#b6a9b7" offset="0%"></stop>
            <stop stop-color="#837484" offset="50%"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>
    </div>


      {/* bind the loading and error */}
      {/* {loading} */}
      
<div class="spinner-blade">
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
</div>
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
