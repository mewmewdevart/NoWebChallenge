import FooterSection from '@pages/FooterSection';
import HeroSection from '@pages/HeroSection';
import SpecialPackageSection from '@pages/SpecialPackageSection';
import TopDestinationSection from '@pages/TopDestinationSection';
import WhyChooseUsSection from '@pages/WhyChooseUsSection';
import WhyChooseUsPhrase from '@pages/WhyChooseUsPhraseSection';

function App() {
  const menuItems = [
    { label: 'Início', href: '#', isCurrent: true },
    { label: 'Quem somos', href: '#quemsomos', isCurrent: false },
    { label: 'Serviços', href: '#servicos', isCurrent: false },
    { label: 'Contato', href: '#contato', isCurrent: false },
  ];

  const skipLinkClassName = "sr-only focus:not-sr-only focus:absolute focus:top-0 rounded-br-[20px] focus:left-0 focus:p-3 focus:bg-dark-blue focus:text-white focus:ring-2 focus-visible:outline-none focus-visible:px-2 focus-visible:py-1 focus-visible:border-dark-blue focus-visible:border-4 focus-visible:border-dashed shadow-lg transition-all duration-150 ease-in-out";

  const skipLinksData = [
    {
      href: "#main-content",
      text: "Pular para o conteúdo principal",
      id: "skip-main" 
    },
    {
      href: "#footer",
      text: "Pular para o rodapé",
      id: "skip-footer" 
    }
  ];

  return (
    <>
      {skipLinksData.map((link) => (
        <a
          key={link.id} 
          href={link.href}
          className={skipLinkClassName}
          style={{ zIndex: 9999 }}
        >
          {link.text}
        </a>
      ))}

      <HeroSection menuItems={menuItems} />
      <WhyChooseUsPhrase />
      <WhyChooseUsSection />
      <TopDestinationSection />
      <SpecialPackageSection id="main-content" tabIndex={-1} />
      <FooterSection id="footer" tabIndex={-1} />
    </>
  );
}

export default App;