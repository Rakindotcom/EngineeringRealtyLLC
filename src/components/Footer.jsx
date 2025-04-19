import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#152238] text-white px-4 sm:px-8 py-8 sm:py-12 mt-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Grid Layout for Footer Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* About Section */}
                    <div className="space-y-4">                        
                        <Link to="/" className="inline-block">
                            <img src="erlLogo.jpg" alt="Logo" className="h-30" />
                        </Link>
                        <p className="text-[lightgray] text-xs sm:text-sm">
                            Leading real estate agency providing exceptional service and innovative solutions for all your property needs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-base sm:text-lg font-semibold mb-2">Quick Links</h3>
                        <div className="flex flex-col space-y-2 text-[lightgray] text-sm sm:text-base">
                            <Link to="/" className="hover:underline">Home</Link>
                            <Link to="/about" className="hover:underline">About Us</Link>
                            <Link to="/listings" className="hover:underline">Listings</Link>
                            <Link to="/review" className="hover:underline">Reviews</Link>
                            <Link to="/faqs" className="hover:underline">FAQs</Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <Link to="/contact"><h3 className="text-base sm:text-lg font-semibold mb-2 hover:underline hover:text-amber-300">Contact Us</h3></Link>
                        <img src="cbLogo.png" alt="cbLogo" className="h-30" />
                        <div className="text-[lightgray] space-y-2 text-xs sm:text-sm">
                            <p>9321 Montgomery Rd Ste C,</p>
                            <p>Montgomery, Ohio – 45242</p>
                            <p>Phone: +13162007805 </p>
                            <p>Email: kabir.bhuyan@cbrealty.com</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h3 className="text-base sm:text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[lightgray] hover:text-blue-500 transition-colors"
                            >
                                <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[lightgray] hover:text-blue-400 transition-colors"
                            >
                                <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[lightgray] hover:text-pink-500 transition-colors"
                            >
                                <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[lightgray] hover:text-blue-600 transition-colors"
                            >
                                <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-[#2a3a58] pt-6 sm:pt-8 text-center text-[lightgray] text-xs sm:text-sm">
                    <p>© {new Date().getFullYear()} ERL Real Estate. All rights reserved.</p>
                    <div className="mt-2 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                        <Link to="/terms" className="hover:underline">Terms of Service</Link>
                        <p>
                            Developed By -{' '}
                            <a href="https://www.linkedin.com/in/rakinalshahriar/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-500">
                                Rakin al Shahriar
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;