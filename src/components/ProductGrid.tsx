import React from 'react';
import { Product } from '../types/Product';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group cursor-pointer"
          onClick={() => onProductClick(product)}
        >
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              {product.brand}
            </p>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900">
                £{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  £{product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount && (
                <span className="text-xs text-red-600 font-medium">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;