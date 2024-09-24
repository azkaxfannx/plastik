import { Button } from "react-daisyui";
import { useState } from "react";

const DropdownItem = ({ title, items, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isMobile ? 'w-full' : 'group relative inline-block'}`}>
      <Button 
        color="ghost" 
        className="w-full font-normal justify-between"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        {title}
        <i className={`fa-solid fa-caret-down ml-1 ${isMobile && isOpen ? 'rotate-180' : ''} transition-transform`}></i>
      </Button>
      <div className={`
        ${isMobile 
          ? `${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300`
          : 'absolute left-0 top-full mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 mt-2 border-2 border-black'
        }
      `}>
        <div className="py-1 mx-2 text-gray-700" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="block px-4 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownItem