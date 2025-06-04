import Footer from './components/pages/Footer';
import HeroSection from './components/pages/HeroSection'
import SpecialPackage from './components/pages/SpecialPackage';
import TopDestination from './components/pages/TopDestination';
import WhyChooseUs from './components/pages/WhyChooseUs';
import WhyChooseUsPhrase from './components/pages/WhyChooseUsPhrase';

function App() {
    const menuItems = [
    { label: 'Início', href: '#', isCurrent: true },
    { label: 'Quem somos', href: '#quemsomos', isCurrent: false },
    { label: 'Serviços', href: '#servicos', isCurrent: false},
    { label: 'Contato', href: '#contato', isCurrent: false },
  ];

  return (
    <>
      <HeroSection menuItems={menuItems} />
      {/* <WhyChooseUsPhrase />
      <WhyChooseUs />
      <TopDestination />
      <SpecialPackage />
      <Footer /> */}
    </>
  )
}

export default App
