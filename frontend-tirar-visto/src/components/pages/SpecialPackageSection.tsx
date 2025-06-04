import { useState, useEffect, useCallback } from 'react';
import type { JSX } from 'react';

import BadgeComponent from '@atoms/BadgeComponent';
import SectionHeaderComponent from '@molecules/SectionHeaderComponent';
import CarouselNavControlsComponent from '@molecules/CarouselNavControlsComponent';
import PackageCarouselComponent from '@/components/organisms/PackageCarouselComponent';
import { type PackageCardOrganismProps } from '@organisms/PackageCardComponent';

import PassaportImageSrc from '@assets/images/tirar-visto-passaport.png';
import TakePassaportImageSrc from '@assets/images/tirar-visto-pegando-passaport.png';
import ConsultImageSrc from '@assets/images/tirar-visto-consultoria.png';

interface PackageItem extends PackageCardOrganismProps {
    id: number;
}

const packagesData: PackageItem[] = [
    { id: 1, imageSrc: PassaportImageSrc, tags: ["Basic", "Premium"], title: "Passaporte Essencial", atendimentoValor: "On-line", tempoValor: "45 dias", price: 890.00, },
    { id: 2, imageSrc: TakePassaportImageSrc, tags: ["Basic", "Premium"], title: "Passaporte + Visto", atendimentoValor: "On-line + Presencial", tempoValor: "25 dias", price: 1290.00, },
    { id: 3, imageSrc: ConsultImageSrc, tags: ["Premium", "VIP"], title: "Consultoria Completa", atendimentoValor: "Presencial Completo", tempoValor: "10 dias", price: 1890.00, },
    { id: 4, imageSrc: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1", tags: ["Standard"], title: "Renovação Express", atendimentoValor: "On-line Simplificado", tempoValor: "30 dias", price: 650.00, },
    { id: 5, imageSrc: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1", tags: ["Premium", "Família"], title: "Pacote Família", atendimentoValor: "Consultor Dedicado", tempoValor: "60 dias", price: 2500.00, },
    { id: 6, imageSrc: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1", tags: ["Estudante", "Global"], title: "Visto de Estudante", atendimentoValor: "Suporte Especializado", tempoValor: "40 dias", price: 990.00, }
];
const CARDS_TO_SHOW_DESKTOP: number = 3;
const CARDS_TO_SHOW_MOBILE: number = 1;
const MOBILE_BREAKPOINT: number = 1151;

function SpecialPackageSection(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [cardsPerPage, setCardsPerPage] = useState<number>(CARDS_TO_SHOW_DESKTOP);
    const totalCards: number = packagesData.length;
    const sectionTitleId = "special-packages-title";

    const getCardsPerPage = useCallback((): number => {
        if (typeof window !== 'undefined') {
            return window.innerWidth < MOBILE_BREAKPOINT
                ? CARDS_TO_SHOW_MOBILE
                : CARDS_TO_SHOW_DESKTOP;
        }
        return CARDS_TO_SHOW_DESKTOP;
    }, []);

    useEffect(() => {
        const handleResize = (): void => setCardsPerPage(getCardsPerPage());
        setCardsPerPage(getCardsPerPage());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getCardsPerPage]);

    useEffect(() => {
        if (totalCards > 0) {
             const maxPossibleIndex = Math.max(0, totalCards - cardsPerPage);
             if (currentIndex > maxPossibleIndex) {
                setCurrentIndex(maxPossibleIndex);
             }
        } else if (currentIndex !== 0) {
            setCurrentIndex(0);
        }
    }, [cardsPerPage, totalCards, currentIndex]);

    const handlePrev = (): void => setCurrentIndex(prev => Math.max(0, prev - 1));
    const handleNext = (): void => setCurrentIndex(prev => Math.min(prev + 1, totalCards - cardsPerPage));

    let effectivePrevDisabled: boolean = currentIndex === 0;
    let effectiveNextDisabled: boolean = totalCards === 0 || currentIndex >= totalCards - cardsPerPage;
    if (totalCards <= cardsPerPage && totalCards > 0) {
        effectivePrevDisabled = true;
        effectiveNextDisabled = true;
    } else if (totalCards === 0) {
        effectivePrevDisabled = true;
        effectiveNextDisabled = true;
    }

    return (
        <section
            className='flex flex-col w-full px-4 lg2:px-20 2xl:px-48 3xl:px-60 pt-8 lg2:py-20'
            aria-labelledby={sectionTitleId}
        >
            <BadgeComponent
                label="Pacotes"
                variant="fullYellow"
                size="small"
                className="font-semibold py-2.5 px-5 rounded-[40px] w-fit mb-2 text-dark-blue h-[44px]"
            />
            <SectionHeaderComponent
                title="Confira nossos pacotes"
                titleId={sectionTitleId}
                navControls={
                    totalCards > 0 && totalCards > cardsPerPage ? (
                        <CarouselNavControlsComponent
                            onPrev={handlePrev}
                            onNext={handleNext}
                            isPrevDisabled={effectivePrevDisabled}
                            isNextDisabled={effectiveNextDisabled}
                        />
                    ) : undefined
                }
            />
            <PackageCarouselComponent
                packages={packagesData}
                currentIndex={currentIndex}
                cardsPerPage={cardsPerPage}
                totalCardsInDataset={totalCards}
            />
        </section>
    );
}
export default SpecialPackageSection;