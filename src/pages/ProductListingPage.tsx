import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import FilterSection from '../components/FilterSection';
import ProductGrid from '../components/ProductGrid';
import ProductDetail from '../components/ProductDetail';
import { Product } from '../types/Product';
import { products } from '../data/products';

interface ProductListingPageProps {
  category: string;
}

const ProductListingPage: React.FC<ProductListingPageProps> = ({ category }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortBy, setSortBy] = useState('newest');
  const [filters, setFilters] = useState({
    category: '',
    size: '',
    priceRange: ''
  });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    let filtered = products;
    
    if (newFilters.size) {
      filtered = filtered.filter(product => 
        product.sizes.includes(newFilters.size)
      );
    }
    
    if (newFilters.priceRange) {
      const [min, max] = newFilters.priceRange.split('-').map(Number);
      filtered = filtered.filter(product => 
        product.price >= min && product.price <= max
      );
    }
    
    setFilteredProducts(filtered);
  };

  const handleSort = (sortOption: string) => {
    setSortBy(sortOption);
    let sorted = [...filteredProducts];
    
    switch (sortOption) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        break;
    }
    
    setFilteredProducts(sorted);
  };

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-gray-900 transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900 capitalize">{category}</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">Tops</span>
      </nav>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {categoryTitle.toUpperCase()}'S TOPS
          </h1>
          <p className="text-gray-600">{filteredProducts.length} items</p>
        </div>
      </div>
      
      <FilterSection 
        onFilterChange={handleFilterChange}
        onSortChange={handleSort}
        currentSort={sortBy}
      />
      
      <div className="flex gap-8 mt-8">
        <div className="flex-1">
          <ProductGrid 
            products={filteredProducts}
            onProductClick={handleProductClick}
          />
        </div>
        
        {selectedProduct && (
          <div className="hidden lg:block">
            <ProductDetail 
              product={selectedProduct}
              onClose={handleCloseDetail}
            />
          </div>
        )}
      </div>
      
      {/* Mobile Product Detail Modal */}
      {selectedProduct && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[90vh] overflow-y-auto rounded-t-lg">
            <ProductDetail 
              product={selectedProduct}
              onClose={handleCloseDetail}
              isMobile={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;