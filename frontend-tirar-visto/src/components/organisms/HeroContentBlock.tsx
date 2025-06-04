import ButtonComponent from '@atoms/ButtonComponent';
import EastIcon from '@mui/icons-material/East';

interface HeroContentBlockProps {
  title: string;
  description: string;
  learnMoreButtonLabel: string;
  imageSrc: string;
  imageAlt: string;
  titleSection: string;
  watchText: string;
  playButtonAriaLabel?: string;
  // onLearnMoreClick?: () => void;
}

function HeroContentBlock({ title, description, learnMoreButtonLabel, imageSrc, imageAlt, titleSection, watchText, playButtonAriaLabel }: HeroContentBlockProps) {
  return (
    <div className='flex flex-col gap-2 2xl:gap-10 w-full h-full '>
      <h1 className='text-5xl lg:text-[54px] 2xl:text-6xl font-medium tracking-[-1px] lg:leading-[65px] w-full'>
        {title}
      </h1>
      <hr className='text-light-gray w-full' />
      <div className='flex flex-col lg:flex-row w-full justify-between'>
        <div className='w-full'>
          <p className="text-silver leading-relaxed  mb-10">
            {description}
          </p>
          <ButtonComponent
            label={learnMoreButtonLabel}
            variant="fullDarkBlue"
            size="large"
            className='font-semibold py-2.5 px-5 rounded-[40px] w-[160px] mb-4'
            rightIcon={<EastIcon className='text-white' />}
          />
        </div>

        <div className='min-w-[300px] lg2:min-w-[191px] flex flex-col justify-end gap-y-4 '>
          <img src={imageSrc} alt={imageAlt} />
          <div className='flex items-center justify-between'>
            <div>
              <p className='flex font-semibold text-base'>{titleSection}</p>
              <span className='text-xs text-silver'>{watchText}</span>
            </div>
            <ButtonComponent
              variant="fullDarkBlue"
              size="large"
              aria-label={playButtonAriaLabel}
              className='rounded-[40px] h-[36px] w-[36px] p-0 flex items-center justify-center'
              rightIcon={<EastIcon className='text-white' />}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
export default HeroContentBlock;