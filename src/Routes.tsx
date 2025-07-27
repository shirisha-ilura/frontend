import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import RestaurantPage from './pages/Restaurant';
import FoodItemPage from './pages/FoodItem';
import CategoryPage from './pages/Category';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/restaurant/:restaurantId/item/:itemId" element={<FoodItemPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;