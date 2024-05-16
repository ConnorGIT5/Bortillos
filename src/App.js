import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";

// pages imports
import Home from './pages/TakeoutStart'
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'

// layout imports
import OrderRootLayout from "./layouts/OrderRootLayout";
import Cart from './components/Cart'          
import LandingPageLayout from "./layouts/LandingPageLayout";
import EmptyLayout from "./layouts/EmptyLayout";
import TakeoutStart from "./pages/TakeoutStart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<OrderRootLayout />}>
      <Route index element={<TakeoutStart />}/>
      <Route path = "SignIn" element={<SignIn />}/>
      <Route path = "Cart" element={<Cart />}/>
      <Route path = "Index" element ={<LandingPageLayout />}> // this should go to a new domain
        <Route path ="Menu"/>
        <Route path ="Catering"/>
        <Route path ="Locations"/>
        <Route path ="Careers"/>
      </Route> 
    </Route>
  
  )
)

function App() {
  return (
     
      <RouterProvider router={router} />
 
  );
}

export default App

