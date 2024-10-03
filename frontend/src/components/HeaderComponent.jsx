import React from 'react';
import '../index.css'



const HeaderComponent = () => {
  return (
    <div className=" ">
      {/* Hero Section */}
      <section className="bg-[url('/path-to-background-image.jpg')] bg-cover bg-center h-screen flex flex-col items-center justify-center text-black">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Crafting Digital Experiences, One Pixel at a Time.
          </h1>
          <p className="text-xl lg:text-2xl mb-6">
            Innovate | Online Presence | Growth
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full">
            Register Now
          </button>
        </div>
      </section>

      {/* Approach Section */}
      <section className=" p-7 containter-fluid py-14 bg-gray-100">
        <h2 className="text-2xl lg:text-2xl  font-bold mb-6 text-gray-800">
          Our Approach: <span className="text-green-600">"Collaborative, Creative, Custom"</span> ?
        </h2>
        <p className="text-sm text-gray-500 tracking-wider  mb-8">
        We take a collaborative approach to every project, working closely with you to understand your goals, your audience, and your unique selling points. From there, our team of designers and developers leverage their expertise to craft a custom solution that not only looks beautiful but also delivers tangible results for your business. Our team is comprised of talented designers and developers who are passionate about pushing the boundaries of creativity and innovation. We don't just build websites – we create digital experiences that leave a lasting impression.
        </p>
      </section>

   
    </div>
  );
};

export default HeaderComponent;