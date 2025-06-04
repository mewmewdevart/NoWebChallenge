
import NavbarComponent from '@molecules/NavbarComponent'; 
import StatItemComponent from '@/components/molecules/StatItemComponent';

import HeroContentBlock from '@/components/organisms/HeroContentBlockComponent';
import HeroPromoAsideComponent from '@/components/organisms/HeroPromoAsideComponent';

import logoTirarVistoSrc from '@assets/LogoTirarVisto.svg';
import disneyFerrisWheelImageSrc from '@assets/images/roda-gigante-disney.webp';
import interviewPlaceholderImageSrc from '@assets/images/video-funcionaria-tirar-visto.webp';

interface NavigationMenuItem {
    label: string;
    href: string;
    isCurrent?: boolean;
}

interface HeroSectionProps {
    menuItems: NavigationMenuItem[];
}

const HERO_CONTENT = {
    title: "Tire seu Visto conosco e não tenha nenhuma surpresa negativa!",
    description: "Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido. Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem.",
    learnMoreButtonLabel: "Saiba mais",
    makeVisaButtonLabel: "Tirar meu visto agora!",
    videoSection: {
        personName: "Bruna",
        title: "Conheça a Bruna",
        watchVideoText: "Ver vídeo",
        playButtonAriaLabel: "Ver vídeo sobre o processo de visto com a Bruna",
        imageAlt: "Pré-visualização do vídeo com funcionária da TirarVisto explicando o processo",
    },
    aside: {
        title: "Realize o seu sonho com a ajuda da Tirar Visto!",
        description: "Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.",
    }
};

const STATS_DATA = [
    { value: "509", label: "Vistos tirados" },
    { value: "602", label: "Passaportes Tirados" },
    { value: "634", label: "Famílias Felizes" },
];

function HeroSection({ menuItems }: HeroSectionProps) {
    const asideTitleId = "hero-aside-title"; 

    return (
        <section className='flex justify-center gap-x-4 2xl:gap-0 flex-row lg:min-h-screen w-full px-4 lg2:px-20 2xl:px-48 3xl:px-60 py-4'>
            <div className='w-full flex flex-col '>
                <NavbarComponent
                    logoSrc={logoTirarVistoSrc}
                    logoAlt="Logo da empresa TirarVisto"
                    menuItems={menuItems}
                />
                <article className='flex-grow w-full lg2:px-0 2xl:pr-4 flex flex-col gap-y-4 2xl:gap-y-10 '>
                    <div className='flex w-full flex-col md:flex-row '>
                        <HeroContentBlock
                            title={HERO_CONTENT.title}
                            description={HERO_CONTENT.description}
                            learnMoreButtonLabel={HERO_CONTENT.learnMoreButtonLabel}
                            imageSrc={interviewPlaceholderImageSrc}
                            imageAlt={HERO_CONTENT.videoSection.imageAlt}
                            titleSection={HERO_CONTENT.videoSection.title}
                            watchText={HERO_CONTENT.videoSection.watchVideoText}
                            playButtonAriaLabel={HERO_CONTENT.videoSection.playButtonAriaLabel}
                        />
                    </div>

                    <div className='flex flex-row w-full mt-0 2xl:mt-10'>
                        {STATS_DATA.map((stat) => ( 
                            <StatItemComponent key={stat.label} value={stat.value} label={stat.label} />
                        ))}
                    </div>
                </article>
            </div>

            <HeroPromoAsideComponent
                backgroundImageSrc={disneyFerrisWheelImageSrc}
                badgeLabel={HERO_CONTENT.makeVisaButtonLabel}
                title={HERO_CONTENT.aside.title}
                description={HERO_CONTENT.aside.description}
                ariaTitleId={asideTitleId}
            />
        </section>
    );
}

export default HeroSection;