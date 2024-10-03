import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Services Section */}
          <div> 
            
            <h3 className="font-bold text-lg mb-4">SERVICES</h3>
            <ul>
              <li><a href="#" className="hover:underline">Web Design</a></li>
              <li><a href="#" className="hover:underline">Web Development</a></li>
              <li><a href="#" className="hover:underline">Digital Marketing</a></li>
              <li><a href="#" className="hover:underline">Mobile Application</a></li>
              <li><a href="#" className="hover:underline">Logo Design</a></li>
            </ul>
          </div>

          {/* Our Products Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">OUR PRODUCTS</h3>
            <ul>
              <li><a href="#" className="hover:underline">E-Commerce</a></li>
              <li><a href="#" className="hover:underline">School Software</a></li>
              <li><a href="#" className="hover:underline">ERP</a></li>
              <li><a href="#" className="hover:underline">CRM</a></li>
              <li><a href="#" className="hover:underline">Lead Management</a></li>
            </ul>
          </div>

          {/* Legal Pages Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">LEGAL PAGES</h3>
            <ul>
              <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cancellation Policy</a></li>
              <li><a href="#" className="hover:underline">Customer Policy</a></li>
              <li><a href="#" className="hover:underline">Return Policy</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">COMPANY</h3>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Need Support Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">NEED SUPPORT</h3>
            <ul>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm">We are committed to excellence in everything we do. From the quality of our work to the level of service we provide, we strive for nothing less than perfection.</p>
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">X</a>
        </div>

       
      </div>
      <div className="text-center mt-4 py-6 bg-green-700 text-sm">
          <p>&copy; Cloudi5 Technologies 2024. All Rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
