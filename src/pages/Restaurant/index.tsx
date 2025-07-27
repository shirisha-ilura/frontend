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

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('Bestseller');
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  // Restaurant data with specific menu items
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

  const restaurant = restaurantData[id || '1'] || restaurantData['1'];
  const categories = ['All', 'Bestseller', 'Veg', 'Non Veg'];
  const filters = ['Filters', 'Bestseller', 'Veg', 'Non Veg'];


  const filteredItems = selectedCategory === 'All' 
    ? restaurant.menuItems 
    : restaurant.menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (itemId: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  };

  const toggleFavorite = (itemId: string) => {
    setFavorites(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((total, [itemId, count]) => {
      const item = restaurant.menuItems.find(item => item.id === itemId);
      if (item && count > 0) {
        const price = parseFloat(item.prices.talabat);
        return total + (price * count);
      }
      return total;
    }, 0);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#FCD34D" />
              <stop offset="50%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-3 h-3 fill-gray-300" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="w-full bg-gray-50 flex flex-col items-center min-h-screen">
      <Header />
      
      {/* Restaurant Header Section */}
      <div className="w-full bg-white px-6 lg:px-16 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button and Restaurant Name */}
          <div className="flex items-center gap-6 mb-4">
            <button 
              onClick={() => navigate(-1)}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {restaurant.name}
              </h1>
              <p className="text-green-600 text-sm font-medium">
                {restaurant.tagline}
              </p>
            </div>
          </div>

          {/* Our Food Menu Title */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Food Menu
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 mb-8 justify-start flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  if (filter !== 'Filters') {
                    setSelectedCategory(filter === 'Bestseller' ? 'All' : filter);
                    setSelectedFilter(filter);
                  }
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedFilter === filter
                    ? filter === 'Veg'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : filter === 'Non Veg'
                      ? 'bg-red-100 text-red-700 border border-red-300'
                      : 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {filter === 'Filters' && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                  </svg>
                )}
                {filter === 'Veg' && (
                  <div className="w-2.5 h-2.5 border border-green-600 rounded-sm flex items-center justify-center">
                    <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                  </div>
                )}
                {filter === 'Non Veg' && (
                  <div className="w-2.5 h-2.5 border border-red-600 rounded-sm flex items-center justify-center">
                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                  </div>
                )}
                {filter}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200">
                {/* Image Section */}
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-36 object-cover"
                  />
                  
                  {/* Favorite Heart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <svg 
                      className={`w-4 h-4 ${favorites[item.id] ? 'fill-red-500 text-red-500' : 'fill-none text-gray-400'}`} 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  {/* Add to Cart Badge */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/restaurant/${restaurant.id}/item/${item.id}`);
                    }}
                    className="absolute bottom-2 right-2 hover:scale-105 transition-transform duration-200"
                  >
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-md">
                      ADD+
                    </span>
                  </button>
                </div>

                {/* Content Section */}
                <div 
                  className="p-3 cursor-pointer" 
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Navigating to:', `/restaurant/${restaurant.id}/item/${item.id}`);
                    navigate(`/restaurant/${restaurant.id}/item/${item.id}`);
                  }}
                >
                  <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-1">
                    {item.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center gap-1">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-xs text-gray-600 font-medium">
                      {item.reviewCount} ratings
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Price Options with Delivery Platform Logos */}
                  <div className="flex items-center justify-between gap-2">
                    {/* Talabat Logo and Price */}
                    <div className="flex flex-col items-center gap-1 flex-1">
                      <div className="w-8 h-8 bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <img 
                          src="/images/img_talabat_logo_2.png" 
                          alt="Talabat"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-bold text-red-500">
                          {item.prices.talabat}$
                        </span>
                      </div>
                    </div>
                    
                    {/* Noon Logo and Price */}
                    <div className="flex flex-col items-center gap-1 flex-1">
                      <div className="w-8 h-8 bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <img 
                          src="/images/img_noon_logo_2.png" 
                          alt="Noon"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-bold text-gray-500 line-through">
                          {item.prices.noon}$
                        </span>
                      </div>
                    </div>
                    
                    {/* Careem Logo and Price */}
                    <div className="flex flex-col items-center gap-1 flex-1">
                      <div className="w-8 h-8 bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <img 
                          src="/images/careem-logo-main.png" 
                          alt="Careem"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-sm font-bold text-gray-500 line-through">
                          {item.prices.careem}$
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-6">
            <button className="bg-red-500 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-red-600 transition-colors flex items-center gap-2 mx-auto shadow-md hover:shadow-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View More
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Cart Button */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-xl p-4 z-50">
          <div className="max-w-7xl mx-auto">
            <button className="w-full bg-red-500 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-between hover:bg-red-600 transition-colors shadow-md">
              <span>View Cart • {getTotalItems()} items</span>
              <span>AED {getTotalPrice().toFixed(2)}</span>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default RestaurantPage;
