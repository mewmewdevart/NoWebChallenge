import BadgeComponent from "../atoms/BadgeComponent";
import ButtonComponent from "../atoms/ButtonComponent";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const footerLinkColumns = [
  {
    title: "Empresa",
    links: [
      { label: "Home", href: "#" },
      { label: "Quem somos", href: "#" },
      { label: "Serviços", href: "#" },
      { label: "Contato", href: "#" },
    ]
  },
  {
    title: "Novidades",
    links: [
      { label: "Passaporte", href: "#" },
      { label: "Visto", href: "#" },
      { label: "Entrevista", href: "#" },
      { label: "Polícia Federal", href: "#" },
    ]
  },
  {
    title: "Suporte",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Contato", href: "#" },
      { label: "Dúvidas Frequentes", href: "#" },
    ]
  }
];

const socialBadges = [
  { label: "Instagram", href: "#", originalClasses: "text-charcoal min-w-[118px] min-h-[40px]" },
  { label: "X", href: "#", originalClasses: "text-charcoal min-w-[52px] min-h-[40px]" },
  { label: "Facebook", href: "#", originalClasses: "text-charcoal min-w-[118px] min-h-[40px]" },
  { label: "Youtube", href: "#", originalClasses: "text-charcoal min-w-[118px] min-h-[40px]" },
];

function Footer() {
const linkClasses = "text-silver hover:text-dark-blue transition-colors duration-150 ease-in-out text-sm";
  return (
    <footer className='flex flex-col justify-center w-full px-4 lg2:px-20 2xl:px-48 3xl:px-60 py-8 md:py-10 bg-white'> 
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-10 md:gap-8 mb-10 md:mb-12">
        <section aria-labelledby="contact-heading" className="w-full md:w-[456px]"> 
          <h2 id="contact-heading" className="font-medium text-[36px] sm:text-[40px] md:text-[56px] mb-4 text-color-charcoal"> 
            Está com alguma dúvida?
          </h2>
          <p className="text-silver text-base md:text-lg mb-8 md:mb-10">
            Entre em contato através do nosso canal direto ao cliente através do botão abaixo.
          </p>
          <ButtonComponent
            label="Central de Atendimento"
            variant="fullDarkBlue"
            size="large"
            className='font-semibold py-2.5 px-5 rounded-[40px]' 
          />
        </section>

        <section aria-labelledby="newsletter-heading" className="w-full md:w-auto mt-10 md:mt-0">
          <a href="#" className="group block md:w-[500px]">
            <div className="flex justify-between items-center w-full">
              <h3 id="newsletter-heading" className="text-[28px] sm:text-[32px] md:text-[40px] text-color-charcoal group-hover:text-dark-blue transition-colors">
                Receba novidades
              </h3>
              <ArrowOutwardIcon className='text-charcoal group-hover:text-dark-blue transition-colors' aria-hidden="true" sx={{ fontSize: { xs: 28, sm: 32 } }} />
            </div>
            <hr className='border-charcoal group-hover:border-dark-blue transition-colors mt-2' />
          </a>
        </section>
      </div>

      <hr className="border-gray-200/60 my-8 md:my-10" />

      <div className="flex flex-col md:flex-row md:justify-between md:h-[161px] w-full gap-10 md:gap-0">
        <div className="flex flex-col md:justify-end">
          <p className="mb-4 text-base text-color-charcoal">Siga em nossas redes:</p>
          <div className="flex flex-wrap gap-x-4 gap-y-3"> 
            {socialBadges.map((badge) => (
              <a href={badge.href} key={badge.label} aria-label={`Siga-nos no ${badge.label}`} className="inline-block">
                <BadgeComponent
                  label={badge.label}
                  variant="outlineDarkBlue"
                  size="small" 
                  className={`${badge.originalClasses} hover:border-dark-blue hover:text-dark-blue transition-colors`} 
                />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Links úteis do rodapé" className="flex flex-col md:flex-row md:justify-between md:w-[612px] gap-8 md:gap-4"> 
          {footerLinkColumns.map((column) => (
            <div key={column.title} className="w-full md:w-auto"> 
              <h4 className="text-charcoal font-medium mb-3 text-base">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={linkClasses}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <p className="text-silver text-center mt-10 md:mt-16 text-sm">
        © {new Date().getFullYear()} Tirar Visto. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;