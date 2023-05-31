import React, { useState } from "react";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
    } else {
      // Perform the submission logic here
      setIsSubmitted(true);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="content">
      <h2>Contact Me</h2>
      {isSubmitted ? (
        <p>Thank you for your message! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => handleInputChange(e, setName)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => handleInputChange(e, setMessage)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactMe;
