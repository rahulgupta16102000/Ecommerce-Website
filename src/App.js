 
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import {Toaster} from 'react-hot-toast'
import Cart from './components/Cart';
import Product from './components/Product';
import Pro from './components/Pro';
import "./index.css";
import Footer from './components/Footer';
import Login from './components/Login';
 import {AuthProvider} from './context/AuthContext'
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <AuthProvider>
     <BrowserRouter>
     <Header/>

      <Routes>
     
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<PrivateRoute><Home/></PrivateRoute> }/>
       <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
       <Route path='/product/:id' element={ <PrivateRoute><Product/></PrivateRoute>}/>
       <Route path='/pro/:id' element={<PrivateRoute><Pro/></PrivateRoute>}/>
      </Routes>
      
      <Toaster/>
      <Footer/>
     </BrowserRouter>
     </AuthProvider>
  );
}

export default App;
