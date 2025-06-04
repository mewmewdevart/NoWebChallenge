import ButtonComponent from '@atoms/ButtonComponent';
import BadgeComponent from '@atoms/BadgeComponent';

import detailBGImageSrc from '@assets/images/detailBG.png';
import baliImageSrc from '@assets/images/tirar-visto-bali-indonesia.webp';
import cidadeCaboImageSrc from '@assets/images/tirar-visto-cidade-do-cabo-africa-do-sul.webp';
import mumbaiImageSrc from '@assets/images/tirar-visto-mumbai-india.webp';
import novaYorkImageSrc from '@assets/images/tirar-visto-nova-york-eua.webp';
import parisImageSrc from '@assets/images/tirar-visto-paris-franca.webp';
import santoriniImageSrc from '@assets/images/tirar-visto-santorini-grecia.webp';

const destinationData = [
  {
    id: 'bali-indonesia',
    src: baliImageSrc,
    alt: 'Paisagem tropical exuberante de Bali, Indonésia, um destino turístico popular.',
    name: 'Bali, Indonésia',
    width: 280,
    height: 240,
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

function TopDestinationSection() {
  return (
    <section className='flex flex-col bg-white pb-10 lg:pb-20'>
      <header className="h-[423px] w-full flex flex-col items-center justify-center" style={{
        backgroundImage: `url(${detailBGImageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <BadgeComponent
          label="Top Destinos"
          variant="fullYellow"
          size="small"
          className="font-semibold py-2.5 px-5 rounded-[40px] w-fit mb-2 text-dark-blue h-[44px]"
        />
        <h4 className="font-medium text-[36px] sm:text-[44px] 2xl:text-[56px] leading-tight mb-2">Destinos mais procurados</h4>
        <p className='text-silver text-center'>Confira os destinos mais procurados por nossos clientes nos últimos meses, <br/>qual seria o seu novo destino?</p>
        <ButtonComponent
          label="Conheça mais"
          variant="fullDarkBlue"
          size="large"
          className='font-semibold py-2.5 px-5 rounded-[40px] w-[160px] h-[54px] mt-8'
        />
      </header>

      <section className="w-full -mt-4 px-4 lg2:px-20 2xl:px-48 3xl:px-60"> 
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-start gap-6 lg:gap-8 mb-6 lg:mb-8">
            {firstRowDestinations.map((destination) => (
              <div key={destination.id} className="flex flex-col items-center text-center" style={{ width: `${destination.width}px` }}>
                <img
                  src={destination.src}
                  alt={destination.alt} 
                  width={destination.width} 
                  height={destination.height}
                  className="object-cover"
                  loading="lazy" 
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-start gap-6 lg:gap-8">
            {secondRowDestinations.map((destination) => (
              <div key={destination.id} className="flex flex-col items-center text-center" style={{ width: `${destination.width}px` }}>
                <img
                  src={destination.src}
                  alt={destination.alt}
                  width={destination.width}
                  height={destination.height}
                  className="object-cover"
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

export default TopDestinationSection;