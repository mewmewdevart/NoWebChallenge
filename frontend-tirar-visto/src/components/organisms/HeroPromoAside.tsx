import BadgeComponent from '@atoms/BadgeComponent';

interface HeroPromoAsideProps {
  backgroundImageSrc: string;
  badgeLabel: string;
  title: string;
  description: string;
  ariaTitleId: string; 
}

function HeroPromoAside({ backgroundImageSrc, badgeLabel, title, description, ariaTitleId }: HeroPromoAsideProps) {
  return (
    <aside
      className="w-full hidden lg2:flex flex-col items-start text-white justify-between rounded-[24px] max-w-[762px]"
      style={{
        backgroundImage: `url(${backgroundImageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      aria-labelledby={ariaTitleId}
    >
      <div className='flex items-end justify-end w-full px-3.5 pt-3.5 '>
        <BadgeComponent
          label={badgeLabel}
          variant="fullYellow"
          size="small"
          className="font-semibold py-2.5 px-5 rounded-[40px] w-fit mb-4 text-dark-blue h-[44px]"
        />
      </div>
      <div className='px-10 pb-10 flex flex-col gap-y-2 w-[540px] 2xl:w-[622px]'>
        <h2 id={ariaTitleId} className='text-4xl 2xl:text-[44px] font-semibold tracking-[-2px] leading-[60px]'>
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </aside>
  );
}
export default HeroPromoAside;