import { useState, useEffect } from 'react';
import type { JSX } from 'react';
import ButtonComponent from "@atoms/ButtonComponent"; 
import EastIcon from '@mui/icons-material/East';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import PassaportImageSrc from '@assets/images/tirar-visto-passaport.png';
import TakePassaportImageSrc from '@assets/images/tirar-visto-pegando-passaport.png';
import ConsultImageSrc from '@assets/images/tirar-visto-consultoria.png';

interface PackageItem {
    id: number;
    imageSrc: string; 
    tags: string[];
    title: string;
    atendimentoValor: string;
    tempoValor: string;
    price: number;
}

interface PackageCardProps {
    imageSrc: string;
    tags: string[];
    title: string;
    atendimentoValor: string;
    tempoValor: string;
    price: number;
    currency?: string; 
}


const packagesData: PackageItem[] = [
    {
        id: 1,
        imageSrc: PassaportImageSrc,
        tags: ["Basic", "Premium"],
        title: "Passaporte Essencial",
        atendimentoValor: "On-line",
        tempoValor: "45 dias",
        price: 890.00,
    },
    {
        id: 2,
        imageSrc: TakePassaportImageSrc, 
        tags: ["Basic", "Premium"],
        title: "Passaporte + Visto Urgente",
        atendimentoValor: "On-line + Presencial",
        tempoValor: "25 dias",
        price: 1290.00,
    },
    {
        id: 3,
        imageSrc: ConsultImageSrc,
        tags: ["Premium", "VIP"],
        title: "Consultoria Completa VIP",
        atendimentoValor: "Presencial Completo",
        tempoValor: "10 dias",
        price: 1890.00,
    },
    {
        id: 4,
        imageSrc: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
        tags: ["Standard"],
        title: "Renovação Express",
        atendimentoValor: "On-line Simplificado",
        tempoValor: "30 dias",
        price: 650.00,
    },
    {
        id: 5,
        imageSrc: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
        tags: ["Premium", "Família"],
        title: "Pacote Família Internacional",
        atendimentoValor: "Consultor Dedicado",
        tempoValor: "60 dias",
        price: 2500.00,
    },
    {
        id: 6,
        imageSrc: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
        tags: ["Estudante", "Global"],
        title: "Visto de Estudante Global",
        atendimentoValor: "Suporte Especializado",
        tempoValor: "40 dias",
        price: 990.00,
    }
];

