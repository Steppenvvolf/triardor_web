import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'Blog', path: '/blog' },
    { name: 'Studio', path: '/studio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#BBBFC4] hover:text-[#FBB659] transition-colors duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0F1013] border-t border-[#394E59] py-4">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name} className="px-4">
                <Link
                  to={item.path}
                  className="block text-[#BBBFC4] hover:text-[#FBB659] transition-colors duration-300 text-sm uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;