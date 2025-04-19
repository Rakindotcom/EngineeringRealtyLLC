import React from 'react'
import { Link } from 'react-router-dom';
import { Typewriter } from "react-simple-typewriter";
import WhyChooseUs from '../components/Choose';
import Service from '../components/Service';

const Home = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-center items-center w-full px-4 py-8">
                <div className="w-full sm:w-1/2 flex justify-center items-center mb-8 sm:mb-0">
                    <img src="erlLogo.jpg" alt="logo" className="h-28 sm:h-70 slide-from-left" />
                </div>

                <div className="text-center w-full sm:w-2/3 px-4">
                    <h2 className="text-lg mb-1 font-medium">
                        <Typewriter words={["Welcome to Engineering Realty LLC"]} loop={false} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} />
                    </h2>
                    <h1 className="text-2xl font-bold text-[maroon] mb-4">Your Dream Home, Engineered to Perfection</h1>
                    <p className='text-justify-last-center'>
                        At Engineering Realty LLC, we deliver precision, trust, and expertise to help you find your perfect home. Whether you're buying, selling, or investing, we serve clients across Greater Cincinnati — including Mason <strong>(45040)</strong>, Blue Ash <strong>(45242)</strong>, West Chester <strong>(45069)</strong>, Liberty Township, Montgomery, Springdale, Evendale, and Fairfield. Your dream home is just a few clicks away — engineered to perfection.
                    </p>
                    <div className="flex justify-center items-center mt-5">
                        <Link to="/listings">
                            <button className="bg-[maroon] text-white font-semibold py-2 px-7 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">Find Your Home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Service />
            <div className="text-center mt-4 text-sm text-gray-600">
                Proudly serving families and investors in <strong>Mason (45040)</strong>, <strong>Blue Ash (45242)</strong>, and <strong>West Chester (45069)</strong>.
            </div>
            <div>
                <WhyChooseUs />
            </div>
        </>
    )
}

export default Home