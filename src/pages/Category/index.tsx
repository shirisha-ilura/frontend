import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

interface CategoryData {
  id: string;
  name: string;
  image: string;
}

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  image: string;
  restaurantName: string;
  restaurantLogo: string;
  category: string;
  deliveryTime: string;
  deliveryFee: string;
  discount?: string;
}

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSort, setSelectedSort] = useState('Sort');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const itemsPerPage = 20;

  // Get category data from navigation state
  const categoryData = (location.state as { categoryData?: CategoryData })?.categoryData;

  // All categories from home page - properly mapped images
  const horizontalCategories = [
    { id: 'pizza', name: 'CHICAGO DEEP PIZZA', image: '/images/img_frame_45_1.png' }, // Pizza image
    { id: 'burger', name: 'FAST FOOD COMBO', image: '/images/img_frame_45.png' }, // Burger image
    { id: 'grilled-chicken', name: 'GRILLED CHICKEN', image: '/images/img_image_2.png' }, // Grilled chicken
    { id: 'burger-king', name: 'WHOPPER BURGER KING', image: '/images/img_image_3.png' }, // Burger King
    { id: 'chicken', name: 'CHICKEN', image: '/images/img_image_4.png' }, // Fried chicken
    { id: 'beef', name: 'BEEF', image: '/images/img_image_5.png' }, // Beef steak
    { id: 'shawarma', name: 'SHAWARMA', image: '/images/img_image_6.png' }, // Shawarma wrap
    { id: 'continental', name: 'CONTINENTAL', image: '/images/img_image_7.png' }, // Continental food
    { id: 'breakfast', name: 'BREAKFAST', image: '/images/img_1.png' }, // Breakfast items
    { id: 'shawarma-2', name: 'SHAWARMA', image: '/images/img_image.png' }, // Alternative shawarma
    { id: 'coffee', name: 'COFFEE', image: '/images/img_image_6.png' } // Coffee - use img_image.png as placeholder for coffee
  ];

  // Initialize selected category when component mounts
  useEffect(() => {
    console.log('Category page loaded with:', { categoryData, categoryName });
    
    if (categoryData?.id) {
      // If coming from home page with category data, use that
      console.log('Setting category from navigation data:', categoryData.id);
      setSelectedCategoryId(categoryData.id);
    } else if (categoryName) {
      // If coming from URL, try to find matching category
      const matchingCategory = horizontalCategories.find(cat => 
        cat.id === categoryName || 
        cat.name.toLowerCase().replace(/\s+/g, '-') === categoryName
      );
      if (matchingCategory) {
        console.log('Setting category from URL match:', matchingCategory.id);
        setSelectedCategoryId(matchingCategory.id);
      } else {
        console.log('No match found for categoryName:', categoryName, 'using default');
        setSelectedCategoryId('grilled-chicken'); // Default fallback
      }
    } else {
      console.log('No category data, using default');
      setSelectedCategoryId('grilled-chicken'); // Default fallback
    }
  }, [categoryData, categoryName]);

  // Sample food items data filtered by category
  const allFoodItems: FoodItem[] = [
    // Pizza items
    {
      id: 'pizza-1',
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh mozzarella and basil',
      price: '50 AED',
      originalPrice: '65 AED',
      rating: 4.8,
      reviewCount: 324,
      image: '/images/img_frame_45_1.png',
      restaurantName: 'The Pizza Pie Factory',
      restaurantLogo: '/images/img_talabat_logo_2.png',
      category: 'pizza',
      deliveryTime: '30-45 mins',
      deliveryFee: 'Free delivery',
      discount: '23% off'
    },
    {
      id: 'pizza-2',
      name: 'Pepperoni Supreme',
      description: 'Loaded with pepperoni and cheese',
      price: '55 AED',
      originalPrice: '70 AED',
      rating: 4.6,
      reviewCount: 256,
      image: '/images/img_frame_45_1.png',
      restaurantName: 'The Pizza Pie Factory',
      restaurantLogo: '/images/img_noon_logo_2.png',
      category: 'pizza',
      deliveryTime: '25-35 mins',
      deliveryFee: 'Free delivery',
      discount: '21% off'
    },
    {
      id: 'pizza-3',
      name: 'Veggie Delight',
      description: 'Fresh vegetables with cheese',
      price: '48 AED',
      originalPrice: '60 AED',
      rating: 4.5,
      reviewCount: 189,
      image: '/images/img_frame_45_1.png',
      restaurantName: 'The Pizza Pie Factory',
      restaurantLogo: '/images/careem-logo-main.png',
      category: 'pizza',
      deliveryTime: '35-45 mins',
      deliveryFee: 'Free delivery',
      discount: '20% off'
    },
    // Burger items
    {
      id: 'burger-1',
      name: 'Classic Beef Burger',
      description: 'Juicy beef patty with fresh vegetables',
      price: '35 AED',
      originalPrice: '45 AED',
      rating: 4.7,
      reviewCount: 412,
      image: '/images/img_frame_45.png',
      restaurantName: 'Burger Palace',
      restaurantLogo: '/images/img_talabat_logo_2.png',
      category: 'burger',
      deliveryTime: '20-30 mins',
      deliveryFee: 'Free delivery',
      discount: '22% off'
    },
    {
      id: 'burger-2',
      name: 'Chicken Deluxe',
      description: 'Grilled chicken with special sauce',
      price: '32 AED',
      originalPrice: '40 AED',
      rating: 4.4,
      reviewCount: 298,
      image: '/images/img_frame_45.png',
      restaurantName: 'Burger Palace',
      restaurantLogo: '/images/img_noon_logo_2.png',
      category: 'burger',
      deliveryTime: '25-35 mins',
      deliveryFee: 'Free delivery',
      discount: '20% off'
    },
    // Cake items
    {
      id: 'cake-1',
      name: 'Chocolate Fudge Cake',
      description: 'Rich chocolate cake with fudge',
      price: '25 AED',
      originalPrice: '35 AED',
      rating: 4.9,
      reviewCount: 156,
      image: '/images/img_unsplash_uc0hzduitwy_2.png',
      restaurantName: 'Sweet Treats Bakery',
      restaurantLogo: '/images/img_noon_logo_2.png',
      category: 'cake',
      deliveryTime: '40-50 mins',
      deliveryFee: 'Free delivery',
      discount: '29% off'
    },
    // Sub-sandwich items
    {
      id: 'sub-1',
      name: 'Italian BMT Sub',
      description: 'Pepperoni, salami, and ham with fresh vegetables',
      price: '18 AED',
      originalPrice: '24 AED',
      rating: 4.3,
      reviewCount: 89,
      image: '/images/img_frame_45.png',
      restaurantName: 'Subway Express',
      restaurantLogo: '/images/careem-logo-main.png',
      category: 'sub-sandwich',
      deliveryTime: '15-25 mins',
      deliveryFee: 'Free delivery',
      discount: '25% off'
    },
    // Chowmein items
    {
      id: 'chowmein-1',
      name: 'Chicken Chowmein',
      description: 'Stir-fried noodles with chicken and vegetables',
      price: '22 AED',
      originalPrice: '28 AED',
      rating: 4.6,
      reviewCount: 203,
      image: '/images/img_unsplash_uc0hzduitwy_1.png',
      restaurantName: 'Dragon Palace',
      restaurantLogo: '/images/img_talabat_logo_2.png',
      category: 'chowmein',
      deliveryTime: '30-40 mins',
      deliveryFee: '5 AED',
      discount: '21% off'
    },
    // Arabic items
    {
      id: 'arabic-1',
      name: 'Mixed Grilled Platter',
      description: 'Assorted grilled meats with rice and salad',
      price: '45 AED',
      originalPrice: '55 AED',
      rating: 4.8,
      reviewCount: 167,
      image: '/images/img_frame_45_228x322.png',
      restaurantName: 'Al Fanar Restaurant',
      restaurantLogo: '/images/img_noon_logo_2.png',
      category: 'arabic',
      deliveryTime: '45-60 mins',
      deliveryFee: 'Free delivery',
      discount: '18% off'
    },
    // Grilled Chicken items
    {
      id: 'grilled-chicken-1',
      name: 'BBQ Grilled Chicken',
      description: 'Tender grilled chicken with BBQ sauce',
      price: '32 AED',
      originalPrice: '40 AED',
      rating: 4.7,
      reviewCount: 245,
      image: '/images/img_image_2.png',
      restaurantName: 'Chicken House',
      restaurantLogo: '/images/careem-logo-main.png',
      category: 'grilled-chicken',
      deliveryTime: '25-35 mins',
      deliveryFee: 'Free delivery',
      discount: '20% off'
    },
    {
      id: 'grilled-chicken-2',
      name: 'Herb Grilled Chicken',
      description: 'Grilled chicken with fresh herbs and spices',
      price: '28 AED',
      originalPrice: '35 AED',
      rating: 4.6,
      reviewCount: 189,
      image: '/images/img_frame_45.png',
      restaurantName: 'Chicken House',
      restaurantLogo: '/images/img_talabat_logo_2.png',
      category: 'grilled-chicken',
      deliveryTime: '30-40 mins',
      deliveryFee: 'Free delivery',
      discount: '20% off'
    },
    // Burger King items
    {
      id: 'burger-king-1',
      name: 'Whopper Burger',
      description: 'Flame-grilled beef patty with fresh ingredients',
      price: '38 AED',
      originalPrice: '48 AED',
      rating: 4.5,
      reviewCount: 312,
      image: '/images/img_image_3.png',
      restaurantName: 'Burger King',
      restaurantLogo: '/images/img_talabat_logo_2.png',
      category: 'burger-king',
      deliveryTime: '20-30 mins',
      deliveryFee: 'Free delivery',
      discount: '21% off'
    },
    {
      id: 'burger-king-2',
      name: 'Chicken Royale',
      description: 'Crispy chicken burger with special sauce',
      price: '35 AED',
      originalPrice: '42 AED',
      rating: 4.4,
      reviewCount: 189,
      image: '/images/img_frame_45.png',
      restaurantName: 'Burger King',
      restaurantLogo: '/images/img_noon_logo_2.png',
      category: 'burger-king',
      deliveryTime: '25-35 mins',
      deliveryFee: 'Free delivery',
      discount: '17% off'
    },
    // Chicken items
    {
      id: 'chicken-1',
      name: 'Fried Chicken Bucket',
      description: 'Crispy fried chicken pieces with spices',
      price: '42 AED',
      originalPrice: '52 AED',
      rating: 4.6,
      reviewCount: 234,
      image: '/images/img_image_4.png',
      restaurantName: 'Chicken Corner',
      restaurantLogo: '/images/careem-logo-main.png',
      category: 'chicken',
      deliveryTime: '25-35 mins',
      deliveryFee: 'Free delivery',
      discount: '19% off'
    },
    {
      id: 'chicken-2',
      name: 'Chicken Wings',
      description: 'Spicy buffalo wings with blue cheese dip',
      price: '28 AED',
      originalPrice: '35 AED',
      rating: 4.5,
      reviewCount: 156,
      image: '/images/img_frame_45.png',
      restaurantName: 'Chicken Corner',
      restaurantLogo: '/images/img_talabat_logo_2.png',
      category: 'chicken',
      deliveryTime: '20-30 mins',
      deliveryFee: 'Free delivery',
      discount: '20% off'
    },
    // Beef items
    {
      id: 'beef-1',
      name: 'Beef Steak',
      description: 'Grilled beef steak with vegetables',
      price: '65 AED',
      originalPrice: '80 AED',
      rating: 4.8,
      reviewCount: 167,
      image: '/images/img_image_5.png',
      restaurantName: 'Steakhouse Grill',
      restaurantLogo: '/images/img_noon_logo_2.png',
      category: 'beef',
      deliveryTime: '35-45 mins',
      deliveryFee: 'Free delivery',
      discount: '19% off'
    },
    {
      id: 'beef-2',
      name: 'Beef Kebab',
      description: 'Tender beef kebab with rice and salad',
      price: '48 AED',
      originalPrice: '60 AED',
      rating: 4.7,
      reviewCount: 203,
      image: '/images/img_frame_45_228x322.png',
      restaurantName: 'Steakhouse Grill',
      restaurantLogo: '/images/careem-logo-main.png',
      category: 'beef',
      deliveryTime: '30-40 mins',
      deliveryFee: 'Free delivery',
      discount: '20% off'
    },
    // Shawarma items
    {
      id: 'shawarma-1',
      name: 'Chicken Shawarma',
      description: 'Marinated chicken wrapped in pita bread',
      price: '18 AED',
      originalPrice: '22 AED',
      rating: 4.5,
      reviewCount: 189,
      image: '/images/img_image_6.png',
      restaurantName: 'Shawarma Palace',
      restaurantLogo: '/images/img_talabat_logo_2.png',
      category: 'shawarma',
      deliveryTime: '15-25 mins',
      deliveryFee: 'Free delivery',
      discount: '18% off'
    },
    {
      id: 'shawarma-2',
      name: 'Beef Shawarma',
      description: 'Tender beef with tahini sauce in pita',
      price: '22 AED',
      originalPrice: '28 AED',
      rating: 4.6,
      reviewCount: 145,
      image: '/images/img_frame_45.png',
      restaurantName: 'Shawarma Palace',
      restaurantLogo: '/images/img_noon_logo_2.png',
      category: 'shawarma',
      deliveryTime: '20-30 mins',
      deliveryFee: 'Free delivery',
      discount: '21% off'
    },
    // Continental items
    {
      id: 'continental-1',
      name: 'Pasta Carbonara',
      description: 'Creamy pasta with bacon and parmesan',
      price: '38 AED',
      originalPrice: '48 AED',
      rating: 4.7,
      reviewCount: 234,
      image: '/images/img_image_7.png',
      restaurantName: 'Continental Kitchen',
      restaurantLogo: '/images/careem-logo-main.png',
      category: 'continental',
      deliveryTime: '25-35 mins',
      deliveryFee: 'Free delivery',
      discount: '21% off'
    },
    {
      id: 'continental-2',
      name: 'Grilled Salmon',
      description: 'Fresh salmon with herbs and lemon',
      price: '55 AED',
      originalPrice: '68 AED',
      rating: 4.8,
      reviewCount: 156,
      image: '/images/img_frame_45.png',
      restaurantName: 'Continental Kitchen',
      restaurantLogo: '/images/img_talabat_logo_2.png',
      category: 'continental',
      deliveryTime: '30-40 mins',
      deliveryFee: 'Free delivery',
      discount: '19% off'
    },
    // Breakfast items
    {
      id: 'breakfast-1',
      name: 'Full English Breakfast',
      description: 'Eggs, bacon, sausage, beans, and toast',
      price: '32 AED',
      originalPrice: '40 AED',
      rating: 4.6,
      reviewCount: 178,
      image: '/images/img_image_8.png',
      restaurantName: 'Morning Cafe',
      restaurantLogo: '/images/img_noon_logo_2.png',
      category: 'breakfast',
      deliveryTime: '20-30 mins',
      deliveryFee: 'Free delivery',
      discount: '20% off'
    },
    {
      id: 'breakfast-2',
      name: 'Pancakes Stack',
      description: 'Fluffy pancakes with syrup and butter',
      price: '25 AED',
      originalPrice: '32 AED',
      rating: 4.5,
      reviewCount: 234,
      image: '/images/img_frame_45.png',
      restaurantName: 'Morning Cafe',
      restaurantLogo: '/images/careem-logo-main.png',
      category: 'breakfast',
      deliveryTime: '15-25 mins',
      deliveryFee: 'Free delivery',
      discount: '22% off'
    },
    // Additional Shawarma items (for shawarma-2 category)
    {
      id: 'shawarma-extra-1',
      name: 'Mixed Shawarma Platter',
      description: 'Combination of chicken and beef shawarma',
      price: '35 AED',
      originalPrice: '45 AED',
      rating: 4.7,
      reviewCount: 189,
      image: '/images/img_image_9.png',
      restaurantName: 'Shawarma Express',
      restaurantLogo: '/images/img_talabat_logo_2.png',
      category: 'shawarma-2',
      deliveryTime: '20-30 mins',
      deliveryFee: 'Free delivery',
      discount: '22% off'
    },
    {
      id: 'shawarma-extra-2',
      name: 'Falafel Wrap',
      description: 'Crispy falafel with hummus and vegetables',
      price: '16 AED',
      originalPrice: '20 AED',
      rating: 4.4,
      reviewCount: 145,
      image: '/images/img_frame_45.png',
      restaurantName: 'Shawarma Express',
      restaurantLogo: '/images/img_noon_logo_2.png',
      category: 'shawarma-2',
      deliveryTime: '15-25 mins',
      deliveryFee: 'Free delivery',
      discount: '20% off'
    },
    // Coffee items
    {
      id: 'coffee-1',
      name: 'Cappuccino',
      description: 'Rich espresso with steamed milk foam',
      price: '12 AED',
      originalPrice: '15 AED',
      rating: 4.6,
      reviewCount: 234,
      image: '/images/img_image.png',
      restaurantName: 'Coffee House',
      restaurantLogo: '/images/careem-logo-main.png',
      category: 'coffee',
      deliveryTime: '10-20 mins',
      deliveryFee: 'Free delivery',
      discount: '20% off'
    },
    {
      id: 'coffee-2',
      name: 'Latte',
      description: 'Smooth espresso with steamed milk',
      price: '14 AED',
      originalPrice: '18 AED',
      rating: 4.5,
      reviewCount: 189,
      image: '/images/img_frame_45.png',
      restaurantName: 'Coffee House',
      restaurantLogo: '/images/img_talabat_logo_2.png',
      category: 'coffee',
      deliveryTime: '10-20 mins',
      deliveryFee: 'Free delivery',
      discount: '22% off'
    }
  ];

  // Create extended list to show more items
  const createExtendedItems = (items: FoodItem[], count: number) => {
    const extended = [];
    for (let i = 0; i < count; i++) {
      const baseItem = items[i % items.length];
      extended.push({
        ...baseItem,
        id: `${baseItem.id}-${i}`,
        name: `${baseItem.name} ${i + 1}`
      });
    }
    return extended;
  };

  // Use selectedCategoryId as the current category
  const currentCategoryId = selectedCategoryId || 'grilled-chicken';
  const categoryItems = allFoodItems.filter(item => item.category === currentCategoryId);
  const extendedItems = createExtendedItems(categoryItems, 500);

  const totalPages = Math.ceil(extendedItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = extendedItems.slice(startIndex, startIndex + itemsPerPage);

  const handleItemClick = (itemId: string) => {
    navigate(`/food-item/${itemId}`);
  };

  const handleCategoryClick = (categoryId: string) => {
    console.log('Category clicked:', categoryId);
    setSelectedCategoryId(categoryId);
    setCurrentPage(1); // Reset to first page when changing category
  };

  // Generate category-specific food items for display in restaurant cards
  const getCategoryFoodItems = (categoryId: string) => {
    const categoryFoodMap: { [key: string]: Array<{ name: string; image: string }> } = {
      'pizza': [
        { name: 'Margherita Pizza', image: '/images/img_frame_45_1.png' },
        { name: 'Pepperoni Pizza', image: '/images/img_frame_45_1.png' },
        { name: 'Veggie Pizza', image: '/images/img_frame_45_1.png' }
      ],
      'burger': [
        { name: 'Beef Burger', image: '/images/img_frame_45.png' },
        { name: 'Chicken Burger', image: '/images/img_frame_45.png' },
        { name: 'Veggie Burger', image: '/images/img_frame_45.png' }
      ],
      'grilled-chicken': [
        { name: 'BBQ Grilled Chicken', image: '/images/img_image_2.png' },
        { name: 'Herb Grilled Chicken', image: '/images/img_frame_45.png' },
        { name: 'Spicy Grilled Chicken', image: '/images/img_image_2.png' }
      ],
      'burger-king': [
        { name: 'Whopper Burger', image: '/images/img_image_3.png' },
        { name: 'Chicken Royale', image: '/images/img_frame_45.png' },
        { name: 'Fish Burger', image: '/images/img_image_3.png' }
      ],
      'chicken': [
        { name: 'Fried Chicken', image: '/images/img_image_4.png' },
        { name: 'Chicken Wings', image: '/images/img_frame_45.png' },
        { name: 'Chicken Strips', image: '/images/img_image_4.png' }
      ],
      'beef': [
        { name: 'Beef Steak', image: '/images/img_image_5.png' },
        { name: 'Beef Kebab', image: '/images/img_frame_45_228x322.png' },
        { name: 'Beef Curry', image: '/images/img_image_5.png' }
      ],
      'shawarma': [
        { name: 'Chicken Shawarma', image: '/images/img_image_6.png' },
        { name: 'Beef Shawarma', image: '/images/img_frame_45.png' },
        { name: 'Mixed Shawarma', image: '/images/img_image_6.png' }
      ],
      'continental': [
        { name: 'Pasta Carbonara', image: '/images/img_image_7.png' },
        { name: 'Grilled Salmon', image: '/images/img_frame_45.png' },
        { name: 'Caesar Salad', image: '/images/img_image_7.png' }
      ],
      'breakfast': [
        { name: 'English Breakfast', image: '/images/img_image_8.png' },
        { name: 'Pancakes', image: '/images/img_frame_45.png' },
        { name: 'French Toast', image: '/images/img_image_8.png' }
      ],
      'shawarma-2': [
        { name: 'Mixed Shawarma Platter', image: '/images/img_image_9.png' },
        { name: 'Falafel Wrap', image: '/images/img_frame_45.png' },
        { name: 'Hummus Plate', image: '/images/img_image_9.png' }
      ],
      'coffee': [
        { name: 'Cappuccino', image: '/images/img_image.png' },
        { name: 'Latte', image: '/images/img_frame_45.png' },
        { name: 'Espresso', image: '/images/img_image.png' }
      ]
    };

    return categoryFoodMap[categoryId] || [
      { name: 'Special Dish 1', image: '/images/img_frame_45.png' },
      { name: 'Special Dish 2', image: '/images/img_frame_45.png' },
      { name: 'Special Dish 3', image: '/images/img_frame_45.png' }
    ];
  };

  const sortOptions = ['Sort', 'Nearest', 'Great Offers', 'Rating 4.0+', 'Previous bought'];
  const filterOptions = ['Nearest', 'Great Offers', 'Rating 4.0+', 'Previous bought'];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="w-full bg-gray-50 flex flex-col items-center min-h-screen">
      <Header />
      
      {/* Category Header - Horizontal Layout like in image */}
      <div className="w-full bg-gradient-to-r from-red-500 via-red-600 to-pink-600 py-8 relative overflow-hidden">
        {/* Background decorative patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full transform -translate-x-16 -translate-y-16"></div>
          <div className="absolute top-0 right-0 w-40 h-40 border border-white rounded-full transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-1/4 w-24 h-24 border border-white rounded-full transform -translate-y-12"></div>
          <div className="absolute bottom-0 right-1/3 w-16 h-16 border border-white rounded-full transform translate-y-8"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4">
            {/* Left Arrow */}
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Categories Container */}
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide flex-1 py-3">
              {horizontalCategories.map((category, index) => {
                const isSelected = category.id === currentCategoryId || 
                                 category.id === selectedCategoryId;
                
                return (
                  <div
                    key={category.id}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Clicked category:', category.id, category.name);
                      handleCategoryClick(category.id);
                    }}
                    className="flex flex-col items-center cursor-pointer transition-all duration-300 flex-shrink-0 hover:scale-110 relative"
                    style={{ 
                      transform: isSelected ? 'scale(1.5)' : 'scale(1)',
                      zIndex: isSelected ? 20 : 1,
                      minWidth: isSelected ? '120px' : '90px',
                      padding: '8px'
                    }}
                  >
                    {/* Category Image - Clickable Area */}
                    <div 
                      className={`rounded-full overflow-hidden shadow-xl bg-white mb-2 transition-all duration-300 ${
                        isSelected 
                          ? 'w-20 h-20 border-4 border-white ring-4 ring-yellow-300' 
                          : 'w-14 h-14 border-2 border-white'
                      }`}
                    >
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    </div>
                    
                    {/* Category Name */}
                    <span 
                      className={`text-white font-bold text-center leading-tight block pointer-events-none ${
                        isSelected 
                          ? 'text-sm' 
                          : 'text-xs'
                      }`}
                      style={{ 
                        maxWidth: isSelected ? '110px' : '80px',
                        fontSize: isSelected ? '11px' : '9px',
                        lineHeight: '1.2'
                      }}
                    >
                      {category.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters Section */}
        <div className="bg-white p-4 rounded-2xl shadow-sm my-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select 
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="appearance-none bg-white text-red-600 border border-red-200 px-4 py-2 pr-8 rounded-lg font-medium cursor-pointer hover:border-red-300 transition-all duration-300 text-sm"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option} className="bg-white text-gray-900">
                    {option}
                  </option>
                ))}
              </select>
              <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map(filter => (
                <button
                  key={filter}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:border-red-300 hover:bg-red-50 hover:text-red-600 transition-all duration-300 font-medium text-sm"
                >
                  {filter}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="ml-auto flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 min-w-[200px]">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder={`Search ${horizontalCategories.find(cat => cat.id === currentCategoryId)?.name || 'items'}...`}
                className="bg-transparent outline-none text-sm text-gray-700 flex-1 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex gap-6 mb-8">
          {/* Left Side - Category-Specific Promotional Banner */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-6 text-white relative overflow-hidden h-full min-h-[500px]">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">Special Delicious</h2>
                <h3 className="text-3xl font-bold text-yellow-300 mb-4">
                  {horizontalCategories.find(cat => cat.id === currentCategoryId)?.name || 'Category'} Deals
                </h3>
                
                <div className="mb-6">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                    UP TO 50% OFF
                  </div>
                </div>
                
                {/* Category Image */}
                <div className="flex justify-center mb-4">
                  <img 
                    src={horizontalCategories.find(cat => cat.id === currentCategoryId)?.image || '/images/img_image.png'} 
                    alt={`Special ${horizontalCategories.find(cat => cat.id === currentCategoryId)?.name || currentCategoryId}`} 
                    className="w-48 h-48 object-cover rounded-full border-4 border-white/20"
                  />
                </div>
                
                <p className="text-sm opacity-90 text-center">
                  Discover amazing {horizontalCategories.find(cat => cat.id === currentCategoryId)?.name || currentCategoryId || 'items'} from top restaurants with incredible deals and fast delivery
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Restaurant Cards Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentItems.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  {/* Restaurant Card Header */}
                  <div className="p-4 pb-2">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg text-gray-900">{item.restaurantName}</h3>
                      <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Restaurant Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <img 
                          src="/images/delivery-symbol.svg" 
                          alt="delivery" 
                          className="w-4 h-4"
                        />
                        <span className="font-bold text-gray-900">{item.price}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-bold">{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-500 font-medium">{item.deliveryTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Food Items Horizontal Scroll */}
                  <div className="px-4 pb-4">
                    <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                      {/* Generate category-specific food items */}
                      {getCategoryFoodItems(currentCategoryId).map((foodItem, index) => (
                        <div key={index} className="flex-shrink-0 w-32">
                          <div className="relative">
                            <img 
                              src={foodItem.image} 
                              alt={foodItem.name}
                              className="w-32 h-24 object-cover rounded-lg"
                            />
                            <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {foodItem.name}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* View Full Food Menu */}
                    <button className="flex items-center justify-between w-full mt-3 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                      <span>View Full Food Menu</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-medium">
                1 to 50 of 500 items
              </span>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Total items:</span>
                <select className="border border-gray-200 rounded-lg px-3 py-1 text-sm font-medium focus:border-red-500 focus:outline-none">
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-300 hover:bg-red-50 transition-all duration-300 font-medium"
              >
                ‹
              </button>
              
              {[1, 2, 3, 4, 5].map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 flex items-center justify-center border rounded-xl text-sm font-medium transition-all duration-300 ${
                    currentPage === pageNum
                      ? 'bg-red-500 text-white border-red-500'
                      : 'border-gray-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
              
              <button 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-300 hover:bg-red-50 transition-all duration-300 font-medium"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
