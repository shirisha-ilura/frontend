import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <div className="w-full h-px bg-[#606060] mt-8 sm:mt-12 lg:mt-[64px]"></div>
      <div className="flex justify-center items-start w-full px-6 sm:px-8 lg:px-[34px] py-3 sm:py-4 lg:py-0 mt-3 sm:mt-4 lg:mt-[14px] bg-white">
        <div className="flex items-center gap-8">
          <span className="text-xs font-poppins font-normal leading-[18px] text-left text-[#5c5f66]">
            English
          </span>
          <span className="text-xs font-poppins font-normal leading-[18px] text-left text-[#5c5f66]">
            العربية
          </span>
        </div>
        <div className="flex items-center gap-8 sm:gap-10 lg:gap-[40px] px-12 sm:px-16 lg:px-[120px] ml-auto">
          <span className="text-xs font-poppins font-normal leading-[18px] text-left text-[#8c8d8f]">
            Terms of Use
          </span>
          <button className="text-xs font-poppins font-normal leading-[18px] text-left text-[#8c8d8f] hover:text-[#e50300] transition-colors">
            Privacy policy
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer; 