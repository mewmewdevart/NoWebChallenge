import type { JSX } from 'react';


export interface LinkItem { 
  label: string;
  href: string;
}

interface FooterLinkColumnComponentProps {
  title: string;
  links: LinkItem[];
  linkClassName: string;
}

function FooterLinkColumnComponent({ title, links, linkClassName }: FooterLinkColumnComponentProps): JSX.Element {
  return (
    <div className="w-full md:w-auto"> 
      <h4 className="text-charcoal font-medium mb-3 text-base">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={linkClassName}>
                {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FooterLinkColumnComponent;