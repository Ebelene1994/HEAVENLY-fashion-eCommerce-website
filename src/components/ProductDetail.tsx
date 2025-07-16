import React, { useState } from 'react';
import { X, Heart, Share2, Truck, RotateCcw } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  isMobile?: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose, isMobile = false }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={`bg-white ${isMobile ? 'p-4' : 'w-96 h-screen overflow-y-auto border-l border-gray-200 sticky top-0 p-6'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Product Details</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Product Image */}
      <div className="aspect-square bg-gray-100 rounded-lg mb-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
            {product.brand}
          </p>
          <h3 className="text-xl font-semibold text-gray-900">
            {product.name}
          </h3>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            £{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              £{product.originalPrice.toFixed(2)}
            </span>
          )}
          {product.discount && (
            <span className="text-sm text-red-600 font-medium bg-red-50 px-2 py-1 rounded">
              -{product.discount}% OFF
            </span>
          )}
        </div>

        {/* Color Selection */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">Color</p>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color ? 'border-gray-900' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">Size</p>
          <div className="grid grid-cols-4 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2 px-3 text-sm border rounded-md ${
                  selectedSize === size
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <p className="text-sm font-medium text-gray-900 mb-2">Quantity</p>
          <div className="flex items-center border border-gray-300 rounded-md w-24">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 text-gray-600 hover:text-gray-900"
            >
              -
            </button>
            <span className="flex-1 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 text-gray-600 hover:text-gray-900"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium"
          disabled={!selectedSize}
        >
          Add to Bag
        </button>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Heart className="h-4 w-4" />
            <span className="text-sm">Add to Wishlist</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Share2 className="h-4 w-4" />
            <span className="text-sm">Share</span>
          </button>
        </div>

        {/* Product Details */}
        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Details</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Fabric:</strong> {product.fabric}</p>
            <p><strong>Care:</strong> {product.care}</p>
            <p><strong>Year:</strong> {product.year}</p>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <Truck className="h-4 w-4" />
            <span>Free shipping on orders over £100</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <RotateCcw className="h-4 w-4" />
            <span>30-day return policy</span>
          </div>
        </div>

        {/* Reward Badge */}
        <div className="bg-orange-50 border border-orange-200 rounded-md p-3">
          <p className="text-sm text-orange-800">
            <strong>Welcome Reward!</strong> Get 10% off your first purchase
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;