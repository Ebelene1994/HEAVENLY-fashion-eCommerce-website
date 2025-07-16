import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      <a href="#" className="hover:text-gray-900 transition-colors">
        Women
      </a>
      <ChevronRight className="h-4 w-4" />
      <a href="#" className="hover:text-gray-900 transition-colors">
        Clothes
      </a>
      <ChevronRight className="h-4 w-4" />
      <span className="text-gray-900">Tops</span>
    </nav>
  );
};

export default Breadcrumb;