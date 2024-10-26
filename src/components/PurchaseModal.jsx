/* eslint-disable react/prop-types */
import { useState } from "react";
import Silver from "../assets/silver.png";

const PurcahseModal = ({ isOpen, onClose }) => {
  const [telegramUsername, setTelegramUsername] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handlePayment = () => {
    // Handle payment logic here
    console.log("Payment continued with:", { telegramUsername, email });
  };
  return (
    // <div className="flex flex-col items-center rounded-xl p-2">
    //   <div>
    //     <h1>Purchase information</h1>
    //     <p>Input your contacts to get the pack</p>
    //   </div>
    //   <div className="rounded-xl bg-[#0E0E0F]"></div>
    //   <div></div>
    //   <div></div>
    // </div>
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#151515] rounded-lg p-8 text-white max-w-xl w-full shadow-lg relative">
        <button
          className="absolute top-2 right-4 text-2xl text-white opacity-50"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="text-center mb-8">
          <h2 className="text-[2rem] ss:text-[1.5rem] font-bold">
            Purchase Information
          </h2>
          <p className="text-[1.25rem] ss:text-[1rem]">
            Input your contacts to get the pack
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center mb-8 bg-[#0E0E0F] rounded-xl p-4 justify-between gap-4">
          <div className="flex items-start">
            <img
              src={Silver}
              alt="Bot template pack"
              className="w-24 h-24 mr-4"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">Bot template pack</h3>
              <p className="text-sm text-gray-400 mb-1">
                Минималистичный дизайн шаблона для тап-бота с готовым
                тематическим UI-kit, компонентами и экр...
              </p>
            </div>
          </div>

          <p className="font-bold">$100</p>
        </div>

        <div className="mb-4">
          <label className="block mb-1 opacity-50 text-[14px] sm:text-[12px]">
            Telegram username
          </label>
          <input
            type="text"
            value={telegramUsername}
            onChange={(e) => setTelegramUsername(e.target.value)}
            placeholder="@"
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-8">
          <label className="block mb-1 opacity-50 text-[14px] sm:text-[12px]">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <hr className="border-gray-600 mb-4" />

        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-white text-[20px] font-semibold">$100</span>
            <span className="text-gray-400 text-[16px]">/ full design</span>
          </div>
          <button
            className="py-2 px-4 bg-[#B4FF00] rounded-md text-black font-bold hover:bg-green-600 transition-colors"
            onClick={handlePayment}
          >
            Continue payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurcahseModal;
