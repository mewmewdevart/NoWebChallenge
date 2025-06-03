import logoTirarVistoSrc from '../../assets/LogoTirarVisto.svg';
import disneyFerrisWheelImageSrc from '../../assets/images/roda-gigante-disney.png';
import interviewPlaceholderImageSrc from '../../assets/images/video-funcionaria-tirar-visto.png';
import ButtonComponent from '../atoms/ButtonComponent';
import NavbarComponent from '../molecules/NavbarComponent';
import EastIcon from '@mui/icons-material/East';

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
    return (
        <section className='flex justify-center gap-x-4 2xl:gap-0 flex-row min-h-screen w-full px-4 lg2:px-20 2xl:px-48 3xl:px-60 py-4'>
            <div className='w-full flex flex-col'>
                <NavbarComponent
                    logoSrc={logoTirarVistoSrc}
                    logoAlt="Logo da empresa TirarVisto"
                    menuItems={menuItems}
                />
                <article className='flex-grow w-full lg2:w-[580px] 2xl:w-full lg2:px-0 2xl:pr-4 flex flex-col gap-y-4 lg:gap-y-10 '>
                    <h1 className='text-5xl lg:text-[54px] 2xl:text-7xl font-medium tracking-[-1px] lg:leading-[65px]'>
                        {HERO_CONTENT.title}
                    </h1>
                    <hr className='text-light-gray' />

                    <div className='flex w-full flex-col md:flex-row gap-2 2xl:gap-4'>
                        <div className='flex flex-col gap-10'>
                            <p className="text-silver w-full leading-relaxed hyphens-auto">
                                {HERO_CONTENT.description}
                            </p>
                            <ButtonComponent
                                label={HERO_CONTENT.learnMoreButtonLabel}
                                variant="fullDarkBlue"
                                size="large"
                                className='font-semibold py-2.5 px-5 rounded-[40px] w-[160px] mb-4'
                                rightIcon={<EastIcon className='text-white' />}
                            />
                        </div>

                        <div className='min-w-[300px] lg2:min-w-[191px] flex flex-col justify-end gap-y-4'>
                            <img src={interviewPlaceholderImageSrc} alt={HERO_CONTENT.videoSection.imageAlt} />
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='flex font-semibold text-base'>{HERO_CONTENT.videoSection.title}</p>
                                    <span className='text-xs text-silver'>{HERO_CONTENT.videoSection.watchVideoText}</span>
                                </div>
                                <ButtonComponent
                                    variant="fullDarkBlue"
                                    size="large"
                                    className='rounded-[40px] h-[36px] w-[36px] p-0 flex items-center justify-center'
                                    rightIcon={<EastIcon className='text-white' />}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row w-full mt-0 2xl:mt-10'>
                        {STATS_DATA.map((stat, index) => (
                            <div key={index} className='w-full'>
                                <h2 className='text-[44px]'>{stat.value}</h2>
                                <span className='text-silver text-base'>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </article>
            </div>

            <aside
                className="w-full hidden lg2:flex flex-col items-start text-white justify-between rounded-[24px] max-w-[762px]"
                style={{
                    backgroundImage: `url(${disneyFerrisWheelImageSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                aria-labelledby="aside-title"
            >
                <div className='flex items-end justify-end w-full px-3.5 pt-3.5 '>
                    <ButtonComponent
                    label={HERO_CONTENT.makeVisaButtonLabel}
                    variant="fullYellow"
                    size="small"
                    className='font-semibold py-2.5 px-5 rounded-[40px] w-fit mb-4 text-dark-blue h-[44px]'
                />
                </div>
                <div className='px-10 pb-10 flex flex-col gap-y-2 w-[540px] 2xl:w-[622px]'>
                    <h2 id="aside-title" className='text-4xl 2xl:text-[44px] font-semibold tracking-[-2px] leading-[60px]'>
                        {HERO_CONTENT.aside.title}
                    </h2>
                    <p>{HERO_CONTENT.aside.description}</p>
                </div>
            </aside>
        </section>
    );
}

export default HeroSection;