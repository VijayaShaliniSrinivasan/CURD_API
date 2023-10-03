import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './CurdOperation/Create';
import Read from './CurdOperation/Read';
import Update from './CurdOperation/Update';
import Navbars from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';




function App() {
  return (
    <>
      
      <Navbars/>
    
    <div className="App">
     
      
   

    <Routes>
     
      <Route exact path=""  element={ <Create/>} ></Route>
      <Route exact path="/read" element={ <Read/>}></Route>
      <Route exact path="/update" element={ <Update/>}></Route>
      <Route exact path="/login"  element={ <Login/>} ></Route>
      <Route exact path="/signup"  element={ <Signup/>} ></Route>
    </Routes>

     
      
    </div>
    <Footer/>
    </>
  );
}

export default App;