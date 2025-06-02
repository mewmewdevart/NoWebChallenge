import LogoTirarVisto from '../../assets/LogoTirarVisto.svg';

import NavbarComponent from '../atoms/molecules/NavbarComponent';

interface MenuItemFromApp {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface HeroSectionProps {
    menuItems: MenuItemFromApp[]; 
}

function HeroSection({ menuItems }: HeroSectionProps) {
    return (
        <section className='flex justify-center  flex-row h-screen w-screen px-10 lg:px-30 2xl:px-60'>
            <div className='w-full flex flex-col'>
                <NavbarComponent
                    logoSrc={LogoTirarVisto}
                    logoAlt="Logo da empresa TirarVisto"
                    menuItems={menuItems}
                />
            </div>

        </section>
    )
}

export default HeroSection;