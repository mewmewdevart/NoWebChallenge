import React, { useState, useEffect } from 'react';

import AnimatedHamburgerIcon from '../atoms/AnimatedHamburgerIcon'; 

export interface MenuItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface NavbarComponentProps {
  logoSrc: string;
  logoAlt?: string;
  logoHref?: string;
  menuItems: MenuItem[];
  navAriaLabel?: string;
}

const NavbarComponent: React.FC<NavbarComponentProps> = ({
  logoSrc,
  logoAlt = 'Logotipo',
  logoHref = '/',
  menuItems,
  navAriaLabel = 'Navegação principal',
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animateMobileMenu, setAnimateMobileMenu] = useState(false);

  const checkScreenSize = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (!mobile && isMobileMenuOpen) { 
        setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isMobileMenuOpen]);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setAnimateMobileMenu(true), 10);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = ''; 
      };
    } else {
      setAnimateMobileMenu(false);
      document.body.style.overflow = '';
    }
    return () => { 
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);


  return (
    <>
      <nav
        className="flex items-center justify-between lg:justify-start h-[100px] w-full px-4 md:px-0 z-[60] relative bg-white "
        aria-label={navAriaLabel}
      >
        <div className="flex items-center">
          {logoHref ? (
            <a
              href={logoHref}
              className="transition-opacity duration-200 ease-in-out hover:opacity-75"
              aria-label={
                logoAlt +
                (logoAlt.toLowerCase().includes('logotipo') ||
                logoAlt.toLowerCase().includes('logo')
                  ? ' - Ir para a página inicial'
                  : '')
              }
            >
              <img src={logoSrc} alt={logoAlt} className="h-10 mr-4" />
            </a>
          ) : (
            <img src={logoSrc} alt={logoAlt} className="h-10 mr-4 transition-opacity duration-200 ease-in-out hover:opacity-75" />
          )}
        </div>

        {/* Menu - Desktop */}
        <div className="hidden md:flex items-center">
          <ul id="navbar-menu-desktop" className="flex items-center justify-between">
            {menuItems.map((item, index) => (
              <li key={index} className="min-w-fit text-center">
                <a
                  href={item.href}
                  className={`px-3 text-sm transition-all duration-200 ease-in-out group relative
                              ${item.isCurrent
                                ? 'text-charcoal font-semibold' 
                                : 'text-charcoal hover:font-semibold'
                              }`}
                  {...(item.isCurrent ? { 'aria-current': 'page' } : {})}
                >
                  {item.label}
                  {!item.isCurrent && (
                    <span
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-charcoal transition-all duration-300 ease-out group-hover:w-3/4"
                    ></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden flex items-center z-[70]"> 
          <AnimatedHamburgerIcon
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            ariaLabel={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            ariaExpanded={isMobileMenuOpen}
            ariaControls="navbar-menu-mobile"
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" 
          />
        </div>

        {/* Menu Mobile Dropdown/Drawer */}
        {isMobile && isMobileMenuOpen && (
          <div
            id="navbar-menu-mobile"
            className={`absolute top-[100px] left-0 w-full bg-white md:hidden flex flex-col items-center py-2 z-[60]
                        transition-all duration-300 ease-in-out transform
                        ${animateMobileMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          >
            <ul className="w-full">
              {menuItems.map((item, index) => (
                <li key={index} className="w-full text-center">
                  <a
                    href={item.href}
                    className={`block w-full py-3 px-4 text-base  transition-colors duration-150 ease-in-out
                                ${item.isCurrent
                                ? 'text-charcoal font-semibold' 
                                : 'text-charcoal hover:font-semibold'
                                }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    {...(item.isCurrent ? { 'aria-current': 'page' } : {})}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Overlay - Menu Mobile */}
      {isMobile && isMobileMenuOpen && (
        <div
          className={`fixed inset-0 bg-black z-50 md:hidden
                      transition-opacity duration-300 ease-in-out
                      ${animateMobileMenu ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'}`}
          onClick={toggleMobileMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default NavbarComponent;