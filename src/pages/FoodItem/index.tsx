import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  prices: {
    talabat: string;
    noon: string;
    careem: string;
  };
  originalPrice?: string;
  image: string;
  category: string;
  isPopular?: boolean;
  discount?: string;
  rating: number;
  reviewCount: number;
  isFavorite?: boolean;
}

interface RestaurantData {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
  logo: string;
  discount: string;
  address: string;
  phone: string;
  isOpen: boolean;
  openTime: string;
  tagline: string;
  menuItems: MenuItem[];
}

const FoodItemPage: React.FC = () => {
  const { restaurantId, itemId } = useParams();
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState<'talabat' | 'noon' | 'careem'>('talabat');
  const [quantity, setQuantity] = useState(1);

  // Complete restaurant data matching Restaurant page
  const restaurantData: { [key: string]: RestaurantData } = {
    '1': {
      id: '1',
      name: 'KFC',
      cuisine: 'Fast Food, Chicken',
      rating: 4.3,
      deliveryTime: '20-30 min',
      deliveryFee: 'Free',
      image: '/images/img_4.png',
      logo: '/images/img_talabat_logo_2.png',
      discount: '20% off',
      address: 'Sheikh Zayed Road, Dubai',
      phone: '+971 4 123 4567',
      isOpen: true,
      openTime: 'Opens at 6:00 AM',
      tagline: 'Crispy, Every Bite Taste',
      menuItems: [
        {
          id: 'kfc-1',
          name: 'Zinger Burger',
          description: 'Spicy chicken fillet with lettuce and mayo in a sesame seed bun. A perfect blend of spice and flavor.',
          prices: { talabat: '25.00', noon: '28.00', careem: '30.00' },
          image: '/images/img_4.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.5,
          reviewCount: 532,
          isFavorite: false
        },
        {
          id: 'kfc-2',
          name: 'Original Recipe Chicken',
          description: 'KFC\'s famous Original Recipe chicken with 11 herbs and spices. Crispy outside, juicy inside.',
          prices: { talabat: '35.00', noon: '38.00', careem: '40.00' },
          image: '/images/img_4.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.8,
          reviewCount: 1205,
          isFavorite: false
        },
        {
          id: 'kfc-3',
          name: 'Hot Wings',
          description: 'Spicy chicken wings marinated in KFC\'s signature hot sauce. Perfect for spice lovers.',
          prices: { talabat: '18.00', noon: '20.00', careem: '22.00' },
          image: '/images/img_4.png',
          category: 'Non Veg',
          isPopular: false,
          rating: 4.3,
          reviewCount: 324,
          isFavorite: false
        },
        {
          id: 'kfc-4',
          name: 'Coleslaw',
          description: 'Fresh and creamy coleslaw made with crisp cabbage and carrots. A perfect side dish.',
          prices: { talabat: '8.00', noon: '10.00', careem: '12.00' },
          image: '/images/img_4.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.0,
          reviewCount: 156,
          isFavorite: false
        },
        {
          id: 'kfc-5',
          name: 'Twister Wrap',
          description: 'Tender chicken strips wrapped in a soft tortilla with fresh vegetables and sauce.',
          prices: { talabat: '22.00', noon: '25.00', careem: '27.00' },
          image: '/images/img_4.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.4,
          reviewCount: 678,
          isFavorite: false
        }
      ]
    },
    '2': {
      id: '2',
      name: 'Hardee\'s',
      cuisine: 'American, Burgers',
      rating: 4.1,
      deliveryTime: '25-35 min',
      deliveryFee: '5 AED',
      image: '/images/img_frame_45.png',
      logo: '/images/img_noon_logo_2.png',
      discount: '15% off',
      address: 'Dubai Mall, Dubai',
      phone: '+971 4 234 5678',
      isOpen: true,
      openTime: 'Opens at 7:00 AM',
      tagline: 'Charburgers Made Right',
      menuItems: [
        {
          id: 'hardees-1',
          name: 'Famous Star Burger',
          description: 'Charbroiled beef patty with lettuce, tomato, onions, pickles, and special sauce.',
          prices: { talabat: '28.00', noon: '30.00', careem: '32.00' },
          image: '/images/img_frame_45.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.6,
          reviewCount: 423,
          isFavorite: false
        },
        {
          id: 'hardees-2',
          name: 'Thickburger',
          description: 'Premium Angus beef burger with all the fixings. A hearty and satisfying meal.',
          prices: { talabat: '35.00', noon: '38.00', careem: '40.00' },
          image: '/images/img_frame_45.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.7,
          reviewCount: 567,
          isFavorite: false
        },
        {
          id: 'hardees-3',
          name: 'Crispy Chicken Sandwich',
          description: 'Hand-breaded chicken breast with mayo and pickles on a toasted bun.',
          prices: { talabat: '24.00', noon: '26.00', careem: '28.00' },
          image: '/images/img_frame_45.png',
          category: 'Non Veg',
          isPopular: false,
          rating: 4.3,
          reviewCount: 234,
          isFavorite: false
        },
        {
          id: 'hardees-4',
          name: 'Natural Cut Fries',
          description: 'Skin-on fries with sea salt. Made from premium potatoes for the perfect crunch.',
          prices: { talabat: '12.00', noon: '14.00', careem: '16.00' },
          image: '/images/img_frame_45.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.2,
          reviewCount: 189,
          isFavorite: false
        },
        {
          id: 'hardees-5',
          name: 'BBQ Bacon Burger',
          description: 'Juicy beef patty with crispy bacon, BBQ sauce, and onion rings.',
          prices: { talabat: '32.00', noon: '35.00', careem: '37.00' },
          image: '/images/img_frame_45.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.5,
          reviewCount: 345,
          isFavorite: false
        },
        {
          id: 'hardees-6',
          name: 'Chicken Tenders',
          description: 'Golden crispy chicken tenders served with your choice of dipping sauce.',
          prices: { talabat: '20.00', noon: '22.00', careem: '24.00' },
          image: '/images/img_frame_45.png',
          category: 'Non Veg',
          isPopular: false,
          rating: 4.4,
          reviewCount: 278,
          isFavorite: false
        },
        {
          id: 'hardees-7',
          name: 'Milkshake Vanilla',
          description: 'Creamy vanilla milkshake made with premium ice cream.',
          prices: { talabat: '15.00', noon: '17.00', careem: '19.00' },
          image: '/images/img_frame_45.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.1,
          reviewCount: 156,
          isFavorite: false
        },
        {
          id: 'hardees-8',
          name: 'Onion Rings',
          description: 'Crispy golden onion rings with a perfect crunch in every bite.',
          prices: { talabat: '10.00', noon: '12.00', careem: '14.00' },
          image: '/images/img_frame_45.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.0,
          reviewCount: 123,
          isFavorite: false
        },
        {
          id: 'hardees-9',
          name: 'Fish Sandwich',
          description: 'Crispy fish fillet with tartar sauce and lettuce on a sesame bun.',
          prices: { talabat: '26.00', noon: '28.00', careem: '30.00' },
          image: '/images/img_frame_45.png',
          category: 'Non Veg',
          isPopular: false,
          rating: 4.2,
          reviewCount: 198,
          isFavorite: false
        },
        {
          id: 'hardees-10',
          name: 'Apple Pie',
          description: 'Warm apple pie with a flaky crust and cinnamon-spiced apple filling.',
          prices: { talabat: '8.00', noon: '10.00', careem: '12.00' },
          image: '/images/img_frame_45.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.3,
          reviewCount: 167,
          isFavorite: false
        }
      ]
    },
    '3': {
      id: '3',
      name: 'Shwaya House',
      cuisine: 'Arabic, Grills',
      rating: 4.5,
      deliveryTime: '30-45 min',
      deliveryFee: '7 AED',
      image: '/images/img_frame_45_228x322.png',
      logo: '/images/img_noon_logo_2.png',
      discount: '25% off',
      address: 'Jumeirah Beach Road, Dubai',
      phone: '+971 4 345 6789',
      isOpen: true,
      openTime: 'Opens at 11:00 AM',
      tagline: 'Authentic Arabic Flavors',
      menuItems: [
        {
          id: 'shwaya-1',
          name: 'Mixed Grill Platter',
          description: 'A combination of lamb kebab, chicken tikka, and kofta served with rice and salad.',
          prices: { talabat: '45.00', noon: '48.00', careem: '50.00' },
          image: '/images/img_frame_45_228x322.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.8,
          reviewCount: 892,
          isFavorite: false
        },
        {
          id: 'shwaya-2',
          name: 'Chicken Shawarma',
          description: 'Tender chicken shawarma with garlic sauce, pickles, and vegetables in pita bread.',
          prices: { talabat: '18.00', noon: '20.00', careem: '22.00' },
          image: '/images/img_frame_45_228x322.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.6,
          reviewCount: 654,
          isFavorite: false
        },
        {
          id: 'shwaya-3',
          name: 'Hummus with Meat',
          description: 'Creamy hummus topped with seasoned ground meat and pine nuts.',
          prices: { talabat: '22.00', noon: '25.00', careem: '27.00' },
          image: '/images/img_frame_45_228x322.png',
          category: 'Non Veg',
          isPopular: false,
          rating: 4.4,
          reviewCount: 321,
          isFavorite: false
        },
        {
          id: 'shwaya-4',
          name: 'Fattoush Salad',
          description: 'Fresh mixed greens with tomatoes, cucumbers, and crispy pita chips.',
          prices: { talabat: '15.00', noon: '17.00', careem: '19.00' },
          image: '/images/img_frame_45_228x322.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.2,
          reviewCount: 198,
          isFavorite: false
        },
        {
          id: 'shwaya-5',
          name: 'Lamb Kebab',
          description: 'Succulent lamb kebab grilled to perfection with Middle Eastern spices.',
          prices: { talabat: '35.00', noon: '38.00', careem: '40.00' },
          image: '/images/img_frame_45_228x322.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.7,
          reviewCount: 456,
          isFavorite: false
        },
        {
          id: 'shwaya-6',
          name: 'Falafel Plate',
          description: 'Crispy falafel served with tahini sauce, salad, and pita bread.',
          prices: { talabat: '16.00', noon: '18.00', careem: '20.00' },
          image: '/images/img_frame_45_228x322.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.3,
          reviewCount: 234,
          isFavorite: false
        },
        {
          id: 'shwaya-7',
          name: 'Baklava',
          description: 'Traditional Middle Eastern pastry with honey and nuts.',
          prices: { talabat: '12.00', noon: '14.00', careem: '16.00' },
          image: '/images/img_frame_45_228x322.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.5,
          reviewCount: 189,
          isFavorite: false
        },
        {
          id: 'shwaya-8',
          name: 'Grilled Chicken',
          description: 'Marinated grilled chicken with Arabic spices and garlic sauce.',
          prices: { talabat: '28.00', noon: '30.00', careem: '32.00' },
          image: '/images/img_frame_45_228x322.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.6,
          reviewCount: 378,
          isFavorite: false
        },
        {
          id: 'shwaya-9',
          name: 'Tabbouleh',
          description: 'Fresh parsley salad with tomatoes, mint, and lemon dressing.',
          prices: { talabat: '14.00', noon: '16.00', careem: '18.00' },
          image: '/images/img_frame_45_228x322.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.2,
          reviewCount: 145,
          isFavorite: false
        },
        {
          id: 'shwaya-10',
          name: 'Manakish',
          description: 'Traditional flatbread topped with za\'atar and olive oil.',
          prices: { talabat: '10.00', noon: '12.00', careem: '14.00' },
          image: '/images/img_frame_45_228x322.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.1,
          reviewCount: 123,
          isFavorite: false
        }
      ]
    },
    '4': {
      id: '4',
      name: 'Baba Sultan Pizza and Pies',
      cuisine: 'Italian, Pizza',
      rating: 4.4,
      deliveryTime: '40-50 min',
      deliveryFee: '7 AED',
      image: '/images/img_frame_45_1.png',
      logo: '/images/careem-logo-main.png',
      discount: '30% off',
      address: 'Al Karama, Dubai',
      phone: '+971 4 456 7890',
      isOpen: true,
      openTime: 'Opens at 10:00 AM',
      tagline: 'Authentic Italian Taste',
      menuItems: [
        {
          id: 'baba-1',
          name: 'Margherita Pizza',
          description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil leaves.',
          prices: { talabat: '32.00', noon: '35.00', careem: '37.00' },
          image: '/images/img_frame_45_1.png',
          category: 'Veg',
          isPopular: true,
          rating: 4.7,
          reviewCount: 743,
          isFavorite: false
        },
        {
          id: 'baba-2',
          name: 'Pepperoni Pizza',
          description: 'Traditional pizza topped with pepperoni slices and mozzarella cheese.',
          prices: { talabat: '38.00', noon: '40.00', careem: '42.00' },
          image: '/images/img_frame_45_1.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.6,
          reviewCount: 612,
          isFavorite: false
        },
        {
          id: 'baba-3',
          name: 'Chicken Alfredo Pasta',
          description: 'Creamy alfredo pasta with grilled chicken pieces and parmesan cheese.',
          prices: { talabat: '28.00', noon: '30.00', careem: '32.00' },
          image: '/images/img_frame_45_1.png',
          category: 'Non Veg',
          isPopular: false,
          rating: 4.3,
          reviewCount: 287,
          isFavorite: false
        },
        {
          id: 'baba-4',
          name: 'Caesar Salad',
          description: 'Fresh romaine lettuce with caesar dressing, croutons, and parmesan cheese.',
          prices: { talabat: '16.00', noon: '18.00', careem: '20.00' },
          image: '/images/img_frame_45_1.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.1,
          reviewCount: 156,
          isFavorite: false
        },
        {
          id: 'baba-5',
          name: 'Supreme Pizza',
          description: 'Loaded pizza with pepperoni, sausage, peppers, onions, and mushrooms.',
          prices: { talabat: '42.00', noon: '45.00', careem: '47.00' },
          image: '/images/img_frame_45_1.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.8,
          reviewCount: 567,
          isFavorite: false
        },
        {
          id: 'baba-6',
          name: 'Lasagna',
          description: 'Layers of pasta with meat sauce, ricotta, and mozzarella cheese.',
          prices: { talabat: '35.00', noon: '38.00', careem: '40.00' },
          image: '/images/img_frame_45_1.png',
          category: 'Non Veg',
          isPopular: false,
          rating: 4.5,
          reviewCount: 234,
          isFavorite: false
        },
        {
          id: 'baba-7',
          name: 'Garlic Bread',
          description: 'Crispy bread with garlic butter and herbs.',
          prices: { talabat: '8.00', noon: '10.00', careem: '12.00' },
          image: '/images/img_frame_45_1.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.2,
          reviewCount: 178,
          isFavorite: false
        },
        {
          id: 'baba-8',
          name: 'Tiramisu',
          description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.',
          prices: { talabat: '18.00', noon: '20.00', careem: '22.00' },
          image: '/images/img_frame_45_1.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.6,
          reviewCount: 289,
          isFavorite: false
        },
        {
          id: 'baba-9',
          name: 'Chicken Parmesan',
          description: 'Breaded chicken breast with marinara sauce and melted cheese.',
          prices: { talabat: '30.00', noon: '32.00', careem: '34.00' },
          image: '/images/img_frame_45_1.png',
          category: 'Non Veg',
          isPopular: true,
          rating: 4.4,
          reviewCount: 345,
          isFavorite: false
        },
        {
          id: 'baba-10',
          name: 'Caprese Salad',
          description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze.',
          prices: { talabat: '20.00', noon: '22.00', careem: '24.00' },
          image: '/images/img_frame_45_1.png',
          category: 'Veg',
          isPopular: false,
          rating: 4.3,
          reviewCount: 156,
          isFavorite: false
        }
      ]
    }
  };

  const restaurant = restaurantData[restaurantId || '1'];
  const foodItem = restaurant?.menuItems.find(item => item.id === itemId);

  if (!restaurant || !foodItem) {
    return (
      <div className="w-full bg-gray-50 flex flex-col items-center min-h-screen">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Item Not Found</h2>
            <button 
              onClick={() => navigate('/')}
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              Go Back Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const platforms = [
    {
      id: 'talabat' as const,
      name: 'Talabat',
      logo: '/images/img_talabat_logo_2.png',
      color: 'bg-orange-500',
      price: foodItem.prices.talabat,
      originalPrice: '80.00',
      rating: 4.8,
      deliveryTime: '30-35',
      deliveryFee: '8 AED'
    },
    {
      id: 'careem' as const,
      name: 'Careem',
      logo: '/images/careem-logo-main.png',
      color: 'bg-green-500',
      price: foodItem.prices.careem,
      originalPrice: '80.00',
      rating: 4.8,
      deliveryTime: '30-35',
      deliveryFee: '8 AED'
    },
    {
      id: 'noon' as const,
      name: 'Noon',
      logo: '/images/img_noon_logo_2.png',
      color: 'bg-yellow-500',
      price: foodItem.prices.noon,
      originalPrice: '80.00',
      rating: 4.8,
      deliveryTime: '30-35',
      deliveryFee: '8 AED'
    }
  ];

  const selectedPlatformData = platforms.find(p => p.id === selectedPlatform);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="w-full bg-white flex flex-col items-center min-h-screen">
      <Header />
      
      <div className="w-full max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate(`/restaurant/${restaurantId}`)}
          className="mb-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="bg-white rounded-0 overflow-hidden shadow-2xl">
          <div className="flex">
            {/* Left Side - Food Image */}
            <div className="relative" style={{ width: '950px', height: '811px' }}>
              <img 
                src={foodItem.image} 
                alt={foodItem.name}
                className="w-full h-full object-cover"
              />
              
              {/* Heart Button */}
              <button className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <svg className="w-6 h-6 fill-red-500 text-red-500" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Right Side - Food Details */}
            <div className="bg-gray-50 p-6 flex flex-col justify-between" style={{ width: '480px', height: '811px' }}>
              {/* Deal Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-gray-900">Deal Of The Day</span>
                <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-bold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  20%
                </span>
              </div>

              {/* Food Title */}
              <h1 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                TODAY'S <span className="text-red-500">The<br/>{foodItem.name}' DAY</span>
              </h1>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {foodItem.description}
              </p>

              {/* Choose Platform */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Platform</h3>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-lg font-semibold text-gray-900 w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>

              {/* Platform Options */}
              <div className="space-y-2 mb-4 flex-grow">
                {/* Talabat */}
                <button
                  onClick={() => setSelectedPlatform('talabat')}
                  className={`w-full p-3 rounded-xl border-2 transition-all ${
                    selectedPlatform === 'talabat'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <img 
                          src="/images/img_talabat_logo_2.png" 
                          alt="Talabat" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling!.classList.remove('hidden');
                          }}
                        />
                        <span className="text-orange-500 font-bold text-lg hidden">t</span>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900 text-base">Talabat</h4>
                          <svg className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="flex items-center gap-1 text-red-500">
                            <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                              <svg className="w-1.5 h-1.5 fill-white" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="4"/>
                              </svg>
                            </div>
                            <span className="font-medium">50-55 mins</span>
                          </div>
                          <span className="text-gray-600 font-medium">4.8</span>
                          <div className="flex items-center gap-1 text-gray-600">
                            <svg className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs">+ 8 AED Delivery Fee</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{foodItem.prices.talabat} AED</div>
                      <div className="text-xs text-gray-400 line-through">80.00 AED</div>
                    </div>
                  </div>
                </button>

                {/* Careem */}
                <button
                  onClick={() => setSelectedPlatform('careem')}
                  className={`w-full p-3 rounded-xl border-2 transition-all ${
                    selectedPlatform === 'careem'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <img 
                          src="/images/careem-logo-main.png" 
                          alt="Careem" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling!.classList.remove('hidden');
                          }}
                        />
                        <span className="text-green-500 text-lg hidden">😊</span>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900 text-base">Careem</h4>
                          <svg className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="flex items-center gap-1 text-red-500">
                            <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                              <svg className="w-1.5 h-1.5 fill-white" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="4"/>
                              </svg>
                            </div>
                            <span className="font-medium">50-55 mins</span>
                          </div>
                          <span className="text-gray-600 font-medium">4.8</span>
                          <div className="flex items-center gap-1 text-gray-600">
                            <svg className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs">+ 8 AED Delivery Fee</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{foodItem.prices.careem} AED</div>
                      <div className="text-xs text-gray-400 line-through">80.00 AED</div>
                    </div>
                  </div>
                </button>

                {/* Noon */}
                <button
                  onClick={() => setSelectedPlatform('noon')}
                  className={`w-full p-3 rounded-xl border-2 transition-all ${
                    selectedPlatform === 'noon'
                      ? 'border-yellow-500 bg-yellow-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <img 
                          src="/images/img_noon_logo_2.png" 
                          alt="Noon" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling!.classList.remove('hidden');
                          }}
                        />
                        <span className="text-yellow-500 text-lg hidden">😊</span>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900 text-base">Noon</h4>
                          <svg className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="flex items-center gap-1 text-red-500">
                            <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                              <svg className="w-1.5 h-1.5 fill-white" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="4"/>
                              </svg>
                            </div>
                            <span className="font-medium">50-55 mins</span>
                          </div>
                          <span className="text-gray-600 font-medium">4.8</span>
                          <div className="flex items-center gap-1 text-gray-600">
                            <svg className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs">+ 8 AED Delivery Fee</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{foodItem.prices.noon} AED</div>
                      <div className="text-xs text-gray-400 line-through">80.00 AED</div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold text-base hover:bg-red-600 transition-colors flex items-center justify-center gap-2 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                Add to Cart
                <div className="w-4 h-4 bg-white rounded border overflow-hidden">
                  <img 
                    src="/images/img_noon_logo_2.png" 
                    alt="Noon"
                    className="w-full h-full object-cover"
                  />
                </div>
                {selectedPlatform && (parseFloat(foodItem.prices[selectedPlatform]) * quantity).toFixed(2)} AED
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FoodItemPage;
