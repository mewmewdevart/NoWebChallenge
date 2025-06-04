import type { JSX } from 'react';

interface PackageDetailItemMoleculeProps {
  label: string;
  value: string;
}

function PackageDetailItemMolecule({ label, value }: PackageDetailItemMoleculeProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1 w-1/2">
      <span className="font-medium text-charcoal ">{label}</span>
      <span className="text-silver">{value}</span>
    </div>
  );
}
export default PackageDetailItemMolecule;