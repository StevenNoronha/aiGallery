import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
    <div>
      <Router>          {/*  React Router used to navigate through pages without reload, single page application*/}
        <Routes>              {/*  All pages of the app are stored in 'screens' directory*/}
         <Route path='/' element={<Home />}/>                 {/* Main home page, rendered when url is at / */}                
         <Route path='/login' element={<Login />}/>               {/* Login page, rebdered when url contains /login */}
         <Route path='/signup' element={<Signup/>}/>            {/* Signup page, rendered when url contains /signup  */}
         </Routes>    
      </Router>
    </div>
  );
}

export default App;
