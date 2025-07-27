import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { SortByModal, CuisineModal } from './';
import filters from '../../../data/filters.json';

interface RestaurantItem {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryFee: string;
  deliveryTime: string;
  totalPrice: string;
  image: string;
  logo: string;
  discount: string;
}

interface RestaurantsProps {
  restaurants: RestaurantItem[];
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const Restaurants: React.FC<RestaurantsProps> = ({ restaurants, selectedFilter, setSelectedFilter }) => {
  const [isSortByModalOpen, setIsSortByModalOpen] = useState(false);
  const [isCuisineModalOpen, setIsCuisineModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleFilterClick = (id: string) => {
    if (id === 'sort') {
      setIsSortByModalOpen(true);
    } else if (id === 'cuisine') {
      setIsCuisineModalOpen(true);
    }
  };

  const handleRestaurantClick = (restaurantId: string) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-[36px] items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0 mt-8 sm:mt-12 lg:mt-[60px] bg-white">
        <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[30px] items-center lg:items-end">
          <div className="w-full lg:w-[44%] h-0.5 bg-gradient-to-r from-[#0000004c] to-[#0000004c] mb-4 lg:mb-[18px]"></div>
          <h2 className="text-xl sm:text-2xl lg:text-[29px] font-poppins font-normal leading-[44px] text-left text-black text-center lg:text-left">
            FOR YOU
          </h2>
          <div className="w-full lg:w-[44%] h-0.5 bg-gradient-to-r from-[#0000004c] to-[#0000004c] mb-4 lg:mb-[18px]"></div>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-poppins font-bold leading-tight lg:leading-[72px] text-center text-[#191919]">
          Restaurants near you
        </h3>

        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-[30px] items-center px-4 sm:px-6 lg:px-8 w-full">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              className="flex items-center gap-2 border border-[#b8b8b8] rounded-full px-4 py-2 text-sm sm:text-base lg:text-[18px] font-poppins font-normal leading-[29px] text-left text-black"
            >
              {filter.icon && <img src={filter.icon} alt={filter.text} className="w-6 h-6" />}
              <span>{filter.text}</span>
              {filter.id === 'sort' && (
                <img src="/images/img_vector_black_900_4x8.svg" alt="dropdown" className="w-2 h-1 ml-2" />
              )}
            </button>
          ))}
        </div>

        <div className="w-full bg-white px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {Array.from({ length: 20 }).map((_, index) => {
              const restaurant = restaurants[index % restaurants.length];
              return (
                <div 
                  key={`${restaurant.id}-${index}`} 
                  onClick={() => handleRestaurantClick(restaurant.id)}
                  className="flex flex-col items-center w-full shadow-[0px_4px_4px_#0000004c] rounded-[16px] lg:rounded-[20px] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-[180px] sm:h-[200px] lg:h-[228px] object-cover"
                    />
                    
                    <div className={`absolute top-3 sm:top-4 lg:top-[22px] left-3 sm:left-4 lg:left-[18px] flex items-center gap-1 rounded-[6px] px-1 sm:px-1 lg:px-[4px] py-0.5 ${
                      restaurant.logo.includes('talabat') ? 'bg-orange-500' :
                      restaurant.logo.includes('noon') ? 'bg-[#ffd700]' :
                      restaurant.logo.includes('careem') ? 'bg-[#00b14f]' :
                      'bg-[#f17228]'
                    }`}>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-[34px] lg:h-[34px] flex items-center justify-center">
                        {restaurant.logo.includes('talabat') ? (
                          <img 
                            src="/images/img_talabat_logo_2.png" 
                            alt="Talabat"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : restaurant.logo.includes('noon') ? (
                          <img 
                            src="/images/img_noon_logo_2.png" 
                            alt="Noon"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <img 
                            src={restaurant.logo} 
                            alt="logo" 
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                const fallback = document.createElement('span');
                                fallback.className = 'text-white font-bold text-sm';
                                fallback.textContent = 'C';
                                parent.appendChild(fallback);
                              }
                            }}
                          />
                        )}
                      </div>
                      <div className="flex items-center gap-1 px-1 sm:px-1 lg:px-[4px]">
                        <img src="/images/img_icon_white_a700.svg" alt="discount" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[14px] lg:h-[18px]" />
                        <span className="text-xs sm:text-sm lg:text-[14px] font-source-sans-pro font-bold leading-[18px] text-left text-white">
                          {restaurant.discount}
                        </span>
                      </div>
                    </div>
                    
