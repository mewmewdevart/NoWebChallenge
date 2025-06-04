import React from 'react';
import detailBGImageSrc from '../../assets/images/detailBG2.png';
import ButtonComponent from '../atoms/ButtonComponent';

// Importações das imagens dos destinos
import baliImageSrc from '../../assets/images/tirar-visto-bali-indonesia.png';
import cidadeCaboImageSrc from '../../assets/images/tirar-visto-cidade-do-cabo-africa-do-sul.png';
import mumbaiImageSrc from '../../assets/images/tirar-visto-mumbai-india.png';
import novaYorkImageSrc from '../../assets/images/tirar-visto-nova-york-eua.png';
import parisImageSrc from '../../assets/images/tirar-visto-paris-franca.png';
import santoriniImageSrc from '../../assets/images/tirar-visto-santorini-grecia.png';

// Dados dos destinos com informações para SEO e dimensões
const destinationData = [
  {
    id: 'bali-indonesia',
    src: baliImageSrc,
    alt: 'Paisagem tropical exuberante de Bali, Indonésia, um destino turístico popular.',
    name: 'Bali, Indonésia',
    width: 280, // Usado para md:w-[280px] e atributo width da img
    height: 240, // Usado para atributo height da img
  },
  {
    id: 'nova-york-eua',
    src: novaYorkImageSrc,
    alt: 'Horizonte icônico da cidade de Nova York, EUA, com seus arranha-céus imponentes.',
    name: 'Nova York, EUA',
    width: 280,
    height: 280,
  },
  {
    id: 'santorini-grecia',
    src: santoriniImageSrc,
    alt: 'Casas brancas com cúpulas azuis em Santorini, Grécia, com vista para o mar Egeu.',
    name: 'Santorini, Grécia',
    width: 280,
    height: 240,
  },
  {
    id: 'paris-franca',
    src: parisImageSrc,
    alt: 'A Torre Eiffel em Paris, França, um marco mundialmente famoso.',
    name: 'Paris, França',
    width: 280,
    height: 240,
  },
  {
    id: 'cidade-do-cabo-africa-sul',
    src: cidadeCaboImageSrc,
    alt: 'Vista panorâmica da Cidade do Cabo, África do Sul, com a Montanha da Mesa ao fundo.',
    name: 'Cidade do Cabo, África do Sul',
    width: 280,
    height: 280,
  },
  {
    id: 'mumbai-india',
    src: mumbaiImageSrc,
    alt: 'O Portal da Índia (Gateway of India) em Mumbai, um importante monumento histórico.',
    name: 'Mumbai, Índia',
    width: 280,
    height: 240,
  }
];

const firstRowDestinations = destinationData.slice(0, 3);
const secondRowDestinations = destinationData.slice(3, 6);

function TopDestination() {
  return (
    <section className='flex flex-col bg-white pb-10'>
      <header className="pt-10 lg2:pt-0 h-full lg2:h-[423px] w-full flex flex-col items-center justify-center" style={{
        backgroundImage: `url(${detailBGImageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <ButtonComponent
          label="Top Destinos"
          variant="fullYellow"
          size="small"
          className='font-semibold py-2.5 px-5 rounded-[40px] w-fit text-color-charcoal h-[41px] min-w-[169px] '
        />
        <h4 className="font-medium text-[36px] sm:text-[44px] lg2:text-[56px]">Destinos mais procurados</h4>
        <p className='text-silver text-center'>Confira os destinos mais procurados por nossos clientes nos últimos meses, <br />qual seria o seu novo destino?</p>
        <ButtonComponent
          label="Conheça mais"
          variant="fullDarkBlue"
          size="large"
          className='font-semibold py-2.5 px-5 rounded-[40px] w-[160px] h-[54px] mt-8 mb-8 lg2:mb-0'
        />
      </header>

      <section className="w-full px-4 lg2:px-20 2xl:px-48 3xl:px-60 -mt-4">
        <div className=" mx-auto flex flex-col gap-5">
          {/* Primeira Linha de Destinos */}
          <div className="flex flex-wrap justify-center items-start gap-5">
            {firstRowDestinations.map((destination) => (
              <div 
                key={destination.id} 
                // Aplicando w-full por padrão e md:w-[largura específica] para telas médias e maiores
                // As classes flex, items-center, text-center são mantidas caso você adicione texto dentro deste div no futuro.
                className={`w-full md:w-[${destination.width}px] flex flex-col items-center text-center`}
              >
                <img
                  src={destination.src}
                  alt={destination.alt}
                  width={destination.width} // Para SEO, CLS e aspect ratio com object-cover
                  height={destination.height} // Para SEO, CLS e aspect ratio com object-cover
                  // Adicionado w-full para a imagem preencher o contêiner responsivo
                  className="w-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Segunda Linha de Destinos */}
          <div className="flex flex-wrap justify-center items-start gap-5">
            {secondRowDestinations.map((destination) => (
              <div 
                key={destination.id} 
                className={`w-full md:w-[${destination.width}px] flex flex-col items-center text-center`}
              >
                <img
                  src={destination.src}
                  alt={destination.alt}
                  width={destination.width}
                  height={destination.height}
                  // Adicionado w-full e removido classes de transição que estavam apenas aqui para consistência
                  className="w-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default TopDestination;