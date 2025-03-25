import React from 'react'
import { Link } from 'react-router-dom';
import { Typewriter } from "react-simple-typewriter";
import WhyChooseUs from '../components/Choose';

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
                        Precision, trust, and expertise at Engineering Realty LLC, we craft real estate experiences as seamless as a blueprint. Whether you're buying, selling, or investing, we build success, one property at a time.
                    </p>

                    <div className="flex justify-center items-center mt-5">
                        <Link to="/listings">
                            <button className="bg-[maroon] text-white font-semibold py-2 px-7 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">Find Your Home</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <WhyChooseUs />
            </div>
        </>
    )
}

export default Home