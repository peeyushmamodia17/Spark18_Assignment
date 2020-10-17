import React from 'react';

const Navbar = (props) => {
  
  return (
    <div className="nav">
        <div className="logo">
            <h2>Logo</h2>
        </div>
        <div className="navdetail">
            <a href="" id="detail">Home</a>
            <a href="" id="detail">My Portfolio</a>
            <a href="" id="detail">Client</a>
            <a href="" id="detail">Get in touch</a>
        </div>
    </div>
  );
}

export default Navbar;