import type { JSX } from 'react';

interface PackageDetailItemComponentProps {
  label: string;
  value: string;
}

function PackageDetailItemComponent({ label, value }: PackageDetailItemComponentProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1 w-1/2">
      <span className="font-medium text-charcoal ">{label}</span>
      <span className="text-silver">{value}</span>
    </div>
  );
}
export default PackageDetailItemComponent;