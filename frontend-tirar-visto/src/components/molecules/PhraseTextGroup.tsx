interface PhraseTextGroupProps {
  mainPhrase: string;
  secondaryPhrase: string;
}

function PhraseTextGroup({ mainPhrase, secondaryPhrase }: PhraseTextGroupProps) {
  return (
    <h2 className='font-medium uppercase text-4xl lg:text-[56px]'> 
      <span className="block w-full lg:w-[854px]">
        {mainPhrase}
      </span>
      <span className="block italic text-right">
        {secondaryPhrase}
      </span>
    </h2>
  );
}

export default PhraseTextGroup;