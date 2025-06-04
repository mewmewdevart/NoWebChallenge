import type { JSX } from 'react';
import ButtonComponent from '@atoms/ButtonComponent';

interface SocialLinkButtonComponentProps {
    label: string;
    href: string;
    className: string;
    ariaLabel?: string;
}

function SocialLinkButtonComponent({ label, href, className, ariaLabel }: SocialLinkButtonComponentProps): JSX.Element {
    return (
        <a href={href} aria-label={ariaLabel || `Siga-nos no ${label}`} className="inline-block">
            <ButtonComponent
                label={label}
                variant="outlineDarkBlue"
                size="small"
                className={`${className} text-charcoal outline-charcoal text-sm lg:text-base hover:border-charcoal hover:bg-dark-blue hover:text-white transition-colors`}
                tabIndex={-1}
            />
        </a>
    );
}
export default SocialLinkButtonComponent;