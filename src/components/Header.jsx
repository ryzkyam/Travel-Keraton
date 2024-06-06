import React from 'react'
import logo from '../asset/logo4.png'


function Header() {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='/'>Home</a></li>
        <li>
          <a>Layanan</a>
          <ul className="p-2">
            <li><a href='/FormBook'>Booked travel</a></li>
            <li><a href='/Carousel'>Kategori</a></li>
          </ul>
        </li>
        <li><a href='/Main'>Promo</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl h-10 w-40"><img src={logo} alt="keraton" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Transportasi</a></li>
      <li>
        <details>
          <summary>FAQ</summary>
          <ul className="p-2">
            <li><a href='/Main'>Category</a></li>
            <li><a href='/'>Home</a></li>
          </ul>
        </details>
      </li>
      <li><a href='/FormBook'>Orders</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-neutral" href='/loginPage'>Register</a>
  </div>
</div>
  )
}

export default Header
  //   <div className="navbar bg-blue-50">
  //   <div className="flex-1">
  //     <a className="btn btn-ghost text-xl h-10 w-40"><img src={logo} alt="" /></a>
  //   </div>
  //   <div className="flex-none">
  //     <ul className="menu menu-horizontal px-1">
  //       <button className='btn btn-neutral'>
  //         Register
  //       </button>
  //     </ul>
  //   </div>
  // </div>



