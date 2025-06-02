import LogoTirarVisto from '../../assets/LogoTirarVisto.svg';

function HeroSection() {
    return (
        <section className='flex justify-center  flex-row h-screen w-screen px-20 lg:px-40 2xl:px-60'>
            <div className='w-full flex flex-col'> 
                <nav className='flex items-center justify-start h-[100px] w-full'>
                    <div className="flex items-center"> 
                        <img src={LogoTirarVisto} alt="Logo da empresa TirarVisto" className="h-10 mr-4" /> 
                        <ul id="nav-mobile" className="flex items-center justify-between">
                            <li className='min-w-fit px-2.5 text-center'><a href="#">Inicio</a></li>
                            <li className='min-w-fit px-2.5 text-center'><a href="#">Quem somos</a></li>
                            <li className='min-w-fit px-2.5 text-center'><a href="#">Serviços</a></li>
                            <li className='min-w-fit px-2.5 text-center'><a href="#">Contato</a></li>
                        </ul>
                    </div>
                </nav>
                <article className='flex-grow'>oi</article> 
            </div>


        </section>
    )
}

export default HeroSection;