import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="bg-white text-gray-800 py-12 px-4 md:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Header Section */}
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold text-teal-800 mb-6 text-center ">
                        About Dr. Kabir Bhuyan
                    </h1>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/3">
                            <img
                                src="/owner.jpg"
                                alt="Dr. Kabir Bhuyan"
                                className="rounded-2xl shadow-lg w-full object-cover"
                            />
                        </div>

                        <div className="w-full md:w-2/3 text-lg leading-relaxed text-justify">
                            <p className="mb-4">
                                Dr. Kabir Bhuyan recently joined <strong>Coldwell Banker</strong> in Northeast Cincinnati, OH as a new salesperson. With over 20 years of experience in the <strong>medical device</strong> and <strong>aerospace engineering</strong> industries, he brings a wealth of knowledge and a unique perspective to the real estate field.
                            </p>
                            <p className="mb-4">
                                Holding a <strong>Ph.D. in Environmental Science and Engineering</strong> from the University of Texas at El Paso, Dr. Bhuyan is now leveraging his diverse accomplishments in engineering to provide <strong>high-quality real estate services</strong> with a focus on continuous improvement and customer satisfaction.
                            </p>
                            <p className="mb-4">
                                While transitioning into a <strong>full-time Realtor</strong>, he remains committed to delivering excellence and building trust with every client. He is fluent in <strong>Bengali</strong>, <strong>Hindi</strong>, and <strong>Urdu</strong>, allowing him to serve a wider community with personalized care.
                            </p>
                            <p>
                                Dr. Bhuyan is passionate about growth and customer service and looks forward to guiding you through your real estate journey with integrity and dedication.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div>
                    <h2 className="text-3xl font-bold text-teal-800 text-center mb-10">
                        Services You Can Rely On
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Marketing',
                                desc: 'Strategic campaigns to showcase your property and attract the right audience.',
                            },
                            {
                                title: 'Professional Photography',
                                desc: 'High-quality visuals that bring out the best in your property.',
                            },
                            {
                                title: 'Negotiation',
                                desc: 'Skilled negotiation to help you get the best value from every transaction.',
                            },
                            {
                                title: 'Education',
                                desc: 'Empowering you with the knowledge to make informed real estate decisions.',
                            },
                            {
                                title: 'Property Management',
                                desc: 'Comprehensive care and oversight for your investment properties.',
                            },
                            {
                                title: 'Buying & Selling Assistance',
                                desc: 'Step-by-step support through every part of the buying or selling process.',
                            },
                            {
                                title: 'Rental Services',
                                desc: 'Connecting landlords and tenants with efficiency and care.',
                            },
                            {
                                title: 'Renovation Services',
                                desc: 'Affordable, trustworthy renovation solutions to enhance property value.',
                            },
                            {
                                title: 'Lifetime Maintenance',
                                desc: 'Ongoing support for property upkeep after purchase—because service doesn’t end at closing.',
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-teal-50 hover:bg-white transition rounded-2xl p-6 shadow-md hover:shadow-xl border"
                            >
                                <h3 className="text-xl font-semibold text-[maroon] mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-800">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-teal-800 mb-3">
                        Let’s Make Your Real Estate Goals a Reality
                    </h3>
                    <p className="text-gray-700 mb-6">
                        Whether you’re buying, selling, renting, or investing — Dr. Bhuyan is here to help.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-teal-800 text-white px-8 py-3 font-medium rounded-full shadow-lg hover:bg-teal-700 transition"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
