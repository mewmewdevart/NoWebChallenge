import detailBGImageSrc from '../../assets/images/detailBG2.png';
import ButtonComponent from '../atoms/ButtonComponent';

function TopDestination() {
  return (
    <section className='flex '>
      <header className="h-[423px] w-full flex flex-col items-center justify-center" style={{
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
        <p className='text-silver text-center'>Confira os destinos mais procurados por nossos clientes nos últimos meses, <br/>qual seria o seu novo destino?</p>
        <ButtonComponent
          label="Conheça mais"
          variant="fullDarkBlue"
          size="large"
          className='font-semibold py-2.5 px-5 rounded-[40px] w-[160px] h-[54px] mt-8'
        />
      </header>
    </section>
  )
}

export default TopDestination;