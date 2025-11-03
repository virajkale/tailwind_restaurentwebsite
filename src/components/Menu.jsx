import React, { useState } from "react";
import { foodMenu } from "../assets/assets";
import ItemModel from "./ItemModel";
const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModel = (item) => {
    setSelectedItem(item);
    setIsModelOpen(true);
  };

  const closeModel = () => {
    setSelectedItem(null);
    setIsModelOpen(false);
  };

  return (
    <div id="menu" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl text-dark font-bold mb-6">Our Menu</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p>Crafted with passion and the finest ingredients</p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {foodMenu.map((food, index) => (
              <div
                onClick={() => openModel(food)}
                key={index}
                className="shadow-2xl rounded-2xl overflow-hidden hover:scale-105"
              >
                <img
                  src={food.image}
                  alt=""
                  className="w-full h-96 object-cover rounded-t-3xl"
                />
                <div className="p-4 ">
                  <div className="flex  items-center justify-between">
                    <h1 className="text-dark font-semibold">{food.title}</h1>
                    <span className="text-red-700 text-sm">{food.price}</span>
                  </div>
                  <p className="text-sm text-gray-700"> {food.ingredients}</p>
                </div>
              </div>
            ))}
          </div>

          {/* model  */}
          <ItemModel
            isOpen={isModelOpen}
            onClose={closeModel}
            item={selectedItem}
          />
          <div className="text-center ">
            <button
              href=""
              className="bg-primary font-medium px-8 py-3  mt-12 rounded-full text-white "
            >
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
