import React from "react";
import { FaCheck } from "react-icons/fa";

const Bookingmodal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-lg">
        <div className="text-center item-center">
          <div className=" flex w-16 h-16 bg-green-100 rounded-full items-center justify-center mx-auto mb-4">
            <FaCheck />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Booking Confirm
          </h3>
          <p className="text-gray-600 mb-6">successfully booked table</p>
          <button onClick={onClose} className="bg-primary hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg transition cursor-pointer">
            Continued
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookingmodal;
