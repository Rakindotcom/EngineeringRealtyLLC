import React, { useState, useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

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
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_aiyk7aj', // e.g., service_123abc
        'template_rsomvxe', // e.g., template_xyz789
        formRef.current,
        '4glBQLJfGtcnM_4AO'   // e.g., Q1wErTyZ9ABC
      )
      .then(() => {
        setShowModal(true);
        setFormData(initialState);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error.text);
        alert("Something went wrong. Please try again.");
      });
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
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <input type="hidden" name="subject" value={formData.subject} />
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

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-70 z-[9999]">
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
