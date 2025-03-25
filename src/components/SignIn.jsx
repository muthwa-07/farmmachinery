import { useState } from "react"
import { useNavigate } from "react-router-dom";

//IMPORTATION OF AXIOS
import axios from "axios";

const SignIn = () => {

//Create diff hooks to manange diff ststes
const[email, setEmail] = useState('');
const[password , setPassword] = useState('');

//Set the state of the operation

const [loading, setLoading] = useState('');
const [ error ,setError] = useState ('');

//After a succcesfull log in and verification of details we need to re-direct a user to a cetain page.
const navigate = useNavigate()

//A functio to helps us submitt details to tehe back end API
const submit = async (e) => {
  //to prevent default of reloading on click of sign up btn.
  e.preventDefault()

  //Update the loading hook with some info
  setLoading("Please wait...")

  //Create a try and catch block to addd details to the API

  try{
    //Create an object that will be used to hold our data.
    const data = new FormData();
    //Add the two new inputs gotten from the hooks onto the object.
    data.append("email", email)
    data.append("password", password)

    //Acces the post method from the Axios library.
    //Add the details to the backend API
    const response = await axios.post("https://muthwa.pythonanywhere.com/api/signin", data)
  
    //Set the loading hook back to empty.
    setLoading("");

    if (response.data.user){
      //Save the data of the user to local storage.
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // redirect the person to another page
        // use the navigate hook to do this
        navigate("/")
    }
    else{
      //The user was not found show a message.
      setError(response.data.Message)
    }
  }
  catch(error){
    //loading hook is set to empty.
    setLoading("");

    setError(error.response.data.Message)
  }
}

  return (
    <div className='row justify-content-center mt-5'>
      
      <div className="card shadow col-md-6">
      <h2>Sign in</h2>
      {loading}
      {error}


      <form onSubmit={submit}>


      <input type="email"
      placeholder='Enter your email here'
      className='form-control'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required /> 
      <br /> 
      {/* {email} */}





    <input type="password"
    placeholder='Enter your password'
    className='form-control'
    value={password} 
    onChange={(e) => setPassword(e.target.value)}
    required/> 
   <br/> 

    {/* {password} */}



    <button type='submit' className='btn btn-success'>sign in</button>  <br />
      </form>
     

      </div>
    </div>
  )
}

export default SignIn