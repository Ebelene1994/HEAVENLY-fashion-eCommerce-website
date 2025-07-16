import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface FilterSectionProps {
  onFilterChange: (filters: any) => void;
  onSortChange: (sort: string) => void;
  currentSort: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({ 
  onFilterChange, 
  onSortChange, 
  currentSort 
}) => {
  const [activeFilters, setActiveFilters] = useState<any>({});
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filters = [
    { id: 'category', label: 'Filters', options: ['All', 'Shirts', 'Blouses', 'T-Shirts'] },
    { id: 'size', label: 'Size', options: ['XS', 'S', 'M', 'L', 'XL'] },
    { id: 'priceRange', label: 'Price Range', options: ['0-100', '100-300', '300-500', '500+'] }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popular', label: 'Most Popular' }
  ];

  const handleFilterSelect = (filterId: string, value: string) => {
    const newFilters = { ...activeFilters, [filterId]: value };
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  const removeFilter = (filterId: string) => {
    const newFilters = { ...activeFilters };
    delete newFilters[filterId];
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-200">
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <div key={filter.id} className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              onChange={(e) => handleFilterSelect(filter.id, e.target.value)}
              value={activeFilters[filter.id] || ''}
            >
              <option value="">{filter.label}</option>
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        ))}
        
        {/* Active Filters */}
        <div className="flex gap-2">
          {Object.entries(activeFilters).map(([key, value]) => (
            <div key={key} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
              <span>{value}</span>
              <button
                onClick={() => removeFilter(key)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="relative">
        <button
          onClick={() => setShowSortDropdown(!showSortDropdown)}
          className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span>Sort by: {sortOptions.find(opt => opt.value === currentSort)?.label}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        
        {showSortDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onSortChange(option.value);
                  setShowSortDropdown(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;