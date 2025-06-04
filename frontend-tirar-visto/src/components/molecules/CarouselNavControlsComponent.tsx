import type { JSX } from 'react';
import ButtonComponent from '@atoms/ButtonComponent';
import EastIcon from '@mui/icons-material/East';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface CarouselNavControlsComponentProps {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  prevAriaLabel?: string;
  nextAriaLabel?: string;
}

function CarouselNavControlsComponent({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
  prevAriaLabel = "Pacote anterior",
  nextAriaLabel = "Próximo pacote", 
}: CarouselNavControlsComponentProps): JSX.Element {
  return (
    <div className="flex gap-3 sm:gap-4 items-center">
      <ButtonComponent
        onClick={onPrev}
        disabled={isPrevDisabled}
        variant={isPrevDisabled ? "ghost" : "outlineDarkBlue"}
        size="large"
        className={`rounded-[40px] h-[48px] w-[48px] sm:h-[54px] sm:w-[54px] p-0 flex items-center justify-center transition-all duration-300 ease-in-out ${isPrevDisabled ? 'opacity-70 cursor-not-allowed' : 'hover:bg-dark-blue/10'}`}
        ariaLabel={prevAriaLabel}
        rightIcon={<ArrowBackIcon className={`w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] ${isPrevDisabled ? 'text-silver' : 'text-dark-blue'}`} />}
      />
      <ButtonComponent
        onClick={onNext}
        disabled={isNextDisabled}
        variant={isNextDisabled ? "ghost" : "fullDarkBlue"}
        size="large"
        className={`rounded-[40px] h-[48px] w-[48px] sm:h-[54px] sm:w-[54px] p-0 flex items-center justify-center transition-all duration-300 ease-in-out ${isNextDisabled ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
        ariaLabel={nextAriaLabel}
        rightIcon={<EastIcon className={`w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] ${isNextDisabled ? 'text-silver' : 'text-white'}`} />}
      />
    </div>
  );
}
export default CarouselNavControlsComponent;