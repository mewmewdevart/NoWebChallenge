import PhraseTextGroup from '@molecules/PhraseTextGroup';
import DecorativeIconHolder from '@atoms/DecorativeIconHolder';

import PhoneInTalkSrcIcon from '@assets/icons/call-calling.svg';
import ClockSrcIcon from '@assets/icons/clock.svg';

const CONTENT = {
  mainPhrase: "Consultoria completa para tirar seu visto",
  secondaryPhrase: "Você está em boas mãos!",
  phoneIcon: {
    src: PhoneInTalkSrcIcon,
    alt: "Icone de telefone",
    wrapperClass: "hidden lg2:block absolute lg2:right-60 2xl:right-[35rem] top-14 rotate-[20deg]"
  },
  clockIcon: {
    src: ClockSrcIcon,
    alt: "Icone de relógio",
    wrapperClass: "hidden lg2:block absolute lg2:left-60 2xl:left-[35rem] bottom-14 rotate-[-20deg]"
  }
};

function WhyChooseUsPhrase() {
  return (
    <section className='flex flex-col justify-center w-full min-h-[344px] bg-gray px-4 lg2:px-20 2xl:px-48 3xl:px-60 py-4 relative'>
      <PhraseTextGroup
        mainPhrase={CONTENT.mainPhrase}
        secondaryPhrase={CONTENT.secondaryPhrase}
      />
      <DecorativeIconHolder
        iconSrc={CONTENT.phoneIcon.src}
        iconAlt={CONTENT.phoneIcon.alt}
        wrapperClass={CONTENT.phoneIcon.wrapperClass}
      />
      <DecorativeIconHolder
        iconSrc={CONTENT.clockIcon.src}
        iconAlt={CONTENT.clockIcon.alt}
        wrapperClass={CONTENT.clockIcon.wrapperClass}
      />
    </section>
  );
}

export default WhyChooseUsPhrase;