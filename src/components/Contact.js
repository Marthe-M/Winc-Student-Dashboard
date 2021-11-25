import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact us!</h1>
      <form>
        <label for="fname">First Name</label>
        <br />
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
        <br />
        <label for="lname">Last Name</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
        <br />
        <label for="message">Message</label>
        <br />
        <textarea
          id="subject"
          name="subject"
          placeholder="Write your message here.."
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
