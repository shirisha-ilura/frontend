import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[724px] bg-white relative overflow-hidden">
        <img 
          src="/images/img_rectangle_4583.png" 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-start justify-start">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-[168px] pt-8 sm:pt-12 lg:pt-[50px]">
            <div className="w-full sm:w-[80%] lg:w-[40%] mb-8 sm:mb-12 lg:mb-[40px]">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[38px] items-start">
                <h1 className="text-2xl sm:text-3xl lg:text-[60px] font-readex-pro font-bold leading-tight lg:leading-[69px] text-left text-[#0a0f29] w-full">
                  <span className="text-[#0a0f29]">When you are </span>
                  <span className="text-[#6e3232]">Home</span>
                  <span className="text-[#e50300]">Alone and Hungry?</span>
                </h1>
                <p className="text-sm sm:text-base lg:text-[19px] font-readex-pro font-normal leading-relaxed lg:leading-[26px] text-left text-[#0a0f29] w-full">
                  The easiest way to use HungerZest website to quench your cravings and hunger. Anytime, Anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 