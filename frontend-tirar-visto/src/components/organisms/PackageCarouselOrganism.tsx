import type { JSX } from 'react';
import PackageCardOrganism, { type PackageCardOrganismProps } from './PackageCardOrganism'; 

interface PackageItemDataForCarousel extends PackageCardOrganismProps {
    id: number;
}

interface PackageCarouselOrganismProps {
  packages: PackageItemDataForCarousel[];
  currentIndex: number;
  cardsPerPage: number;
  totalCardsInDataset: number;
}

function PackageCarouselOrganism({
  packages,
  currentIndex,
  cardsPerPage,
  totalCardsInDataset,
}: PackageCarouselOrganismProps): JSX.Element {
  const totalCardsToDisplay = packages.length;

  if (totalCardsToDisplay === 0) {
    return (
      <div className="text-center py-10 text-gray-500"> 
        Nenhum pacote disponível no momento.
      </div>
    );
  }

  const trackWidth = totalCardsInDataset > 0 ? `${(totalCardsInDataset / cardsPerPage) * 100}%` : '100%';
  const transformX = totalCardsInDataset > 0 ? `translateX(-${(currentIndex * 100) / totalCardsInDataset}%)` : 'translateX(0%)';

  return (
    <div className="relative w-full overflow-hidden" role="region" aria-label="Carrossel de pacotes">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          width: trackWidth,
          transform: transformX,
        }}
      >
        {packages.map((pkg, index) => (
          <div
            key={pkg.id}
            className="p-2"
            style={{
              flex: totalCardsInDataset > 0 ? `0 0 ${(100 / totalCardsInDataset)}%` : '0 0 100%',
            }}
            role="group"
            aria-label={`Pacote ${index + 1} de ${totalCardsToDisplay}`}
          >
            <PackageCardOrganism {...pkg} id={pkg.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default PackageCarouselOrganism;