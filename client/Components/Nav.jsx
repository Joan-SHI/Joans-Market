import React from 'react'
const Nav = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://www.interest.co.nz/borrowing">Current_Bank_Rate</a>
        <a className="navbar-brand" href="https://www.enz.org/house-rents-wellington.html">Current_Market_Rent</a>
        <a className="navbar-brand" href="https://github.com/Joan-SHI">Home</a>
        <a className="navbar-brand" href="https://www.linkedin.com/in/joan-shi-87a152179/">Contact</a>
       {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">hello</span>
    </button>*/}
       <div className="collapse navbar-collapse" id="navbarText">
          {/*<ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="https://github.com/Joan-SHI">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.interest.co.nz/borrowing">Market Info</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="qiongnashi@gmail.com">Contact</a>
            </li>
    </ul>*/}
          <span className="navbar-text" class="btn btn-warning">Joan's Market App</span>
        </div>
      </nav>
    )
}


export default Nav