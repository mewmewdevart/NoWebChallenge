import type { JSX } from 'react';

import ContactPromptComponent from '@molecules/ContactPromptComponent'; 
import NewsletterLinkComponent from '@molecules/NewsletterLinkComponent';
import SocialLinkButtonComponent from '@molecules/SocialLinkButtonComponent'; 
import FooterLinkColumnComponent, { type LinkItem } from '@molecules/FooterLinkColumnComponent'; 

const footerLinkColumnsData: Array<{ title: string; links: LinkItem[] }> = [
  {
    title: "Empresa",
    links: [
      { label: "Home", href: "#" }, { label: "Quem somos", href: "#quemsomos" },
      { label: "Serviços", href: "#servicos" }, { label: "Contato", href: "#contato" },
    ]
  },
  {
    title: "Novidades",
    links: [
      { label: "Passaporte", href: "#passaporte" }, { label: "Visto", href: "#visto" },
      { label: "Entrevista", href: "#entrevista" }, { label: "Polícia Federal", href: "#pf" },
    ]
  },
  {
    title: "Suporte",
    links: [
      { label: "FAQ", href: "#faq" }, { label: "Contato", href: "#contato-suporte" },
      { label: "Dúvidas Frequentes", href: "#duvidas" },
    ]
  }
];

const socialBadgesData = [
  { label: "Instagram", href: "#insta", originalClasses: "text-charcoal min-w-[118px] min-h-[40px]" },
  { label: "X", href: "#x", originalClasses: "text-charcoal min-w-[52px] min-h-[40px]" },
  { label: "Facebook", href: "#fb", originalClasses: "text-charcoal min-w-[118px] min-h-[40px]" },
  { label: "Youtube", href: "#yt", originalClasses: "text-charcoal min-w-[118px] min-h-[40px]" },
];

function FooterSection({ id, tabIndex }: { id: string, tabIndex?:number }): JSX.Element {
  const commonLinkClasses = "text-silver hover:text-charcoal transition-colors duration-150 ease-in-out text-sm focus-visible:outline-none focus-visible:px-2 focus-visible:py-1 focus-visible:border-dark-blue focus-visible:border-4 focus-visible:border-dashed";
  const currentYear = new Date().getFullYear();

  return (
    <footer id={id} tabIndex={tabIndex} className='flex flex-col justify-center w-full px-4 lg2:px-20 2xl:px-48 3xl:px-60 pt-8 lg2:pt-20'>
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-10 md:gap-8 mb-10 md:mb-12">
        <ContactPromptComponent
          headingId="contact-heading"
          title="Está com alguma dúvida?"
          description="Entre em contato através do nosso canal direto ao cliente através do botão abaixo."
          buttonLabel="Central de Atendimento"
        />
        <NewsletterLinkComponent
          headingId="newsletter-heading"
          title="Receba novidades"
          href="#newsletter-signup" 
        />
      </div>

      <hr className="border-light-gray mb-6 2xl:my-10" />

      <div className="flex flex-col md:flex-row md:justify-between md:h-[161px] w-full gap-10 md:gap-0">
        <div className="flex flex-col md:justify-end">
          <p className="mb-4 font-semibold text-base text-color-charcoal">Siga em nossas redes:</p>
          <div className="flex flex-wrap gap-x-4 gap-y-3">
            {socialBadgesData.map((badge) => (
              <SocialLinkButtonComponent
                key={badge.label}
                label={badge.label}
                href={badge.href}
                className={badge.originalClasses}
              />
            ))}
          </div>
        </div>

        <nav aria-label="Links úteis do rodapé" className="flex flex-row md:justify-between md:w-[612px] gap-4">
          {footerLinkColumnsData.map((column) => (
            <FooterLinkColumnComponent
              key={column.title}
              title={column.title}
              links={column.links}
              linkClassName={commonLinkClasses}
            />
          ))}
        </nav>
      </div>

      <hr className="border-light-gray mt-10 md:mt-16" />
      <p className="text-charcoal font-medium text-center text-sm h-[80px] flex items-center justify-center">
        © {currentYear} Tirar Visto. Todos os direitos reservados.
      </p>
    </footer>
  );
}
export default FooterSection;