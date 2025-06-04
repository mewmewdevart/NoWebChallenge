import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonComponentProps extends Omit<NativeButtonProps, 'ref'> {
  label?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant: 'fullDarkBlue' | 'outlineDarkBlue' | 'fullYellow' | 'ghost';
  size?: 'large' | 'small';
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const buttonStyles = {
  fullDarkBlue: {
    large: 'cursor-pointer bg-dark-blue hover:translate-y-[1px] hover:bg-yellow transition-all duration-200 ease-in-out text-sm lg:text-base leading-[24px] rounded-[40px] px-[12px] flex items-center justify-center gap-[6px] h-[48px] text-white w-[133px] w-fit',
    small: 'cursor-pointer bg-dark-blue hover:translate-y-[1px] hover:bg-yellow transition-all duration-200 ease-in-out text-[16px] leading-[20px] rounded-[40px] px-[20px] flex items-center justify-center gap-[4px] h-[40px] text-white min-w-[160px] w-fit',
  },
  outlineDarkBlue: {
    large: 'cursor-pointer bg-white outline-2 outline-dark-blue outline-solid hover:translate-y-[1px] hover:bg-light-gray transition-all duration-200 ease-in-out text-sm lg:text-base leading-[24px] rounded-[40px] px-[12px] flex items-center justify-center gap-[6px] h-[48px] text-white w-[133px] w-fit',
    small: 'cursor-pointer bg-white outline-2 outline-dark-blue outline-solid hover:translate-y-[1px] hover:bg-light-gray transition-all duration-200 ease-in-out text-[16px] leading-[20px] rounded-[40px] px-[20px] flex items-center justify-center gap-[4px] h-[40px] text-white min-w-[160px] w-fit',
  },
fullYellow: {
    large: 'cursor-pointer bg-yellow hover:translate-y-[1px] hover:bg-dark-blue hover:text-white transition-all duration-200 ease-in-out text-sm lg:text-base leading-[24px] rounded-[40px] px-[12px] flex items-center justify-center gap-[6px] h-[48px] text-white w-[133px] w-fit',
    small: 'cursor-pointer bg-yellow hover:translate-y-[1px] hover:bg-dark-blue hover:text-white transition-all duration-200 ease-in-out text-[16px] leading-[20px] rounded-[40px] px-[20px] flex items-center justify-center gap-[4px] h-[40px] text-white min-w-[160px] w-fit',
  },
  ghost: {
    large: 'cursor-pointer bg-transparent hover:bg-neutral-100 transition-all duration-200 ease-in-out text-sm lg:text-base leading-[24px] rounded-[40px] px-[12px] flex items-center justify-center gap-[6px] h-[48px] text-neutral-500 w-[133px] w-fit',
    small: 'cursor-pointer bg-transparent hover:bg-neutral-100 transition-all duration-200 ease-in-out text-[16px] leading-[20px] rounded-[40px] px-[20px] flex items-center justify-center gap-[4px] h-[40px] text-neutral-500 min-w-[160px] w-fit',
  },
};

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonComponentProps>(
  (
    {
      label,
      onClick,
      disabled = false,
      className = '',
      leftIcon,
      rightIcon,
      variant = 'fullDarkBlue',
      size = 'large',
      type = 'button',
      ariaLabel = '',
    },
    ref
  ) => {
    return (
      <button
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        className={twMerge(
          buttonStyles[variant as keyof typeof buttonStyles][size as 'large' | 'small'],
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-blue',
          className
        )}
        onClick={onClick}
        ref={ref}
      >
        {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        {label}
        {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </button>
    );
  }
);

ButtonComponent.displayName = 'ButtonComponent';

export default ButtonComponent;