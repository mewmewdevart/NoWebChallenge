import React, { useState, useEffect, useCallback } from 'react';
import AnimatedHamburgerIconComponent from '@atoms/AnimatedHamburgerIconComponent';

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

const ANIMATION_DURATION = 300; // ms
const MOBILE_BREAKPOINT = 1151;

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
  const [shouldRenderMobileElements, setShouldRenderMobileElements] = useState(false);

  const checkScreenSize = useCallback(() => {
    const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
    setIsMobile(mobile);
    if (!mobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [checkScreenSize]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    let animationTimer: NodeJS.Timeout;
    let unmountTimer: NodeJS.Timeout;

    if (isMobileMenuOpen) {
      setShouldRenderMobileElements(true);
      document.body.style.overflow = 'hidden';
      animationTimer = setTimeout(() => {
        setAnimateMobileMenu(true);
      }, 10);
    } else {
      setAnimateMobileMenu(false);
      unmountTimer = setTimeout(() => {
        setShouldRenderMobileElements(false);
        document.body.style.overflow = '';
      }, ANIMATION_DURATION);
    }

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(unmountTimer);
      if (document.body.style.overflow === 'hidden') {
         document.body.style.overflow = '';
      }
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    return () => {
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = '';
      }
    };
  }, []);

  return (
    <>
      <nav
        className="flex items-center justify-between lg2:justify-start h-[100px] w-full z-[60] 2xl:relative bg-white"
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
              <img src={logoSrc} alt={logoAlt} className="h-10 mr-4" loading="lazy" />
            </a>
          ) : (
            <img src={logoSrc} alt={logoAlt} className="h-10 mr-4 transition-opacity duration-200 ease-in-out hover:opacity-75" loading="lazy" />
          )}
        </div>

        <div className="hidden lg2:flex items-center bg-red-500-">
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
                  aria-current={item.isCurrent ? 'page' : undefined}
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

        <div className="lg2:hidden flex items-center z-[70]">
          <AnimatedHamburgerIconComponent
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            ariaLabel={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            ariaExpanded={isMobileMenuOpen}
            ariaControls="navbar-menu-mobile"
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          />
        </div>

        {isMobile && shouldRenderMobileElements && (
          <div
            id="navbar-menu-mobile"
            className={`
              absolute top-[100px] left-0 right-0 w-full 
              h-[35vh] 
              bg-white 
              lg2:hidden 
              flex flex-col 
              py-2 
              z-[60] 
              overflow-y-auto 
              shadow-lg 
              transition-transform ease-in-out
              ${animateMobileMenu ? 'translate-y-0' : '-translate-y-full'}
            `}
            style={{ transitionDuration: `${ANIMATION_DURATION}ms`}}
          >
            <ul
              className={`
                w-full 
                transition-opacity ease-in-out
                ${animateMobileMenu ? 'opacity-100 delay-150' : 'opacity-0'}
              `}
              style={{
                transitionDuration: `${ANIMATION_DURATION}ms`,
                transitionDelay: animateMobileMenu ? '150ms' : '0ms'
              }}
            >
              {menuItems.map((item, index) => (
                <li key={index} className="w-full text-center">
                  <a
                    href={item.href}
                    className={`
                      block w-full py-3 px-4 text-base transition-colors duration-150 ease-in-out
                      ${item.isCurrent
                        ? 'text-charcoal font-semibold bg-gray-100'
                        : 'text-charcoal hover:font-semibold hover:bg-gray-50'
                      }
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={item.isCurrent ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarComponent;