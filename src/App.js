import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import home_icon from './icons/home.png';

// importing the pages
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Cart from './components/Cart'
          
function App() {
  return (
    <BrowserRouter>
      <nav><header class="bortillos-header">
          <NavLink to = "/"><img src={home_icon} alt="home"/></NavLink>
          <NavLink to ="About"><h1><i>Bortillo's</i></h1></NavLink>
          <div id ="duo_link">
            <NavLink to ="SignIn"><button>Sign In</button></NavLink>
            <NavLink to ="Cart"><button>Cart</button></NavLink>
          </div>
      </header></nav>
   
      <main>
        <Routes>
          <Route index element={<Home />}/>
          <Route path = "about" element={<About />}/>
          <Route path = "SignIn" element={<SignIn />}/>
          <Route path = "Cart" element={<Cart />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App

