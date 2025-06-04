import type { JSX } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

interface NewsletterLinkComponentProps {
  headingId: string;
  title: string;
  href: string;
}

function NewsletterLinkComponent({ headingId, title, href }: NewsletterLinkComponentProps): JSX.Element {
  return (
    <section aria-labelledby={headingId} className="w-full md:w-auto">
      <a href={href} className="group block md:w-[500px] py-3"> 
        <div className="flex justify-between items-center w-full">
          <h3 id={headingId} className="text-[28px] sm:text-[32px] md:text-[40px] text-color-charcoal group-hover:text-charcoal transition-colors duration-300">
            {title}
          </h3>
          <ArrowOutwardIcon
            className='text-charcoal group-hover:text-charcoal 
                       transition-all duration-300 ease-in-out 
                       group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110'
            aria-hidden="true"
            sx={{ fontSize: { xs: 28, sm: 32 } }}
          />
        </div>
        <hr className="border-charcoal group-hover:border-charcoal transition-colors mt-2" />
      </a>
    </section>
  );
}
export default NewsletterLinkComponent;