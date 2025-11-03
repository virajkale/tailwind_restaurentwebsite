import React, { useState } from "react";
import InputField from "../components/InputField";
import SelectInput from "../components/SelectInput";
import TextArea from "../components/TextArea";
import BookingModal from "../components/Bookingmodal";

import {
  partySizeOptions,
  tableRefOptions,
  timeOptions,
} from "../assets/assets";

const Reservation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    specialRequest: "",
    time: "",
    partySize: "",
    tableRef: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      specialRequest: "",
      time: "",
      partySize: "",
      tableRef: "",
    });
  };

const closeModal = () =>{
  setIsModalOpen(false);
}

  return (
    <div id="reservation" className="w-full bg-secondary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl text-dark font-bold mb-4">
            Make a Reservation
          </h1>
          <div className="w-20 h-1 bg-primary mb-4 mx-auto"> </div>
          <p className="text-gray-600 ">
            Book your table in advance to ensure the best dining experience
          </p>
        </div>
        {/* reservation form */}

        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded shadow ">
          {/* booking Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField
                label="Date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
              />

              <SelectInput
                label="Time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                options={timeOptions}
              />

              <SelectInput
                label="Party Size"
                name="partysize"
                value={formData.partySize}
                onChange={handleChange}
                options={partySizeOptions}
              />
              <SelectInput
                label="Table Preference"
                name="tableRef"
                value={formData.tableRef}
                onChange={handleChange}
                options={tableRefOptions}
              />
              <InputField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
              />

              <InputField
                label="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="number"
                placeholder="Enter your Phone Number"
              />
              <InputField
                label="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your Email"
              />
              <TextArea
                label="specialRequest"
                name="specialRequest"
                value={formData.specialRequest}
                onChange={handleChange}
                type="text"
                placeholder="Enter your specialRequest"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 px-4 bg-primary  text-white py-2 hover:bg-pink-500 transition cursor-pointer"
            >
              Confirm Reservation
            </button>
          </form>


{/* booking model  */}
<BookingModal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
