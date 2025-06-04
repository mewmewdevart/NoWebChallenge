interface PhraseTextGroupComponentProps {
  mainPhrase: string;
  secondaryPhrase: string;
}

function PhraseTextGroupComponent({ mainPhrase, secondaryPhrase }: PhraseTextGroupComponentProps) {
  return (
    <h2 className='font-medium text-[36px] sm:text-[44px] 2xl:text-[56px] leading-tight uppercase'> 
      <span className="block w-full lg:w-[854px]">
        {mainPhrase}
      </span>
      <span className="block italic text-right">
        {secondaryPhrase}
      </span>
    </h2>
  );
}

export default PhraseTextGroupComponent;