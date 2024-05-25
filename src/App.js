import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";

// pages imports
import SignIn from './pages/SignIn'

// layout imports
import OrderRootLayout from "./layouts/OrderRootLayout";
import Cart from './components/Cart'          
import LandingPageLayout from "./layouts/LandingPageLayout";
import TakeoutStart from "./pages/TakeoutStart";
import NotFound from "./pages/NotFound"

// (BELOW) LandingPageLayout (index) should probably have it's own domain
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<OrderRootLayout />}>
      <Route index element={<TakeoutStart />}/>
      <Route path = "SignIn" element={<SignIn />}/>
      <Route path = "Cart" element={<Cart />}/>
      <Route path = "Index" element ={<LandingPageLayout />}> 
        <Route path ="Menu"/>
        <Route path ="Catering"/>
        <Route path ="Locations"/>
        <Route path ="Careers"/>
      </Route> 

      <Route path="*" element={<NotFound />} />
    </Route>
  
  )
)

function App() {
  return (
     
      <RouterProvider router={router} />
 
  );
}

export default App

