
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import GetMachinery from './components/GetFertilizer';
// import GetFertilizer from './components/GetMachine';
import ErrorpPart from './components/ErrorpPart';
import GetMachines from './components/GetMachines';
import FetchFertilizer from './components/FetchFertilizer';
import MpesaPay from './components/MpesaPay';
import"bootstrap/dist/js/bootstrap.min.js";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MpesaPaymennt from './components/MpesaPayment';
import AboutUs from './components/AboutUs';


function App() {
  return (
    
        <Router>
        <div className="App">
        <header className="App-header">
        <h1>Farm Better</h1>
        </header>

        {/* <nav>
        <Link to={'/'} className='links'>GetMachine</Link>
        <Link to={'/fetchfertilizers'} className='links'>FetchFertlizers</Link>
        </nav> */}
        
          <Routes>
            {/* <Route path='/' element={<GetMachinery/>}/>
            <Route path='/fertilizers' element={<GetFertilizer/>}/> */}
            <Route path='/' element={<GetMachines/>}/>
            <Route path='*' element={<ErrorpPart/>}/>
            <Route path='/fetchfertilizers' element={<FetchFertilizer/>}/>
            <Route path = '/mpesapayment' element={<MpesaPay/>}/>
            {/* <Route path = '/payfertilizer' element={<MpesaPaymennt/>}/> */}
            <Route path ='/payment' element={<MpesaPaymennt/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path = '/signin' element={<SignIn/>}/>
            <Route path='/about' element={<AboutUs/>}/>
          </Routes>
        </div>
        </Router>

  );
}

export default App;
