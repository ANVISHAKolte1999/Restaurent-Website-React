import React from 'react'
import './container.css';

function Contact() {
    return (
        <div>
            <h3 style={{color:"blue"}}>Contact Form</h3>

<div class="container">
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input style={{boxSizing:"24px"}} type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Adress</label>
    <textarea style={{height:"100px"}} id="subject" name="subject" placeholder="Type Your Adress.." ></textarea>


    <input type="submit" value="Submit"/>
  </form>
</div>
        </div>
    )
}

export default Contact
