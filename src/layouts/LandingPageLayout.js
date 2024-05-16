import React from 'react'

import { Outlet, NavLink } from 'react-router-dom'


export default function LandingPageLayout() {
    return (
        <div class="landingPage-layout">

      <nav>
        <header class="bortillos-header">
          <NavLink to ="/index"><h1><i>Bortillo's</i></h1></NavLink>
          <NavLink to="menu">Menu</NavLink>
          <NavLink to="catering">Catering</NavLink>
          <NavLink to="locations">Locations</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="/"><h2>Order Online</h2></NavLink>
          <NavLink to ="/signin"><button>Sign In</button></NavLink>
          
        </header>
      </nav>

            <h2>Landing Page!</h2>
            <p>Order now!</p>
            <p>Chicago Street Food!</p>
            <p>Work here!</p>
        

            <Outlet />

        </div>
        
    )
}