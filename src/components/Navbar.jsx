import React, { useEffect, useRef, useState } from 'react';
import { navLinks } from '../constants'; // Assuming this constant is correctly defined
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; 

// FOR THEME CHANGING DAISYUI

export const Navbar = () => {
  const navRef = useRef(null);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Update state based on scroll position
      if (window.scrollY > 100) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };


    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    // This is crucial to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);
  
    // HOVER UNDERLINE EFFECT !
        const handleMouseEnter = (linknme) => {
          setHoveredLink(linknme);
        };

        const handleMouseLeave = () => {
          setHoveredLink(null);
        };
      
  return (
    <div className='flex justify-around relative'>
      <nav
      ref={navRef}
      className={`
        flex nav px-16 text-[var(--color-base-content)] bg-[var(--color-base-200)] justify-center items-center gap-4 w-[var(--container-width)] text-4xl z-1
        ${isNavbarFixed ? 'fixed_nav' : ''}
      `}
    >
      <ul className="flex space-x-8">
        {navLinks.map((props) => (
          <li key={props.name}>

             <HashLink
            to={props.link}
            smooth 
             className={
          hoveredLink === props.name && props.name == location.hash.substring(1)
            ? 'relative link transition-transform duration-4000'
            : ''
        }
        onMouseEnter={() => handleMouseEnter(props.name)} // Pass the item's name to the handler
        onMouseLeave={handleMouseLeave}
        end='/'
          >
            {props.name}
      </HashLink>
          </li>
        ))}

      </ul>
      </nav>

      <div className={`flex ml-auto p-2 mr-32 mt-4 text-cyan-600 border-2 rounded-2xl h-full bg-white z-10`}>
          <select data-choose-theme>
            <option value="dark">Dark</option>
            <option value="cupcake">Light</option>
            <option value="aqua">Aqua</option>
            
          </select>
      </div>
    </div>
  );
};
