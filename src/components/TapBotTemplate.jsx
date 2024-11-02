import React, { useState } from "react";

import CheckBoxIcon from "../assets/checkbox.svg";
import PhonePanel from "../assets/phone.png";

import PurchaseModal from "./PurchaseModal";

const TapBotTemplate = () => {
  const [isOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col lg:flex-row bg-[#222222] rounded-2xl max-w-4xl mx-auto justify-between overflow-hidden">
      {/* Left Side - Image */}
      <div className="lg:w-2/5">
        <img
          src={PhonePanel}
          className="lg:max-w-80 h-auto lg:h-full aspect-square rounded-tl-2xl rounded-bl-2xl"
        />
      </div>

      {/* Right Side - Details */}
      <div className="p-4 sm:p-6 lg:p-8 w-full lg:w-3/5 flex flex-col justify-between items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Tap2Earn Template
          </h2>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Готовая Тапалка с возможностью кастомизаций и бесплатной установкой
            на ваши сервера
          </p>

          <ul className="space-y-2 text-white columns-1 sm:columns-2">
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2 w-[16px] h-[16px]" />
              Основной экран
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2 w-[16px] h-[16px]" />
              Бусты
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2 w-[16px] h-[16px]" />
              Лидерборд
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2 w-[16px] h-[16px]" />
              Реферальная система
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2 w-[16px] h-[16px]" />
              Сквады
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2 w-[16px] h-[16px]" />
              Магазин скинов c оплатой в Ton или Telegram stars
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2 w-[16px] h-[16px]" />
              Подключение рекламных сетей
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2 w-[16px] h-[16px]" />
              Админ панель
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2 w-[16px] h-[16px]" />
              Возможность обновлений
            </li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between w-full gap-4">
          {/* Price Text */}
          <div className="flex items-baseline space-x-2">
            <span className="text-white text-2xl sm:text-3xl font-semibold">
              $100
            </span>
            <span className="text-gray-400 text-lg sm:text-xl">
              / full design
            </span>
          </div>

          {/* Button */}

          <button className="bg-blue-400 text-black font-bold py-2 sm:py-3 px-8 sm:px-8 rounded-lg hover:bg-lime-500 transition duration-300 w-full sm:w-auto">
            TRY IT
          </button>
          <button
            onClick={openModal}
            className="bg-lime-400 text-black font-bold py-2 sm:py-3 px-8 sm:px-8 rounded-lg hover:bg-lime-500 transition duration-300 w-full sm:w-auto"
          >
            GET IT
          </button>
        </div>
      </div>

      <PurchaseModal isOpen={isOpen} onClose={closeModal}></PurchaseModal>
    </div>
  );
};

export default TapBotTemplate;
