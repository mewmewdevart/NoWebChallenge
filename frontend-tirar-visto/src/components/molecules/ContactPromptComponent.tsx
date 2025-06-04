import type { JSX } from 'react';
import ButtonComponent from '@atoms/ButtonComponent'; 

interface ContactPromptComponentProps {
  headingId: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

function ContactPromptComponent({
  headingId,
  title,
  description,
  buttonLabel,
  onButtonClick,
}: ContactPromptComponentProps): JSX.Element {
  return (
    <section aria-labelledby={headingId} className="w-full md:w-[456px]">
      <h2 id={headingId} className="font-medium text-[36px] sm:text-[40px] md:text-[56px] mb-4 text-color-charcoal">
        {title}
      </h2>
      <p className="text-silver text-base md:text-lg mb-8 md:mb-10">
        {description}
      </p>
      <ButtonComponent
        label={buttonLabel}
        variant="fullDarkBlue"
        size="large"
        className='font-semibold py-2.5 px-5 rounded-[40px]'
        onClick={onButtonClick}
      />
    </section>
  );
}
export default ContactPromptComponent;