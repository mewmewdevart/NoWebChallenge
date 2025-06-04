import type { JSX, ReactNode } from 'react';

interface SectionHeaderMoleculeProps {
  title: string;
  titleId?: string;
  navControls?: ReactNode;
}

function SectionHeaderMolecule({ title, titleId, navControls }: SectionHeaderMoleculeProps): JSX.Element {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <h5 id={titleId} className="font-medium text-center sm:text-left text-[32px] sm:text-[44px] lg2:text-[56px] text-color-charcoal mb-6 sm:mb-0">
        {title}
      </h5>
      {navControls}
    </div>
  );
}
export default SectionHeaderMolecule;