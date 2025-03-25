import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: "I'm interested in buying a home",
    message: '',
    preferredContact: 'email',
  };

  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call) here.
    
    // Show the modal after submission
    setShowModal(true);

    // Clear the form fields
    setFormData(initialState);
  };

  return (
    <div className="py-8 px-4">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[maroon] mb-2">Get in Touch with Us</h1>
        <p className="text-lg text-gray-700">
          Have questions or ready to start your real estate journey? Our team is here to help. Contact us today!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center text-[maroon] mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="I'm interested in buying a home">I'm interested in buying a home</option>
              <option value="I'm interested in selling a home">I'm interested in selling a home</option>
              <option value="I'm interested in buying and selling">I'm interested in buying and selling</option>
              <option value="I'm interested in finding a home to rent">I'm interested in finding a home to rent</option>
              <option value="I'm interested in a real estate career">I'm interested in a real estate career</option>
              <option value="Other reason to contact an agent">Other reason to contact an agent</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message/Inquiry</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 resize-none"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700">Preferred Method of Contact</label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[maroon] text-white font-semibold rounded-md hover:bg-maroon-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-[maroon] mb-6">Or Reach Us Directly</h2>
        <p className="text-lg text-gray-700 mb-4">
          Office Address:{" "}
          <a
            href="https://goo.gl/maps/123456"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[maroon] underline"
          >
            123 Main St, City, State, ZIP Code
          </a>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Call Us: <span className="text-[maroon]">(XXX) XXX-XXXX</span>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Email Us: <span className="text-[maroon]">contact@engineeringrealty.com</span>
        </p>
        <div className="max-w-md mx-auto border-2 border-gray-300 p-4 rounded-md bg-gray-100 shadow-xl">
          <p className="text-lg text-gray-700 font-semibold mb-2">Office Hours:</p>
          <ul className="list-disc text-gray-700 ml-6">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </section>

      {/* Google Map Integration */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center text-[maroon] mb-6">Our Location</h2>
        <div className="w-full h-64">
          {/* Embed Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.505035840287!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581e7f7f7f7f7%3A0x808581e7f7f7f7f7!2sSan+Francisco+City+Hall!5e0!3m2!1sen!2sus!4v1650905608093!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-[maroon] mb-6">Stay Connected</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-gray-900"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-gray-900"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-gray-900"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-gray-900"
          >
            <FaTwitter />
          </a>
        </div>
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-4">
            <h2 className="text-2xl font-bold mb-4">Message Submitted</h2>
            <p className="mb-4">Your message has been submitted. We will contact you soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-[maroon] text-white rounded-md hover:bg-maroon-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
