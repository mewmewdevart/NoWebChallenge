import type { JSX } from 'react';

import ButtonComponent from '@atoms/ButtonComponent';
import TagListComponent from '@molecules/TagListComponent';
import PackageDetailItemComponent from '@molecules/PackageDetailItemComponent';

export interface PackageCardOrganismProps {
    id?: number; // For key and ARIA
    imageSrc: string;
    tags: string[];
    title: string;
    atendimentoValor: string;
    tempoValor: string;
    price: number;
    currency?: string;
}

function PackageCardComponent({
    id,
    imageSrc,
    tags,
    title,
    atendimentoValor,
    tempoValor,
    price,
    currency = "R$",
}: PackageCardOrganismProps): JSX.Element {
    const titleId = id ? `package-title-${id}` : undefined;

    return (
        <article
            className="flex flex-col bg-white outline outline-light-gray rounded-[24px] p-4 h-full"
            aria-labelledby={titleId}
        >
            <img src={imageSrc} alt={title} loading="lazy" className="rounded-[18px] w-full h-[200px] sm:h-[240px] md:h-[280px] lg2:h-[300px] object-cover mb-4" />
            <TagListComponent tags={tags} />
            <h6 id={titleId} className="font-semibold text-lg sm:text-xl md:text-2xl lg2:text-[28px] mb-3 leading-tight text-color-charcoal">
                {title}
            </h6>
            <div className="flex justify-between mb-3 text-sm sm:text-base">
                <PackageDetailItemComponent label="Atendimento" value={atendimentoValor} />
                <PackageDetailItemComponent label="Tempo" value={tempoValor} />
            </div>
            <hr className="border-light-gray mb-4" />
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
                    className='font-semibold py-2.5 px-4 sm:px-5 rounded-[40px] text-xs sm:text-sm min-w-[100px] sm:min-w-[115px] h-[54px]'
                    aria-label={`Contratar pacote: ${title}`}
                />
            </div>
        </article>
    );
}
export default PackageCardComponent;