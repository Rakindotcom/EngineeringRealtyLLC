import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-800 mb-6 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {/* Question 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              1. What types of properties do you specialize in?
            </h2>
            <p className="text-lg text-gray-700">
              We specialize in residential properties, including single-family homes, townhouses, and condominiums. Additionally, we assist clients with property management and rental services.
            </p>
          </div>

          {/* Question 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              2. How do I know if a property is a good investment?
            </h2>
            <p className="text-lg text-gray-700">
              We provide a detailed market analysis of the area, including property appreciation trends and comparable sales in the neighborhood. Our team can help you make an informed decision based on your investment goals.
            </p>
          </div>

          {/* Question 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              3. What is the process for buying a home through your agency?
            </h2>
            <p className="text-lg text-gray-700">
              The home-buying process typically involves:
              <ol className="list-decimal pl-6 mt-2">
                <li>Initial consultation to understand your needs and budget</li>
                <li>Searching for properties based on your criteria</li>
                <li>Touring homes and making an offer</li>
                <li>Negotiating terms and completing paperwork</li>
                <li>Closing the deal and getting the keys to your new home</li>
              </ol>
            </p>
          </div>

          {/* Question 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              4. How can I get my property listed for sale?
            </h2>
            <p className="text-lg text-gray-700">
              You can get your property listed by contacting us directly. We will provide a market analysis, suggest a listing price, and guide you through the process, from staging your home to negotiations and closing the sale.
            </p>
          </div>

          {/* Question 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              5. What is your experience in real estate?
            </h2>
            <p className="text-lg text-gray-700">
              Dr. Kabir Bhuyan, the founder of Engineering Realty LLC, brings over 20 years of experience in the medical device and aerospace engineering sectors. He holds a Ph.D. in Environmental Science and Engineering and uses his diverse skill set to provide top-notch real estate services with a focus on customer satisfaction.
            </p>
          </div>

          {/* Question 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              6. Do you offer property management services?
            </h2>
            <p className="text-lg text-gray-700">
              Yes, we provide full property management services, including tenant screening, rent collection, maintenance, and property inspections. Our goal is to take the stress out of property ownership and ensure your investment is well-maintained.
            </p>
          </div>

          {/* Question 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              7. Can I rent a property through your agency?
            </h2>
            <p className="text-lg text-gray-700">
              Yes, we offer rental services. Whether you're looking for a short-term or long-term rental, we can help you find a property that fits your needs. Our rental services include assistance with lease agreements and ensuring a smooth transition into your new home.
            </p>
          </div>

          {/* Question 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              8. What are your renovation services like?
            </h2>
            <p className="text-lg text-gray-700">
              We offer renovation services at affordable prices. Whether you're looking to update a kitchen, remodel a bathroom, or make minor repairs, our trusted partners provide cost-effective solutions to enhance the value and appeal of your property.
            </p>
          </div>

          {/* Question 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              9. How do I contact you if I have more questions?
            </h2>
            <p className="text-lg text-gray-700">
              You can reach us via the <Link to="/contact" className="text-teal-800 underline">Contact Page</Link>, or directly call or email us. We are happy to assist you with any questions regarding real estate, listings, or services.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-10 text-center border-t-3 pt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Have more personal questions or need assistance?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            We're here to help! For any personal inquiries, feel free to contact us directly.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-teal-800 text-white px-8 py-3 font-medium rounded-full shadow-lg hover:bg-teal-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;