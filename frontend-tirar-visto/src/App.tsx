import FooterSection from './components/pages/FooterSection';
import HeroSection from './components/pages/HeroSection'
import SpecialPackageSection from './components/pages/SpecialPackageSection';
import TopDestinationSection from './components/pages/TopDestinationSection';
import WhyChooseUsSection from './components/pages/WhyChooseUsSection';
import WhyChooseUsPhrase from './components/pages/WhyChooseUsPhraseSection';

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
      <WhyChooseUsPhrase />
      <WhyChooseUsSection /> 
      <TopDestinationSection />
      <SpecialPackageSection />
      <FooterSection />
    </>
  )
}

export default App
