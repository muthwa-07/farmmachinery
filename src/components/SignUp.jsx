
import { Link } from 'react-router-dom'

import {useState}from 'react'

//impotation of axios
import axios from 'axios';
import Navbar from './NavBar';
import Footer from './Footer';


const SignUp = () => {
    //initialize the hooks
    const[userame, setUsername] = useState('');
    const[email , setemail] = useState('');
    const[password, setPassword] = useState('');
    const[phone, setPhone] = useState('');
//Create three hooks that wil capture the state of our appl  when the sign up btn is clicked.
    const[loading, setLoading] = useState('');
    const[error, setError] = useState('');
    const[success, setSuccess] = useState('');



// We create a function below that will handle the data submitted on the form all the way to the db.
const submit = async (e) =>{
    //below we shall prevent our site from entire relosad whenever the details aare submitted.
    e.preventDefault();

    //Update the loading book with a message that will be displayed when a user clicks on the sign up btn.
    setLoading("Please wait as we upload your details.")

    try{
        //we create an object that will hold all the dat on te hooks(username,email,password,phone)
        const data = new FormData();

        //Below we append the diff details onto our object
        data.append("username", userame);
        data.append("email", email);
        data.append("password", password);
        data.append("phone", phone);

        //use the axios library to help us interact  with the HTTP request.
        //The particular method we shall use is post method just as that in INSOMNIA.

        const response = await axios.post("https://muthwa.pythonanywhere.com/api/signup", data)

        //After the data has been inserted succesfully 3 the loading hook to empty.
        setLoading("");

        //Set th esucces hoo with the message u get from a succesful registration
        setSuccess(response.data.Message)

        //Clear all the input pills on the HTML form.
        setUsername("");
        setemail("");
        setPassword("");
        setPhone("");
        
    }catch(error){
        //We update the loadding hook empty.
        setLoading("");

        //update error hook with message
        setError(error.message)
                // setError("error")
}
}
  return (
    <div className='row justify-content-center mt-4'>
        <Navbar/>
      <div className='col-md-6 card shadow p-4'>
        <h2>Sign Up</h2>
        <form onSubmit={submit}>


            {loading}
            {success}
            {error}   


            <input type="text"
             placeholder='Enter the username' 
             className='form-control'
             value={userame}
             onChange={(e) => setUsername(e.target.value)} 
             required/>  <br />
             {/* {userame} */}

             <input type='email'
             placeholder='Enter email address'
             className='form-control'
             value={email}
             onChange={(e) => setemail(e.target.value)}
             required/> <br />
             {/* {email} */}

             <input type="password"
             placeholder='Enter the password'
             className='form-control'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required /> <br />
            {/* {password} */}


             <input type="text" 
             placeholder='Enter phone number'
             className='form-control'
             value={phone}
             onChange={(e) => setPhone(e.target.value)}
             required/> <br /> <br />
            {/* {phone} */}


             <button type='submit' className='btn btn-primary'>Sign up</button>


        </form>
        {/* <p>Already have an account? <Link to={'/signin'}>SignIn</Link></p>  */}
      </div>
      <Footer/>
    </div>
  )
}

export default SignUp
