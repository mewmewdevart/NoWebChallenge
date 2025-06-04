import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type NativeDivProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'ref' | 'children'>;

interface BadgeComponentProps extends NativeDivProps {
  label?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant: 'fullDarkBlue' | 'outlineDarkBlue' | 'fullYellow' | 'ghost';
  size?: 'large' | 'small'; 
}

const BadgeComponentStyles = {
  fullDarkBlue: {
    large:  'bg-dark-blue text-white text-sm lg:text-base leading-[24px] rounded-[40px] px-[12px] flex items-center justify-center gap-[6px] h-[48px] w-fit',
    small:  'bg-dark-blue text-white text-[16px] leading-[20px] rounded-[40px] px-[20px] flex items-center justify-center gap-[4px] h-[40px] min-w-[160px] w-fit',
  },
  outlineDarkBlue: {
    large:  'bg-white outline outline-2 outline-dark-blue text-dark-blue text-sm lg:text-base leading-[24px] rounded-[40px] px-[12px] flex items-center justify-center gap-[6px] h-[48px] w-fit',
    small:  'bg-white outline outline-2 outline-dark-blue text-dark-blue text-[16px] leading-[20px] rounded-[40px] px-[20px] flex items-center justify-center gap-[4px] h-[40px] min-w-[160px] w-fit',
  },
  fullYellow: {
    large:  'bg-yellow text-color-charcoal text-sm lg:text-base leading-[24px] rounded-[40px] px-[12px] flex items-center justify-center gap-[6px] h-[48px] w-fit',
    small:  'bg-yellow text-color-charcoal text-[16px] leading-[20px] rounded-[40px] px-[20px] flex items-center justify-center gap-[4px] h-[40px] min-w-[160px] w-fit',
  },
  ghost: {
    large:  'bg-transparent text-neutral-500 text-sm lg:text-base leading-[24px] rounded-[40px] px-[12px] flex items-center justify-center gap-[6px] h-[48px] w-fit',
    small:  'bg-transparent text-neutral-500 text-[16px] leading-[20px] rounded-[40px] px-[20px] flex items-center justify-center gap-[4px] h-[40px] min-w-[160px] w-fit',
  },
};

const BadgeComponent = forwardRef<HTMLDivElement, BadgeComponentProps>(
  (
    {
      label,
      className = '',
      leftIcon,
      rightIcon,
      variant = 'fullYellow', 
      size = 'small',       
      ...rest 
    },
    ref
  ) => {
    const styleVariant = variant as keyof typeof BadgeComponentStyles;
    const styleSize = size as 'large' | 'small';

    return (
      <div
        className={twMerge(
          BadgeComponentStyles[styleVariant][styleSize],
          className
        )}
        ref={ref}
        {...rest}
      >
        {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        {label}
        {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </div>
    );
  }
);

BadgeComponent.displayName = 'BadgeComponent';

export default BadgeComponent;