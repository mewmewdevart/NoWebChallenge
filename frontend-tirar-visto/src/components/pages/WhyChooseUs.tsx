import ButtonComponent from "../atoms/ButtonComponent";
import turistImageSrc from '../../assets/images/turistas.svg';
import AccordionComponent from "../molecules/AccordionComponent";

import React from 'react'; 

const accordionItemsData = [
  {
    title: "Etapa Inicial",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry for initial stage." // Descrição exemplo
  },
  {
    title: "Processo de Entrevista",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry for interview process." // Descrição exemplo
  },
  {
    title: "Entrega de Documentos",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry for document delivery." // Descrição exemplo
  }
];

function WhyChooseUs() {
  return (
    <section className='flex flex-col w-full px-4 sm:px-8 md:px-12 lg2:px-20 2xl:px-48 3xl:px-60 py-16 md:py-24'>
      <ButtonComponent
        label="Veja como funciona"
        variant="fullYellow"
        size="small"
        className='font-semibold py-2.5 px-5 rounded-[40px] w-fit mb-8 text-dark-blue h-[44px] min-w-[169px] self-start md:self-auto'
      />

      <div className="flex flex-col lg2:flex-row lg2:items-start gap-6 lg2:gap-x-12 mb-12 md:mb-16">
        <h3 className="font-medium text-[36px] sm:text-[44px] lg2:text-[56px] leading-tight w-full lg2:w-2/5 xl:w-1/3">
          Sua tranquilidade não tem preço!
        </h3>
        <p className="text-silver text-base sm:text-lg w-full lg2:w-3/5 xl:w-2/3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>

      <div className="flex flex-col lg2:flex-row gap-8 md:gap-12 w-full min-h-[444px]">
        <div className="w-full lg2:w-1/2 flex justify-center lg2:justify-start items-start mt-1">
          <img
            src={turistImageSrc}
            alt="Turistas utilizando serviço com tranquilidade"
            className="w-full h-auto object-cover" 
          />
        </div>
        <div className="w-full lg2:w-1/2">
          {accordionItemsData.map((item, index) => (
            <React.Fragment key={item.title}>
              <AccordionComponent title={item.title} description={item.description} />
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

export default WhyChooseUs;