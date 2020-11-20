import React from "react";
import "../Styles/Style.css";
import phone from "../Image/phone-icon.png";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-7 col-sm-12 main-section">
        <h1>Contact </h1>
      
        <form id="contact-form">
            <ul>
            <li>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Smith" required="required" />
            </li>
            <li>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="example@gmail.com" required="required" />
            </li>
            <li>
              <label for="message">Message</label>
              <textarea id="message" name="message" required="required"></textarea>
            </li>
            </ul>
            <input type="submit" />
          </form> 
        </div>

          <div className="col-xs-4 col-xs-offset-1 text-center sidebar main-section" id="link-box">
          <h1>Connect with Me</h1>
          <a href="../image/Diogo_Candido .pdf"><img src="https://github.com/diogocandidos/responsive-portfolio/blob/master/assets/phone-icon.png?raw=true" className="social" alt="Resume"/></a>
           <a href="tel:+16198418934"><img src={phone} class="social" alt="phone" /></a>










            <a href="mailto: diogocandido.s@gmail.com"><img src="https://i.pinimg.com/originals/2b/b4/28/2bb428b7e4aa39078a119deccacae6f3.png" className="social" alt="email" /></a>
            <a href="https://github.com/diogocandidos"><img src="assets/github.png" className="social" alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/diogo-candido-da-silva-26061811a/"><img src="assets/linkedin-icon.png" className="social" alt="LinkedIn" /></a>
            <a href="https://stackoverflow.com/users/13009471/diogo-candido-da-silva?tab=profile"><img src="assets/stackover-icon (1).png" className="social" alt="Stack Overflow" /></a>
            </div>
      </div>
      </div>
    
  );
  
}

export default Contact;
