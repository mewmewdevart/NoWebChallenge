import IconComponent from './IconComponent';

interface DecorativeIconHolderProps {
  iconSrc: string;
  iconAlt: string;
  wrapperClass?: string;
}

function DecorativeIconHolder({ iconSrc, iconAlt, wrapperClass }: DecorativeIconHolderProps) {
  return (
    <span className={`p-2 w-fit rounded-[10px] bg-white ${wrapperClass || ''}`}>
      <IconComponent src={iconSrc} alt={iconAlt} />
    </span>
  );
}
export default DecorativeIconHolder;