import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-inline" style={{fontSize:'2rem'}}>
              <li className="list-inline-item"><i class="fa-brands fa-facebook"></i></li>
              <li className="list-inline-item"><i class="fa-brands fa-twitter"></i></li>
              <li className="list-inline-item"><i class="fa-brands fa-square-instagram"></i></li>
              <li className="list-inline-item"><i class="fa-brands fa-linkedin"></i></li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
