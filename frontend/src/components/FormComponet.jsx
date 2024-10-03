import React from 'react';
import { useForm } from 'react-hook-form';

import { useSnackbar } from 'notistack';
import axios from 'axios';

const steps = [
    { number: '01', text: 'Register your interest' },
    { number: '02', text: 'Team connects with you' },
    { number: '03', text: 'Submit your proposal' },
    { number: '04', text: 'Connect our Agency' },
    { number: '05', text: 'Start business operation' }
  ];


const FormComponet = () => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const onSubmit = async(data) => {
  
      try {
        const result = await axios.post('http://localhost:3000/api/forms/submit', data);
        console.log(result);
        if (result.status === 200) {
        enqueueSnackbar('Details sent successfully. Our team will contact you soon.', { variant: 'success' });}
      
      } catch (error) {
        console.log(error);
        enqueueSnackbar('Error occurred, please try again after some time.', { variant: 'error' });
      }finally{
        reset()
      }
   
    
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12">
    {/* Steps */}
    <div className="my-10 flex flex-col items-center">
      <h3 className="font-bold text-2xl my-2 text-center">Register your interest and wait for a call back</h3>
      <span className="text-sm text-gray-500 text-center">You can own a branded licensed website in 5 simple steps</span>
    </div>
  
    {/* Steps Details */}
    <div className="mb-8 w-full flex justify-center">
      <div className="w-full max-w-2xl"> 
      <ul className="flex flex-col md:flex-row justify-between items-center text-center w-full relative">
  {steps.map((step, index) => (
    <li key={index} className="flex flex-col items-center relative mb-6 md:mb-0">
     
      <span className="bg-green-800 text-white w-8 h-8 flex items-center justify-center rounded-lg z-10">{step.number}</span>
      <p className="mt-2 text-sm border text-gray-700 p-2 border-dotted border-green-300 rounded-2xl z-10 mx-2">{step.text}</p>
    </li>
  ))}
</ul>

      </div>
    </div>
  
    {/* Form */}
    <div className="w-full p-8 bg-green-custom">
  <h2 className="text-xl font-bold text-center mb-6">Fill the details below :</h2>
  <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 lg:grid-cols-2 px-4 md:px-10 lg:px-20">
    
    {/* Name */}
    <div>
      <label className="block text-sm">
        Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm"
        placeholder="Enter your name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
    </div>

    {/* Mobile Number */}
    <div>
  <label className="block text-sm">
    Mobile Number <span className="text-red-500">*</span>
  </label>
  <div className="flex items-center mt-1">
    <select
      className="block border-gray-300 p-2 rounded-l-md shadow-sm"
      {...register("countryCode", { required: "Country code is required" })}
    >
      <option value="">country Code</option>
   
      <option value="+91">India (+91)</option>
    
    </select>
    <input
      type="tel"
      className="block w-full border-gray-300 p-2 rounded-r-md shadow-sm"
      placeholder="Enter your mobile number"
      {...register("mobile", { required: "Mobile number is required" })}
    />
  </div>
  {errors.countryCode && (
    <span className="text-red-500 text-sm">{errors.countryCode.message}</span>
  )}
  {errors.mobile && (
    <span className="text-red-500 text-sm">{errors.mobile.message}</span>
  )}
</div>


    {/* Email */}
    <div>
      <label className="block text-sm">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm"
        placeholder="Enter your email"
        {...register("email", { 
          required: "Email is required", 
          pattern: { 
            value: /^\S+@\S+$/i, 
            message: "Invalid email address" 
          }
        })}
      />
      {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
    </div>

    {/* Country */}
    <div>
      <label className="block text-sm">
        Country <span className="text-red-500">*</span>
      </label>
      <select
        className="mt-1 block w-full border-gray-300 rounded-md p-2 shadow-sm"
        {...register("country", { required: "Country is required" })}
      >
        <option value="">Select your country</option>
      
        <option value="India">India</option>
       
       
      </select>
      {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
    </div>

    {/* State */}
    <div>
      <label className="block text-sm">
        State <span className="text-red-500">*</span>
      </label>
      <select
        className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm"
        {...register("state", { required: "State is required" })}
      >
        <option value="">Select your state</option>
        <option value="Tamilnadu">Tamilnadu</option>
        <option value="Kerala">Kerala</option>
        <option value="Karnataka">Karnataka</option>
      </select>
      {errors.state && <span className="text-red-500 text-sm">{errors.state.message}</span>}
    </div>

    {/* City */}
    <div>
      <label className="block text-sm">
        City <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm"
        placeholder="Enter your city"
        {...register("city", { required: "City is required" })}
      />
      {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
    </div>

    {/* Pincode */}
    <div>
      <label className="block text-sm">
        Pincode <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm"
        placeholder="Enter your pincode"
        {...register("pincode", { required: "Pincode is required" })}
      />
      {errors.pincode && <span className="text-red-500 text-sm">{errors.pincode.message}</span>}
    </div>

    {/* Address */}
    <div className="lg:col-span-2">
      <label className="block text-sm">
        Address <span className="text-red-500">*</span>
      </label>
      <textarea
        className="mt-1 block w-full border-gray-300 rounded-md p-2 shadow-sm"
        placeholder="Enter your address"
        {...register("address", { required: "Address is required" })}
      ></textarea>
      {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
    </div>

    {/* Submit Button */}
    <div className="lg:col-span-2 flex justify-center">
      <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
        Submit
      </button>
    </div>
  </form>
</div>

  </div>
  
  );
};

export default FormComponet;
