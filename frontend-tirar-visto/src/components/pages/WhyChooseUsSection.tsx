import React from 'react';
import BadgeComponent from "@atoms/BadgeComponent";

import turistImageSrc from '@assets/images/turistas.webp';
import AccordionComponent from "@molecules/AccordionComponent";

const accordionItemsData = [
  {
    id: "etapa-inicial",
    title: "Etapa Inicial",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry for initial stage."
  },
  {
    id: "processo-entrevista",
    title: "Processo de Entrevista",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry for interview process."
  },
  {
    id: "entrega-documentos",
    title: "Entrega de Documentos",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry for document delivery."
  }
];

function WhyChooseUsSection() {
  const [expandedPanelId, setExpandedPanelId] = React.useState<string | false>(false);

  const handleAccordionChange = (panelId: string) => (_: React.SyntheticEvent, isExpanding: boolean) => {
    setExpandedPanelId(isExpanding ? panelId : false);
  };

  return (
    <section className='flex flex-col w-full px-4 lg2:px-20 2xl:px-48 3xl:px-60 py-10 lg:py-20'>
      <BadgeComponent
        label="Veja como funciona"
        variant="fullYellow"
        size="small"
        className="font-semibold py-2.5 px-5 rounded-[40px] w-fit mb-2 text-dark-blue h-[44px]"
      />

      <div className="flex flex-col lg2:flex-row lg2:items-center gap-6 lg2:gap-x-12 mb-10 lg2:mb-6  ">
        <h3 className="font-medium text-[36px] sm:text-[44px] 2xl:text-[56px] leading-tight w-full lg2:w-2/5 xl:w-1/3">
          Sua tranquilidade não tem preço!
        </h3>
        <p className="text-silver text-base  w-full lg2:w-3/5 xl:w-2/3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <div className="flex flex-col items-start lg2:flex-row lg2:items-center gap-8 md:gap-12 w-full min-h-[500px]">
        <div className="w-full lg2:w-2/3 flex justify-center lg2:justify-start items-start mt-1 ">
          <img
            src={turistImageSrc}
            alt="Turistas utilizando serviço com tranquilidade"
            className="w-full object-cover object-top h-[444px] rounded-[26px]"
            loading="lazy"
          />
        </div>
        <div className="w-full lg2:w-1/3">
          {accordionItemsData.map((item, index) => (
            <React.Fragment key={item.id}>
              <AccordionComponent
                panelId={item.id}
                title={item.title}
                description={item.description}
                expanded={expandedPanelId === item.id}
                onChange={handleAccordionChange(item.id)}
              />
              {index < accordionItemsData.length - 1 && (
                <hr className='border-light-gray my-3 md:my-4' />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection;