import React from "react";
import "./Contact.css"; // Import your styling file if needed

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form
        action="https://formspree.io/f/your-form-id" // Replace with your Formspree form ID
        method="POST"
      >
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        {/* Description Input */}
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
