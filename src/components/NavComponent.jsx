import React, { useState, useEffect } from 'react';
import { Navbar } from "react-daisyui";
import DropdownItem from './DropDownItem';



const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);  // 1024px 'lg' breakpoint
    };

    handleResize();  
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dropdownItems = {
    Universe: [
      { label: 'Mission', url: '/mission' },
      { label: 'About', url: '/about' },
      { label: 'Team', url: '/team' },
      { label: 'FAQ', url: '/faq' }
    ],
    Solutions: [
      { label: 'Create', url: '/create' },
      { label: 'Learn', url: '/learn' },
      { label: 'Business', url: '/business' }
    ],
    Resources: [
      { label: 'Academy', url: '/academy' },
      { label: 'How-to', url: '/how-to' },
      { label: 'Policies', url: '/policies' }
    ],
    Community: [
      { label: 'News', url: '/news' },
      { label: 'Events', url: '/events' },
      { label: 'Jobs', url: '/jobs' }
    ]
  };

  return (
    <Navbar className=" justify-between bg-white py-0 flex-wrap sticky z-40 top-0">
      <div className="flex px-4 items-center justify-between min-h-16 w-full z-20 bg-white lg:w-auto">
        <img src="/api/placeholder/40/40" alt="Isi Logo" className="rounded-full" />
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      <div className={`${isMenuOpen ? 'top-[3rem]' : 'top-[-20rem]'} px-2 lg:ml-32 lg:static fixed lg:flex w-full  lg:w-auto flex-col lg:flex-row items-start lg:items-center transition-all z-10 bg-white w-full right-0.5 duration-300  mt-4 lg:mt-0`}>
        {Object.entries(dropdownItems).map(([title, items]) => (
          <DropdownItem key={title} title={title} items={items} isMobile={isMobile} />
        ))}
        <div className="mt-4 lg:mt-0 lg:hidden block  flex flex-col lg:flex-row gap-2 w-fit ml-4 lg:w-auto">
          <button className="border-2 p-2 px-4 rounded-md border-black hover:shadow-lg hover:shadow-black/25 w-full lg:w-auto">
            Donate <span className="text-red-600">❤</span>
          </button>
          <button className="border-2 p-2 px-4 bg-yellow-400 rounded-md border-black hover:shadow-lg hover:shadow-black/25 w-full lg:w-auto">
            Starterkits
          </button>
        </div>
      </div>
      {/* ketika desktop */}
      <div className="mt-4 lg:mt-0 lg:block hidden lg:flex flex-col lg:mr-4 lg:flex-row gap-2 w-fit  lg:w-auto">
          <button className="border-2 p-2 px-4 rounded-md border-black hover:shadow-lg hover:shadow-black/25 w-full lg:w-auto">
            Donate <span className="text-red-600">❤</span>
          </button>
          <button className="border-2 p-2 px-4 bg-yellow-400 rounded-md border-black hover:shadow-lg hover:shadow-black/25 w-full lg:w-auto">
            Starterkits
          </button>
      </div>
    </Navbar>
  );
};

export default NavComponent;