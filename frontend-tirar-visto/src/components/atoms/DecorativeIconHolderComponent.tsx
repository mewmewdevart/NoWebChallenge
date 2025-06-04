import IconComponent from './IconComponent';

interface DecorativeIconHolderComponentProps {
  iconSrc: string;
  iconAlt: string;
  wrapperClass?: string;
}

function DecorativeIconHolderComponent({ iconSrc, iconAlt, wrapperClass }: DecorativeIconHolderComponentProps) {
  return (
    <span className={`p-2 w-fit rounded-[10px] bg-white ${wrapperClass || ''}`}>
      <IconComponent src={iconSrc} alt={iconAlt} />
    </span>
  );
}
export default DecorativeIconHolderComponent;