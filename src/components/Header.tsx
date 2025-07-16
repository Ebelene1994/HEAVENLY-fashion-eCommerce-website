import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Left Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/women" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
              Women
            </Link>
            <Link to="/men" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
              Men
            </Link>
            <Link to="/kids" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
              Kids
            </Link>
            <Link to="/brands" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
              Brands
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="text-2xl font-serif font-bold text-gray-900 tracking-wide">
              HEAVENLY
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-6 w-6" />
            </button>
            <Link to="/account" className="text-gray-600 hover:text-gray-900 transition-colors">
              <User className="h-6 w-6" />
            </Link>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900 transition-colors relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                autoFocus
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/women" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Women
              </Link>
              <Link to="/men" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Men
              </Link>
              <Link to="/kids" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Kids
              </Link>
              <Link to="/brands" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Brands
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;