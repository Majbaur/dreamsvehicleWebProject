import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        // <footer className='text-center mt-5'>
        // <h1 className="footer-title">Strength House</h1>
        // <p className="footer-copyright">Copyright © {year} strength house</p>
        // <p className="footer-copyright">All rights reserved</p>
        // </footer>
        <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
					<li><Nav.Link style={{color:'white'}} as={Link} to="about">About Us</Nav.Link></li>
					<li><Nav.Link style={{color:'white'}}  href="home#Products">Our Products</Nav.Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
				   <li><Nav.Link style={{color:'white'}} as={Link} to="">Order Status</Nav.Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
				   <li><Nav.Link style={{color:'white'}}  href="home#Products">Vehicle</Nav.Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
				   <Link as={Link} to=""><i className="fab fa-facebook-f"></i></Link>
				   <Link as={Link} to=""><i className="fab fa-twitter"></i></Link>
				   <Link as={Link} to=""><i className="fab fa-instagram"></i></Link>
				   <Link as={Link} to=""><i className="fab fa-linkedin-in"></i></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    );
};

export default Footer;