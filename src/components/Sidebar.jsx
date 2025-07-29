

import React, { useState, useEffect, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  UtensilsCrossed,
  ShoppingCart,
  User,
  Bell,
  Settings,
  ChevronDown,
} from 'lucide-react';

const iconMap = {
  Dashboard: LayoutDashboard,
  Dishes: UtensilsCrossed,
  Orders: ShoppingCart,
  Profile: User,
  Notifications: Bell,
  Settings: Settings,
};

const pathMap = {
  Dashboard: 'dashboard',
  Dishes: 'dishes',
  Orders: 'orders',
  Profile: 'profile',
  Settings: 'settings',
  Notifications: 'notifications',
};

const Sidebar = forwardRef(({ isSidebarOpen, setIsSidebarOpen }, ref) => {
  const [permissions, setPermissions] = useState({});
  const [isOpen, setIsOpen] = useState({});
  const [selectedSubmenu, setSelectedSubmenu] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedPermissions = localStorage.getItem('permissions');
    if (storedPermissions) {
      setPermissions(JSON.parse(storedPermissions));
    }
  }, []);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setIsSidebarOpen]);

  const toggleSection = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleClick = (label) => {
    setSelectedSubmenu(label);
    const path = pathMap[label] || label.toLowerCase().replace(/\s+/g, '-');
    navigate(`/home/${path}`);
    setIsSidebarOpen(false); 
  };

  if (!isSidebarOpen) return null;

  return (
    <div ref={ref}
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#003049] 
        text-white py-4 shadow-lg transition-transform transform duration-300 ease-in-out
      `}
    >
      {/* Logo Section */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className="flex items-center justify-center gap-4 cursor-pointer transition mb-6"
      >
        <div className="w-8 h-8 rounded-full bg-white text-[#003049] text-xl font-bold flex items-center justify-center">
          S
        </div>
        <span className="font-medium whitespace-nowrap">SavoryNow</span>
      </div>

      {/* Menu Items */}
      <ul className="space-y-3 text-lg w-full">
        {Object.entries(permissions).map(([section, submenuList]) => {
          const IconComponent = iconMap[section];

          return (
            <li key={section}>
              <div
                onClick={() =>
                  submenuList.length > 0
                    ? toggleSection(section)
                    : handleClick(section)
                }
                className="group flex items-center gap-3 px-2 py-2 cursor-pointer transition hover:bg-white hover:text-[#003049] rounded-l-2xl"
              >
                {IconComponent && (
                  <IconComponent className="w-6 h-6 text-white group-hover:text-[#003049] transition-colors duration-200" />
                )}
                <span className="font-medium">{section}</span>
                {submenuList.length > 1 && (
                  <ChevronDown
                    size={16}
                    className={`ml-auto transition-transform duration-300 ${
                      isOpen[section] ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                )}
              </div>

              {/* Submenus */}
              {isOpen[section] && submenuList.length > 1 && (
                <ul className="pl-8 mt-1 space-y-1 text-base">
                  {submenuList.map((item, index) => {
                    const label = item.submenu_name;
                    const isActive = selectedSubmenu === label;
                    return (
                      <li
                        key={index}
                        onClick={() => handleClick(label)}
                        className={`cursor-pointer hover:underline ${
                          isActive
                            ? 'text-white font-semibold underline'
                            : 'text-white'
                        }`}
                      >
                        {label}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Sidebar;


