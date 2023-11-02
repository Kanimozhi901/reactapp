import React from 'react';
import './contactform.css';

const Contactus = () => {
  return (
    <div className="first">
      <h3 >Contact Form</h3><br></br>
      <div className="container">
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          /><br></br>

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          /><br></br>

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select><br></br>

          <label htmlFor="subject">Subject</label><br></br>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: '200px' }}
          ></textarea><br></br>

          <input type="submit" value="Submit" /><br></br>
        </form>
      </div>
    </div>
  );
};

export default Contactus;