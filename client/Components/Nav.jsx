import React from 'react'
const Nav = () =>{
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-warning">
        <ul className="navbar-nav">
        <li className="nav-item active">
        <a className="nav-link" href="https://www.interest.co.nz/borrowing">Current_Bank_Rate</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="https://www.enz.org/house-rents-wellington.html">Current_Market_Rent</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="https://github.com/Joan-SHI">Home</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="https://www.linkedin.com/in/joan-shi-87a152179/">Contact</a>
        </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
      <li><span className="navbar-text" class="btn btn-warning">Joan's Market App</span></li>
    </ul>
      </nav>
    )
}


export default Nav