                    {/* Green lightning bolt symbol for Talabat - positioned farther from badge */}
                    {restaurant.logo.includes('talabat') && (
                      <div className="absolute top-3 sm:top-4 lg:top-[22px] left-[110px] sm:left-[130px] lg:left-[150px] flex items-center justify-center w-12 h-8 sm:w-14 sm:h-10 lg:w-18 lg:h-12">
                        <svg width="36" height="36" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 0L0 8H5L4 14L11 6H6L7 0Z" fill="#00d084"/>
                        </svg>
                      </div>
                    )}
                    
                  </div>
                  
                  <div className="flex flex-col items-start w-full bg-white px-3 sm:px-4 lg:px-[14px] pb-3 sm:pb-4 lg:pb-[16px]">
                    <div className="flex items-center w-full">
                      <h4 className="text-base sm:text-lg lg:text-[18px] font-poppins font-medium leading-[24px] text-left text-black truncate">
                        {restaurant.name}
                      </h4>
                    </div>
                    
                    <span className="text-xs sm:text-sm lg:text-[12px] font-poppins font-medium leading-[18px] text-left text-[#636363]">
                      {restaurant.cuisine}
                    </span>
                    
                    <div className="flex items-center justify-between w-full mt-4 gap-1">
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <img src="/images/img_subtract.svg" alt="delivery" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[14px] lg:h-[10px]" />
                        <span className="text-xs sm:text-sm lg:text-[12px] font-roboto font-bold leading-[14px] text-left text-[#272c2f] whitespace-nowrap">
                          {restaurant.deliveryFee}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#ffa500"/>
                        </svg>
                        <span className="text-xs sm:text-sm lg:text-[12px] font-roboto font-bold leading-[14px] text-left text-[#272c2f] whitespace-nowrap">
                          {restaurant.rating}
                        </span>
                      </div>
                      
                      <div className="w-px h-3 bg-[#0000004c] flex-shrink-0"></div>
                      
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <img src="/images/img_icons.svg" alt="time" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[14px] lg:h-[14px]" />
                        <span className="text-xs sm:text-sm lg:text-[12px] font-poppins font-medium leading-[14px] text-left text-[#828282] whitespace-nowrap">
                          {restaurant.deliveryTime}
                        </span>
                      </div>
                      
                      <span className="text-sm sm:text-base lg:text-[14px] font-nunito font-bold leading-[16px] text-left text-black whitespace-nowrap flex-shrink-0">
                        {restaurant.totalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-2 items-center px-4 sm:px-6 lg:px-8 w-full">
          <Button 
            className={`text-sm font-poppins font-normal leading-[23px] text-center border rounded-[16px] px-1 py-1 ${
              selectedFilter === 'Recommended' ? 'text-white bg-[#d90468] border-[#d90468]' : 'text-black bg-[#f8c2d4] border-[#d90468]'
            }`}
            onClick={() => setSelectedFilter('Recommended')}
          >
            Recommended
          </Button>
          <Button 
            className="flex gap-1 items-center text-sm font-poppins font-normal leading-[23px] text-center text-black bg-[#f8c2d4] border border-[#d90468] rounded-[16px] px-1 py-1 pl-5"
            onClick={() => setSelectedFilter('Favourites')}
          >
            <img src="/images/img_vector_red_a700.svg" alt="favorite" className="w-3 h-3" />
            Favourites
          </Button>
        </div>
      </div>
      {isSortByModalOpen && <SortByModal onClose={() => setIsSortByModalOpen(false)} />}
      {isCuisineModalOpen && <CuisineModal onClose={() => setIsCuisineModalOpen(false)} />}
    </>
  );
};

export default Restaurants; 