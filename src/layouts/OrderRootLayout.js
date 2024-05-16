import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import home_icon from '../icons/home.png';

export default function OrderRoutLayout() {
  return (
    <div className="root-layout">
      <nav>
        <header class="bortillos-header">
          <NavLink to = "/"><img src={home_icon} alt="home"/></NavLink>
          <NavLink to ="index"><h1><i>Bortillo's</i></h1></NavLink>
          <div id ="duo_link">
            <NavLink to ="SignIn"><button>Sign In</button></NavLink>
            <NavLink to ="Cart"><button>Cart</button></NavLink>
          </div>
        </header>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  )
}
