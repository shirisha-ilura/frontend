import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryItem {
  id: string;
  name: string;
  image: string;
}

interface CategoriesProps {
  categories: CategoryItem[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: CategoryItem) => {
    // Convert category name to URL-friendly format
    const urlFriendlyName = category.name.toLowerCase().replace(/\s+/g, '-');
    // Pass category data through URL state
    navigate(`/category/${urlFriendlyName}`, { 
      state: { 
        categoryData: {
          id: category.id,
          name: category.name,
          image: category.image
        }
      } 
    });
  };

  return (
    <div className="w-full bg-[#e50300] flex flex-col gap-1 items-center py-8 mt-4">
      <h3 className="text-sm sm:text-base lg:text-[17px] font-poppins font-medium leading-[26px] text-center text-white mt-3">
        What's on your mind?
      </h3>
      <div className="flex items-center gap-4 w-full px-3 sm:px-4 lg:px-[12px]">
        <img
          src="/images/img_arrow_left.svg"
          alt="Previous"
          className="w-[18px] h-[16px] sm:w-[20px] sm:h-[18px] lg:w-[22px] lg:h-[20px] flex-shrink-0 filter brightness-0 invert"
        />
        <div className="flex gap-4 sm:gap-6 lg:gap-8 items-center w-full justify-center overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="flex flex-col gap-2 items-center w-[80px] sm:w-[90px] lg:w-[106px] flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[106px] lg:h-[106px] rounded-full object-cover"
              />
              <span className="text-sm sm:text-base lg:text-[14px] font-poppins font-normal leading-[22px] text-center text-white">
                {category.name}
              </span>
            </div>
          ))}
        </div>
        <img
          src="/images/img_vector.svg"
          alt="Next"
          className="w-[18px] h-[16px] sm:w-[20px] sm:h-[18px] lg:w-[22px] lg:h-[20px] flex-shrink-0 filter brightness-0 invert"
        />
      </div>
    </div>
  );
};

export default Categories; 