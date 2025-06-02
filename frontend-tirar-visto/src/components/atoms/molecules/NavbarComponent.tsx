import React from 'react';

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
  return (
    <nav
      className="flex items-center justify-start h-[100px] w-full"
      aria-label={navAriaLabel}
    >
      <div className="flex items-center">
        {logoHref ? (
          <a href={logoHref} aria-label={logoAlt + (logoAlt.toLowerCase().includes('logotipo') || logoAlt.toLowerCase().includes('logo') ? ' - Ir para a página inicial' : '')}>
            <img src={logoSrc} alt={logoAlt} className="h-10 mr-4" />
          </a>
        ) : (
          <img src={logoSrc} alt={logoAlt} className="h-10 mr-4" />
        )}
        <ul id="navbar-menu" className="flex items-center justify-between">
          {menuItems.map((item, index) => (
            <li key={index} className="min-w-fit px-2.5 text-center">
              <a
                href={item.href}
                className={item.isCurrent ? 'font-bold' : ''}
                {...(item.isCurrent ? { 'aria-current': 'page' } : {})}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;