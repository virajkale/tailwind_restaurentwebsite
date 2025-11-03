import React, { useState } from "react";
import { FaClock, FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import InputField from "../components/InputField";

import TextArea from "../components/TextArea";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      subject: "",
      email: "",
      message: "",
    });
  };
  return (
    <div id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-dark font-bold text-3xl mb-4">Let's Talk</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-700">We'd love to hear from you</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* left side */}
          <div className="md:w-1/2 ">
            <div className=" w-full p-8 overflow-hidden ">
              <h1 className="text-dark font-bold text-2xl mb-6">
                Get in Touch
              </h1>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-12  bg-primary rounded-full text-white flex items-center justify-center">
                  <FaLocationArrow />
                </div>
                <div className="mt-4">
                  <p className="text-dark text-xl font-semibold">Address</p>
                  <p className="w-60">
                    123 Gourmet Street, Food District New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-12  bg-primary rounded-full text-white flex items-center justify-center">
                  <FaPhone />
                </div>
                <div className="mt-4">
                  <p className="text-dark text-xl font-semibold">Phone</p>
                  <p className="w-60">+91 81256984</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-12  bg-primary rounded-full text-white flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <div className="mt-4">
                  <p className="text-dark text-xl font-semibold">
                    Email Address
                  </p>
                  <p className="w-60">info@forkandflame.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-12  bg-primary rounded-full text-white flex items-center justify-center">
                  <FaClock />
                </div>
                <div className="mt-4">
                  <p className="text-dark text-xl font-semibold">Hours</p>
                  <p className="w-60">
                    Monday - Thursday: 5:00 PM - 10:00 PM Friday - Saturday:
                    5:00 PM - 11:00 PM Sunday: 11:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* {right side} */}
          <div className="md:w-1/2 ">
            {" "}
            <div className="w-full rounded-xl shadow-xl overflow-hidden p-8">
              <h1 className="mb-6 font-bold text-2xl text-dark">
                Send a Message
              </h1>
              <form onSubmit={handleSubmit}>
                <InputField
                  label="Full Name"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter name"
                />
                <InputField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter Email"
                />
                <InputField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Subject"
                />
                <TextArea
                  label="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  type="text"
                  placeholder="Message"
                />
                <button
                  className="text-white  bg-primary rounded-2xl px-5 py-3 font-semibold cursor-pointer
              "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
