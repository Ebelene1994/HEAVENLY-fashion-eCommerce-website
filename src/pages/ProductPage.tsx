import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Heart, Share2, Truck, RotateCcw, Star } from 'lucide-react';
import { products } from '../data/products';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || '0'));
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          Return to home
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-gray-900 transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/women" className="hover:text-gray-900 transition-colors">
          Women
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">Tops</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={product.image}
                  alt={`${product.name} view ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {product.brand}
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-gray-900">
                £{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  £{product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount && (
                <span className="text-sm text-red-600 font-medium bg-red-50 px-3 py-1 rounded-full">
                  -{product.discount}% OFF
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">(127 reviews)</span>
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">Color</p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color ? 'border-gray-900' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-gray-900">Size</p>
              <Link to="/size-guide" className="text-sm text-gray-600 hover:text-gray-900 underline">
                Size Guide
              </Link>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 px-4 text-sm border rounded-md ${
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
            <p className="text-sm font-medium text-gray-900 mb-3">Quantity</p>
            <div className="flex items-center border border-gray-300 rounded-md w-32">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                -
              </button>
              <span className="flex-1 text-center py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-4">
            <button
              className="w-full bg-gray-900 text-white py-4 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium text-lg"
              disabled={!selectedSize}
            >
              Add to Bag - £{(product.price * quantity).toFixed(2)}
            </button>
            
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors">
                <Heart className="h-5 w-5" />
                Add to Wishlist
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors">
                <Share2 className="h-5 w-5" />
                Share
              </button>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="border-t pt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Truck className="h-5 w-5" />
              <span>Free shipping on orders over £100</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <RotateCcw className="h-5 w-5" />
              <span>30-day return policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="border-t border-gray-200 mb-16">
        <div className="flex space-x-8 border-b border-gray-200">
          {['details', 'shipping', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                activeTab === tab
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="py-8">
          {activeTab === 'details' && (
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold mb-4">Product Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p><strong>Fabric:</strong> {product.fabric}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                  <p><strong>Year:</strong> {product.year}</p>
                </div>
                <div>
                  <p><strong>Model Height:</strong> 5'9" (175cm)</p>
                  <p><strong>Model Size:</strong> UK 8 / EU 36 / US 4</p>
                  <p><strong>Fit:</strong> True to size</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'shipping' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Shipping & Returns</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Delivery Options</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Standard Delivery (3-5 business days): Free on orders over £100</li>
                    <li>• Express Delivery (1-2 business days): £15</li>
                    <li>• Next Day Delivery: £25</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Returns</h4>
                  <p className="text-gray-600">
                    We offer free returns within 30 days of purchase. Items must be in original condition with tags attached.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-medium">Sarah M.</span>
                    <span className="text-gray-500 text-sm">Verified Purchase</span>
                  </div>
                  <p className="text-gray-600">
                    Beautiful quality and perfect fit. The fabric feels luxurious and the cut is very flattering. Highly recommend!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <Link
              key={relatedProduct.id}
              to={`/product/${relatedProduct.id}`}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {relatedProduct.brand}
                </p>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {relatedProduct.name}
                </h3>
                <p className="text-sm font-semibold text-gray-900">
                  £{relatedProduct.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;