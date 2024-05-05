import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

// importing the pages
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <nav><header class="bortillos-header">

          <NavLink to = "/"><img src="iconography/home_icon.png" alt="home" /></NavLink>
          <NavLink to ="About"><h1><i>Bortillos</i></h1></NavLink>
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

