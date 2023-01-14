
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
  
    <Routes>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/'  element={<Home/>}/>
      
    </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