function PackageCard({
    imageSrc,
    tags,
    title,
    atendimentoValor,
    tempoValor,
    price,
    currency = "R$",
}: PackageCardProps): JSX.Element {
    return (
        <div className="flex flex-col bg-white outline outline-gray-200 rounded-[24px] p-4 h-full">
            <img
                src={imageSrc}
                alt={title}
                className="rounded-[18px] w-full h-[200px] sm:h-[240px] md:h-[280px] lg2:h-[300px] object-cover mb-4"
            />
            <div className="flex flex-row flex-wrap mt-4 mb-3 gap-2">
                {tags.map(tag => (
                    <span
                        key={tag}
                        className="px-3 sm:px-4 py-1.5 border border-dark-blue text-dark-blue rounded-[40px] text-center text-xs sm:text-sm font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <h6 className="font-semibold text-lg sm:text-xl md:text-2xl lg2:text-[28px] mb-3 leading-tight text-color-charcoal">
                {title}
            </h6>
            <div className="flex justify-between mb-3 text-sm sm:text-base">
                <div className="flex flex-col gap-1 w-1/2">
                    <span className="font-medium text-gray-700">Atendimento</span>
                    <span className="text-silver">{atendimentoValor}</span>
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                    <span className="font-medium text-gray-700">Tempo</span>
                    <span className="text-silver">{tempoValor}</span>
                </div>
            </div>
            <hr className="border-gray-200 mb-4" />
            <div className="flex items-center justify-between mt-auto">
                <div>
                    <span className="text-silver text-xs sm:text-sm">A partir de</span>
                    <h6 className="text-xl sm:text-2xl md:text-3xl lg2:text-[32px] font-semibold text-color-charcoal">
                        {currency} {price.toFixed(2).replace('.', ',')}
                    </h6>
                </div>
                <ButtonComponent 
                    label="Contratar"
                    variant="fullDarkBlue"
                    size="small"
                    className='font-semibold py-2.5 px-4 sm:px-5 rounded-[40px] text-xs sm:text-sm h-auto min-w-[100px] sm:min-w-[115px]'
                />
            </div>
        </div>
    );
}

const CARDS_TO_SHOW_DESKTOP: number = 3;
const CARDS_TO_SHOW_MOBILE: number = 1;
const MOBILE_BREAKPOINT: number = 1151;


function SpecialPackage(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [cardsPerPage, setCardsPerPage] = useState<number>(CARDS_TO_SHOW_DESKTOP);
    const totalCards: number = packagesData.length;

    useEffect(() => {
        const getCardsPerPage = (): number => {
            if (typeof window !== 'undefined') {
                return window.innerWidth < MOBILE_BREAKPOINT
                    ? CARDS_TO_SHOW_MOBILE
                    : CARDS_TO_SHOW_DESKTOP;
            }
            return CARDS_TO_SHOW_DESKTOP; 
        };

        const handleResize = (): void => {
            setCardsPerPage(getCardsPerPage());
        };

        setCardsPerPage(getCardsPerPage());

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);


    const handlePrev = (): void => {
        setCurrentIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const handleNext = (): void => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, totalCards - cardsPerPage));
    };
    
    const isPrevDisabled: boolean = currentIndex === 0;
    const isNextDisabled: boolean = totalCards === 0 || currentIndex >= totalCards - cardsPerPage;

    let effectivePrevDisabled: boolean = isPrevDisabled;
    let effectiveNextDisabled: boolean = isNextDisabled;

    if (totalCards <= cardsPerPage && totalCards > 0) {
        effectivePrevDisabled = true;
        effectiveNextDisabled = true;
    } else if (totalCards === 0) { 
        effectivePrevDisabled = true;
        effectiveNextDisabled = true;
    }
    
    return (
        <section className='flex flex-col w-full px-4 sm:px-8 md:px-12 lg2:px-20 2xl:px-48 3xl:px-60 py-16 md:py-24 '>
            <ButtonComponent
                label="Pacotes"
                variant="fullYellow" 
                size="small"
                className='font-semibold py-2.5 px-5 rounded-[40px] w-fit text-color-charcoal h-[41px] min-w-[169px] mb-8 sm:mb-12'
            />

            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                <h5 className="font-medium text-center sm:text-left text-[32px] sm:text-[44px] lg2:text-[56px] text-color-charcoal mb-6 sm:mb-0">
                    Confira nossos pacotes
                </h5>
                <div className="flex gap-3 sm:gap-4 items-center">
                    <ButtonComponent
                        onClick={handlePrev}
                        disabled={effectivePrevDisabled}
                        variant={effectivePrevDisabled ? "ghost" : "outlineDarkBlue"}
                        size="large"
                        className={`rounded-[40px] h-[48px] w-[48px] sm:h-[54px] sm:w-[54px] p-0 flex items-center justify-center transition-all duration-300 ease-in-out ${effectivePrevDisabled ? 'opacity-70 cursor-not-allowed' : 'hover:bg-dark-blue/10'}`}
                        aria-label="Pacote anterior"
                        rightIcon={<ArrowBackIcon className={`w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] ${effectivePrevDisabled ? 'text-gray-400' : 'text-dark-blue'}`} />}
                    />
                    <ButtonComponent
                        onClick={handleNext}
                        disabled={effectiveNextDisabled}
                        variant={effectiveNextDisabled ? "ghost" : "fullDarkBlue"}
                        size="large"
                        className={`rounded-[40px] h-[48px] w-[48px] sm:h-[54px] sm:w-[54px] p-0 flex items-center justify-center transition-all duration-300 ease-in-out ${effectiveNextDisabled ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                        aria-label="Próximo pacote"
                        rightIcon={<EastIcon className={`w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] ${effectiveNextDisabled ? 'text-gray-400' : 'text-white'}`} />}
                    />
                </div>
            </div>

            {totalCards > 0 ? (
                <div className="relative w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            width: totalCards > 0 ? `${(totalCards / cardsPerPage) * 100}%` : '100%',
                            transform: `translateX(-${(currentIndex * 100) / totalCards}%)`,
                        }}
                    >
                        {packagesData.map((pkg: PackageItem) => ( 
                            <div
                                key={pkg.id}
                                className="p-2"
                                style={{
                                    flex: totalCards > 0 ? `0 0 ${(100 / totalCards)}%` : '0 0 100%',
                                }}
                            >
                                <PackageCard {...pkg} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center py-10 text-gray-500">
                    Nenhum pacote disponível no momento.
                </div>
            )}
        </section>
    );
}

export default SpecialPackage;