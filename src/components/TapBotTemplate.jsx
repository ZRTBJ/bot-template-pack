import React from "react";
import BalanceImage from "../assets/balance.png";
import ScreenImage from "../assets/screen.png";
import IconsImage from "../assets/icons.png";
import PurchageImage from "../assets/purchase.png";
import MultiTap from "../assets/multitap.png";

import CheckBoxIcon from "../assets/checkbox.svg";
import SilverStarIcon from "../assets/silverstar.svg";
import PieIcon from "../assets/pie.svg";
import GoldStarIcon from "../assets/goldstar.svg";

const TapBotTemplate = () => {
  return (
    <div className="flex bg-[#222222] rounded-2xl max-w-4xl">
      {/* Left Side - Image */}
      <div className="bg-[#2F2F2F] grid grid-cols-2 auto-rows-fr gap-4 w-2/5 p-8 rounded-tl-2xl rounded-bl-2xl">
        {/* Balance Card */}
        <div className="flex flex-col gap-2">
          <img src={BalanceImage} alt="Balance Card" />
          <img src={PurchageImage} alt="Purchase" />
          <img src={MultiTap} alt="Multi Tap" />
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <img src={ScreenImage} alt="Screen Card" className="w-fit" />
          <div className="flex gap-2 justify-between">
            <img src={SilverStarIcon} alt="Silver Star" className="w-[40px]" />
            <img src={PieIcon} alt="Pie" className="w-[40px]" />
            <img src={GoldStarIcon} alt="Gold Star" className="w-[40px]" />
          </div>
          {/* <div className="grid grid-cols-5"></div> */}
          <img src={IconsImage} alt="Icons Image" className="w-fit" />
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-white text-black px-4 py-1 rounded-md w-full text-[10px]">
              button
            </button>
            <button className="bg-lime-500 text-black px-4 py-1 rounded-md w-full text-[10px]">
              button
            </button>
            <button className="bg-white text-black px-4 py-1 rounded-md w-full text-[10px]">
              button
            </button>
            <button className="bg-lime-500 text-black px-4 py-1 rounded-md w-full text-[10px]">
              button
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Details */}
      <div className="p-8 w-3/5 flex flex-col justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            BOT TEMPLATE PACK
          </h2>
          <p className="text-gray-400 mb-6">
            Минималистичный дизайн шаблона для тап-бота с готовым тематический
            UI-kit, компонентами и экранами.
          </p>

          <ul className="space-y-2 columns-2 text-white">
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2" /> Main screen
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2" /> Boost
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2" /> Leaderboard
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2" /> Skins shop
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2" /> UI-kit + components
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2" /> 20 modal windows
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2" /> 4 backgrounds
            </li>
            <li className="flex items-center">
              <img src={CheckBoxIcon} className="mr-2" /> 20 icons
            </li>
          </ul>
        </div>

        <div className="mt-6 flex items-center justify-between w-full">
          {/* Price Text */}
          <div className="flex items-baseline space-x-2">
            <span className="text-white text-3xl font-semibold">$100</span>
            <span className="text-gray-400 text-xl">/ full design</span>
          </div>

          {/* Button */}
          <button className="bg-lime-400 text-black font-bold py-3 px-12 rounded-lg hover:bg-lime-500 transition duration-300">
            GET IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default TapBotTemplate;
