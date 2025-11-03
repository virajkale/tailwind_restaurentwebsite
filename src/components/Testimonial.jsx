import React, { useState } from "react";
import { testimonials } from "../assets/assets";
const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { name, message, image } = testimonials[index];
  
  const prev = () =>{
    setIndex((prevIndex)=>(prevIndex === 0 ? testimonials.length-1 : prevIndex-1));
  }

  const next = () =>{
    setIndex((prevIndex)=>(prevIndex === testimonials.length-1 ? 0:prevIndex+1));
  }
  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-center font-bold text-3xl mb-8">
        What Our Customers Say
      </h2>
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6 text-center transition-all duration-500">
        <img src={image} alt={name} className="w-20 rounded-full mx-auto mb-4 object-cover" />
        <p className=" text-gray-600 mb-4">{message}</p>
        <h1 className="font-bold">{name}</h1>
      </div>
      <div className="flex justify-center mt-6 space-x-6">
        {/* left arrow */}
        <button onClick={prev}  className="bg-white border-gray-300 p-3 rounded-full hover:bg-gray-200 transition cursor-pointer">
          &#8592;
        </button>
        {/* right arrow */}
        <button onClick={next} className="bg-white border-gray-300 p-3 rounded-full hover:bg-gray-200 transition cursor-pointer">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
