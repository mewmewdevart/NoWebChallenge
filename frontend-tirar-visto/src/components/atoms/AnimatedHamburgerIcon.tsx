import React from 'react';

interface AnimatedHamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  className?: string; 
}

const AnimatedHamburgerIcon: React.FC<AnimatedHamburgerIconProps> = ({
  isOpen,
  onClick,
  ariaLabel = "Abrir menu de navegação",
  ariaExpanded,
  ariaControls,
  className = "text-gray-700 focus:outline-none" 
}) => {
  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-current transition ease transform duration-300`;

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className={`flex flex-col h-12 w-12 border-0 justify-center items-center group cursor-pointer ${className}`}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-2 opacity-100"
            : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-100"
            : "opacity-100"
        }`}
      />
    </button>
  );
};

export default AnimatedHamburgerIcon;