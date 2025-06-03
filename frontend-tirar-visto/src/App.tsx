import HeroSection from './components/pages/HeroSection'

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
      <h1 className='bg-red-500'>ola</h1>
    </>
  )
}

export default App
