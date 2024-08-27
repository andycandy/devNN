import React from "react";

interface SideNavBarProps {
  isExpanded: boolean;
  toggleSidebar: (e: boolean) => void;
}

const SideNavbar: React.FC<SideNavBarProps> = ({ isExpanded, toggleSidebar }) => {
  return (
    <nav
      className={`h-full bg-black bg-opacity-20 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64 " : "w-20"
      }`}
      onMouseEnter={() => toggleSidebar(true)}
      onMouseLeave={() => toggleSidebar(false)}
    >
      <div className="p-4 h-full flex flex-col">
        <ul className="space-y-2 flex-grow">
          <li>
            
            <a
              href="#home"
              className={`flex items-center p-2 text-white rounded-md hover:bg-white hover:bg-opacity-20 `}
            >
              <span className="">🏠</span>
              {isExpanded && "Home"}
            </a>
          </li>
          <li>
            <a
              href="#profile"
              className="flex items-center p-2 text-white rounded-md hover:bg-white hover:bg-opacity-20"
            >
              <span className="">👤</span>
              {isExpanded && "Profile"}
            </a>
          </li>
          <li>
            <a
              href="#settings"
              className="flex items-center p-2 text-white rounded-md hover:bg-white hover:bg-opacity-20"
            >
              <span className="">⚙️</span>
              {isExpanded && "Settings"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNavbar;
