import React from 'react';
import Button from '../../ui/Button';

interface DishItem {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  orderTime: string;
}

interface SpecialOffersProps {
  specialOffers: DishItem[];
}

const renderStars = (rating: number) => {
  return (
    <div className="flex items-center gap-1">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#ffb700"/>
      </svg>
      <span className="text-[18px] font-sofia-pro font-normal leading-[25px] text-[#191919]">
        ({rating})
      </span>
    </div>
  );
};

const SpecialOffers: React.FC<SpecialOffersProps> = ({ specialOffers }) => {
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12 lg:gap-[64px] items-center px-4 sm:px-6 lg:px-[56px] py-8 sm:py-12 lg:py-0 mt-6 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-4 items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-poppins font-bold leading-tight lg:leading-[72px] text-center text-[#191919]">
          <span className="text-[#191919]">Today </span>
          <span className="text-[#f54748]">special offers</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-[18px] font-sofia-pro font-normal leading-relaxed lg:leading-[24px] text-center text-[#191919cc] w-full max-w-4xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[18px]">
        {specialOffers.map((dish) => (
          <div key={dish.id} className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-end w-full px-7 sm:px-8 lg:px-[28px]">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[198px] lg:h-[198px] rounded-full object-cover mt-2.5"
                  />
                  <div className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] bg-[#fdc55e] text-white text-sm sm:text-base lg:text-[18px] font-sofia-pro font-normal leading-[25px] text-center rounded-[30px] border-4 border-white flex items-center justify-center -mt-6 sm:-mt-8 lg:-mt-[50px] mr-2 sm:mr-3 lg:mr-[12px]">
                    {dish.price}
                  </div>
                </div>
                <div className="flex flex-col items-center w-full bg-gradient-to-b from-transparent to-[#f54748] rounded-[20px] px-6 sm:px-7 lg:px-[32px] pt-8 sm:pt-12 lg:pt-[54px] pb-8 sm:pb-12 lg:pb-[54px] -mt-16 sm:-mt-20 lg:-mt-[122px]">
                  <div className="flex items-center w-full px-8 sm:px-10 lg:px-[44px] mt-12 sm:mt-16 lg:mt-[74px]">
                    <img src="/images/img_group_8442.png" alt="rating" className="w-[60px] h-[30px] sm:w-[70px] sm:h-[35px] lg:w-[74px] lg:h-[38px]" />
                    <div className="flex items-center ml-4 sm:ml-5 lg:ml-6">
                      {renderStars(dish.rating)}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-[24px] font-sofia-pro font-semibold leading-tight lg:leading-[34px] text-center text-[#f54748] mt-4 sm:mt-6 lg:mt-[28px]">
                    {dish.name}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-[16px] font-sofia-pro font-normal leading-relaxed lg:leading-[21px] text-center text-[#191919cc] w-full mt-2 sm:mt-3 lg:mt-[10px]">
                    {dish.description}
                  </p>
                </div>
              </div>
              <Button className="text-sm sm:text-base lg:text-[18px] font-sofia-pro font-normal leading-[25px] text-white bg-[#f54748] rounded-[22px] px-4 sm:px-5 lg:px-[20px] py-2 -mt-4 sm:-mt-5 lg:-mt-[26px]">
                Order Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers; 