import { 
    FaChartLine, FaCamera, FaHandshake, FaGraduationCap, 
    FaBuilding, FaHandHoldingUsd, FaHome, FaTools, FaShieldAlt 
  } from 'react-icons/fa';
  
  const services = [
    { icon: FaChartLine, title: "Strategic Marketing", description: "Comprehensive property marketing strategies including digital campaigns, social media promotion, and targeted advertising." },
    { icon: FaCamera, title: "Professional Photography", description: "High-quality architectural photography to showcase your property in its best light." },
    { icon: FaHandshake, title: "Expert Negotiation", description: "Skilled negotiation techniques to ensure you get the best possible deal." },
    { icon: FaGraduationCap, title: "Property Education", description: "Personalized guidance through every step of the real estate process." },
    { icon: FaBuilding, title: "Property Management", description: "Complete management solutions for rental properties and investment portfolios." },
    { icon: FaHandHoldingUsd, title: "Buying & Selling Assistance", description: "End-to-end support for buyers and sellers with market analysis and pricing strategies." },
    { icon: FaHome, title: "Rental Services", description: "Tenant screening, lease management, and rental optimization services." },
    { icon: FaTools, title: "Cost-Effective Renovation", description: "Quality renovation services with budget-friendly solutions and trusted contractors." },
    { icon: FaShieldAlt, title: "Lifetime Maintenance", description: "Ongoing maintenance support for all purchased properties with priority service." }
  ];
  
  const Service = () => {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Delivering exceptional real estate solutions through a full spectrum of professional services.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-xl hover: transition-all duration-300 border cursor-default transform hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <service.icon className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Service;
  