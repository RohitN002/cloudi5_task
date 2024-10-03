import React from 'react'
import { FiUsers, FiEye, FiSettings, FiSpeaker, FiHeadphones, FiBook, FiClock, FiDollarSign } from 'react-icons/fi';
import { GrStatusGood } from "react-icons/gr";

import businessProf from '../../src/assets/businessProf.png'
const services = [
    { name: 'Access to Existing Customers', icon: <FiUsers /> },
    { name: 'Brand and Visibility', icon: <FiEye /> },
    { name: 'Easy to use Admin Panel', icon: <FiSettings /> },
    { name: 'Gain from our digital marketing initiative', icon: <FiSpeaker /> },
    { name: 'Dedicated Success Executive', icon: <FiHeadphones /> },
    { name: 'Training and guidance', icon: <FiBook /> },
    { name: 'Feature at your service', icon: <FiClock /> },
    { name: 'Working capital support', icon: <FiDollarSign /> },
  ];

  const reasons = [
    {
      icon: <GrStatusGood />,
      text: 'With Years of experience in the industry, our team brings a wealth of expertise to every project.'
    },
    {
      icon: <GrStatusGood />,
      text: 'We have successfully designed and developed websites for a diverse range of clients across various industries.'
    },
    {
      icon: <GrStatusGood />,
      text: 'From seamless navigation to compelling calls-to-action, we ensure that every aspect of your website is designed with the user in mind.'
    },
    {
      icon: <GrStatusGood />,
      text: 'We understand every business is unique.'
    }
  ];
  
const ServicesComponent = () => {
  return (
    <div>
           {/* Services Section / add whitebg to icons rounded*/}
      <section className="bg-white pt-5 pb-16  px-4">
  <h3 className="text-lg font-bold text-center  text-gray-800">
    Our Services
  </h3>
  <p className="text-lg text-center text-green-600 font-bold mb-12">
    "User-Centric Design, Responsive Solutions, Tailored Solutions"
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {services.map((service, index) => (
      <div
        key={index}
        className="bg-green-custom shadow-md rounded-lg text-left hover:shadow-lg transition-shadow p-4" style={{minHeight:"150px"}}
      >
        <div className=" items-center">
          <div className="text-green-700 text-2xl mb-0 bg-white p-2 rounded-lg inline-block">
            {service.icon}
          </div>
          <p className="text-md ml-4 mt-4 text-black font-semibold">{service.name}</p>
        </div>
      </div>
    ))}
  </div>
</section>


     
<div className="relative mb-44"> {/* Wrapper for relative positioning */}
  {/* Why Choose Us Section */}
  <section className="bg-pink-custom py-16">
    <h4 className="text-3xl font-bold text-center mb-10 text-gray-800">
      Why Choose Cloudi5 <span className='text-green-700'>for Your Web Design Needs:</span>
    </h4>
    
    <div className='flex flex-col lg:flex-row items-center lg:justify-between'>
      <div className="max-w-6xl w-full lg:w-1/2 mb-8 lg:mb-0 px-4">
        <ul className="text-md text-gray-900 space-y-4">
          {reasons.map((reason, index) => (
            <li key={index} className="flex">
              <span className='my-auto mx-4 text-green-700'>{reason.icon}</span>  
              <span>{reason.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto">
        <img
          src={businessProf}
          alt="Professional"
          className="w-full max-w-xs lg:max-w-md max-h-80 object-cover"
        />
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="bg-green-950 mx-4 md:mx-10 lg:mx-20 rounded-3xl text-white py-12 px-4 text-center absolute left-0 right-0" style={{ top: 'calc(80% + 11px)' }}>
    <h5 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
      Ready to elevate your online presence? Let’s turn your vision into reality!
    </h5>
    <p className="text-base md:text-lg lg:text-xl mb-8">
      Contact us today to schedule a consultation and discover our exceptional design services.
    </p>
    <button className="bg-white text-green-800 font-bold py-3 px-6 rounded-full hover:bg-gray-200">
      Register Now
    </button>
  </section>
</div>




    </div>
  )
}

export default ServicesComponent