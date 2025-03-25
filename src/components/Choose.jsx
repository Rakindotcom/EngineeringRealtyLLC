import { FaHome, FaHandshake, FaChartLine, FaCog, FaBalanceScale, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaHome className="text-blue-500 text-4xl" />,
            title: "Expert Team with In-Depth Market Knowledge",
            description: "Our team of seasoned real estate professionals understands the local market trends, pricing strategies, and legal complexities, ensuring you make informed decisions whether buying, selling, or investing."
        },
        {
            icon: <FaHandshake className="text-green-500 text-4xl" />,
            title: "Client-Centered Approach",
            description: "We put your needs first. Whether you're searching for the perfect home, selling a property, or exploring investment opportunities, our personalized approach ensures you get tailored solutions that match your goals."
        },
        {
            icon: <FaChartLine className="text-purple-500 text-4xl" />,
            title: "Proven Track Record of Success",
            description: "With hundreds of successful transactions and a long list of satisfied clients, we have a reputation for delivering results. From first-time homebuyers to seasoned investors, we’ve helped clients achieve their real estate dreams."
        },
        {
            icon: <FaCog className="text-yellow-500 text-4xl" />,
            title: "Technology-Driven Strategies",
            description: "We utilize advanced data analytics, AI-powered property searches, and digital marketing techniques to connect buyers and sellers efficiently. Our high-tech approach ensures maximum exposure and faster closings."
        },
        {
            icon: <FaBalanceScale className="text-red-500 text-4xl" />,
            title: "Integrity, Transparency & Professionalism",
            description: "Trust is the foundation of real estate, and we operate with complete honesty and transparency. No hidden fees, no misleading information—just ethical, professional service you can rely on."
        },
        {
            icon: <FaRocket className="text-indigo-500 text-4xl" />,
            title: "Seamless & Stress-Free Process",
            description: "Real estate transactions can be overwhelming, but not with us! We handle everything from paperwork to negotiations, financing assistance, and closing coordination, so you can focus on what matters most."
        }
    ];

    return (
        <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Why Choose Engineering Realty LLC?</h2>
            <p className="text-center text-gray-600 mb-10">At Engineering Realty LLC, we don’t just sell properties—we build lasting relationships and craft seamless real estate experiences.</p>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-xl border flex flex-col items-center text-justify-last-center">
                        {feature.icon}
                        <h3 className="text-xl font-semibold mt-4 text-[maroon] text-center">{feature.title}</h3>
                        <p className="mt-2 text-[15px]">{feature.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col sm:flex-row text-center mt-10 justify-center items-center">
                <Link to="/contact"><button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 font-semibold mb-4 sm:mb-0 sm:mr-4">Schedule a Consultation</button></Link>
                <Link to="/listings"><button className="font-semibold bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105 active:scale-95">Find Your Dream Home</button></Link>
            </div>

        </div>
    );
};

export default WhyChooseUs;
