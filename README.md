<p align="center">
  <img src="https://github.com/user-attachments/assets/e413c89b-198b-469c-9443-6a243e30917e" alt="TirarVisto Logo" style="width: 120px;">
</p>



<h1 align="center">Frontend TirarVisto - Desafio Técnico NoWeb Publicidade</h1>

<p align="center">
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="Licença MIT">
  </a>
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-6.3-purple?logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/TailwindCSS-4.1-blue?logo=tailwindcss" alt="Tailwind CSS">
</p>

<p align="center">
  <b><i>🚀 | Minha solução para o Desafio técnico para a vaga de Front-End na NoWeb Publicidade!</i></b>
</p>

<p align="center">
  <a href="https://tirar-visto-noweb-challenge.vercel.app/" target="_blank">Acessar o resultado </a>
</p>

## 📚 Sumário

1.  [📖 Introdução](#-introdução)
2.  [🎯 O Desafio da NoWeb Publicidade](#-o-desafio-da-noweb-publicidade)
3.  [✨ Funcionalidades Implementadas (e Além!)](#-funcionalidades-implementadas-e-além)
    * [♿ Acessibilidade](#-acessibilidade)
4.  [🏗️ Arquitetura e Estrutura do Projeto](#️-arquitetura-e-estrutura-do-projeto)
    * [📁 Estrutura de Pastas](#-estrutura-de-pastas)
5.  [💡 Desafios, Soluções e Considerações Adicionais](#-desafios-soluções-e-considerações-adicionais)
6.  [🚀 Como Rodar o Projeto](#-como-rodar-o-projeto)
    * [📋 Pré-requisitos](#-pré-requisitos)
    * [💻 Rodando o frontend](#-rodando-o-frontend)
7.  [🖼️ Visão Geral da Aplicação](#️-visão-geral-da-aplicação)
8.  [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
9.  [📚 Referências](#-referências)
10. [👩🏿 Experiência](#-experiência)
11. [📜 Licença](#-licença)

## 📖 Introdução

O projeto **Frontend TirarVisto** é um website de página única (SPA) desenvolvido como resposta ao desafio técnico proposto pela NoWeb Publicidade para a vaga de Desenvolvedor Front-End. A plataforma visa apresentar os serviços de consultoria para obtenção de vistos de forma clara, intuitiva e acessível. O desenvolvimento focou em atender aos critérios de avaliação propostos, como código limpo, fidelidade ao layout, responsividade, e também em entregar "plus" com otimizações de SEO e uma base sólida de acessibilidade.

## 🎯 O Desafio da NoWeb Publicidade

O teste técnico proposto pela NoWeb Publicidade consistia em:

> * Código limpo e bem organizado
> * Fidelidade ao layout do Figma
> * Responsividade (funcionar bem em diferentes dispositivos)
> * Apenas dois dias para concluir o desafio
> * Hospedar o projeto (ex: Vercel, Netlify, etc.)

Este projeto busca endereçar todos os pontos de avaliação, entregando uma solução robusta e bem estruturada dentro do prazo estipulado.

## ✨ Funcionalidades Implementadas (e Além!)

O website implementa integralmente o layout proposto no Figma, incluindo:

* **Hero Section Dinâmica:** Apresentação principal da proposta de valor com elementos visuais e estatísticas de sucesso.
* **Frase de Impacto "Why Choose Us":** Destaque conciso dos diferenciais da empresa.
* **Detalhes "Why Choose Us":** Exploração aprofundada dos motivos para escolher a TirarVisto, incluindo imagem ilustrativa e informações organizadas em acordeão.
* **Principais Destinos (Top Destinations):** Seção visual com um carrossel de destinos populares.
* **Pacotes Especiais (Special Packages):** Apresentação dos diferentes pacotes de serviço, com navegação em carrossel e detalhes por pacote.
* **Footer Completo e Informativo:** Com CTA para contato, link para newsletter, links de navegação, informações de redes sociais e direitos autorais.
* **Design Responsivo:** Adaptação completa da interface para diferentes tamanhos de tela, conforme solicitado.
* **Interatividade:** Componentes como carrosséis (destinos e pacotes) e acordeões para apresentação de informações.

**

* **Otimização SEO:** Implementação de meta tags detalhadas e dados estruturados (JSON-LD) no `index.html` para melhor indexação e apresentação nos motores de busca + LazyLoading e Minificação das imagens.
* **Fundamentos Sólidos de Acessibilidade:** Além da conformidade básica, foram implementados recursos como skip links e atenção à semântica e ARIA.

### ♿ Acessibilidade

Um esforço considerável foi dedicado para tornar a aplicação acessível, atendendo e expandindo as boas práticas:

* **Links de Pular Navegação (Skip Links):** Implementados no `App.tsx`, permitem que usuários de teclado e leitores de tela pulem diretamente para o conteúdo principal (`#main-content`) ou rodapé (`#footer`).
* **HTML Semântico:** Uso correto de tags HTML5 (`<main>` implícito pelo `id="main-content"`, `<section>`, `<article>`, `<nav>`, `<footer>`, cabeçalhos `<h1>`-`<h6>`, etc.) para estruturar o conteúdo de forma lógica.
* **Atributos ARIA:** Utilização de atributos ARIA (`aria-labelledby`, `aria-label`, `aria-hidden`, `role`, `tabIndex={-1}` nos destinos dos skip links) para melhorar a experiência de usuários com tecnologias assistivas.
* **Navegação por Teclado:** Garantia de que todos os elementos interativos sejam acessíveis e operáveis via teclado.
* **Contraste de Cores:** (Verificado visualmente para atender minimamente) Busca por contraste adequado entre texto e fundo para garantir legibilidade.
* **Textos Alternativos para Imagens:** Todas as imagens informativas possuem `alt text` descritivo.
* **Manutenção de Foco Visível:** Estilos de foco claros para elementos interativos, incluindo os skip links.
* **Estrutura de Cabeçalhos Lógica:** Uso hierárquico de cabeçalhos.

## 🏗️ Arquitetura e Estrutura do Projeto

O projeto adota a metodologia **Atomic Design** para a organização dos componentes da interface. Esta abordagem promove a modularidade, reutilização e escalabilidade do código, contribuindo para um "código limpo e bem organizado" conforme solicitado.

Os componentes são categorizados da seguinte forma:

* **Átomos (`src/components/atoms`):** Os blocos de construção fundamentais da UI, como `ButtonComponent.tsx`, `BadgeComponent.tsx`, `IconComponent.tsx`.
* **Moléculas (`src/components/molecules`):** Grupos de átomos que funcionam juntos como uma unidade funcional simples. Exemplos: `NavbarComponent.tsx`, `AccordionComponent.tsx`, `FooterLinkColumnComponent.tsx`.
* **Organismos (`src/components/organisms`):** Partes mais complexas da UI compostas por moléculas e/ou átomos. Representam seções distintas da interface, como `PackageCardComponent.tsx`, `HeroContentBlockComponent.tsx`.
* **Páginas/Seções (`src/components/pages`):** Neste projeto, atuam como "Seções de Página". São componentes de alto nível que agrupam organismos e moléculas para formar as principais áreas visuais e funcionais do website. Exemplos: `HeroSection.tsx`, `SpecialPackageSection.tsx`, `FooterSection.tsx`.
* **App (`src/App.tsx`):** O componente raiz que monta todas as seções da página e gerencia dados globais ou de navegação.

### 📁 Estrutura de Pastas

```
frontend-tirar-visto/
├── public/                     # Arquivos estáticos públicos (favicons, etc.)
│   └── favicon_io/             # Favicons para diversas plataformas
├── src/
│   ├── assets/                 # Imagens, ícones SVG, fontes locais
│   │   ├── icons/
│   │   └── images/
│   ├── components/             # Componentes React seguindo Atomic Design
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── pages/              # Seções principais da página
│   ├── App.tsx                 # Componente principal da aplicação
│   ├── main.tsx                # Ponto de entrada da aplicação React
│   ├── index.css               # Estilos globais e configuração do Tailwind
│   └── vite-env.d.ts           # Tipings do ambiente Vite
├── eslint.config.js            # Configuração do ESLint
├── index.html                  # Template HTML principal (com meta tags SEO e A11y)
├── package.json                # Dependências e scripts do projeto
├── tailwind.config.js          # Configuração do Tailwind CSS (suposição)
├── tsconfig.json               # Configuração principal do TypeScript
└── vite.config.ts              # Configuração do Vite
```

## 💡 Desafios, Soluções e Considerações Adicionais

Durante o desenvolvimento desta aplicação, alguns desafios surgiram e foram superados com as seguintes estratégias:

* **Componentização Granular vs. Praticidade:**
    * **Desafio:** Decidir o nível de granularidade na divisão dos componentes (Atomic Design) sem criar uma sobrecarga de arquivos ou abstrações desnecessárias, especialmente para um website de página única com múltiplas seções.
    * **Solução:** Focar em criar átomos e moléculas para elementos verdadeiramente reutilizáveis ou que encapsulam uma lógica/estilo complexo. Elementos simples e muito específicos de um contexto foram mantidos dentro de componentes pais (moléculas ou organismos) para evitar a proliferação excessiva de componentes triviais, equilibrando a pureza do Atomic Design com a pragmática do projeto. A categorização das seções principais em `src/components/pages` ajudou a manter a organização no nível mais alto.

* **Manutenção da Fidelidade ao Design e Responsividade:**
    * **Desafio:** Garantir que a interface rica em conteúdo se adapte perfeitamente a diferentes resoluções, mantendo a estética e usabilidade, conforme solicitado no desafio.
    * **Solução:** Uso intensivo do Tailwind CSS, aproveitando suas classes utilitárias para responsividade (`sm:`, `md:`, `lg2:`, `2xl:`, `3xl:`) e flexbox/grid para construir layouts fluidos. Testes contínuos em diferentes viewports durante o desenvolvimento para assegurar a fidelidade ao layout do Figma.

* **Implementação Efetiva de Acessibilidade:**
    * **Desafio:** Ir além do básico e garantir que componentes interativos como carrosséis e acordeões sejam plenamente acessíveis, e que a navegação global seja otimizada.
    * **Solução:** Estudo e aplicação das diretrizes do WCAG, uso correto de HTML semântico, atributos ARIA (como `aria-labelledby`, `aria-controls`, `role`), implementação de navegação por teclado e links de "pular navegação" proeminentes e funcionais. O `tabIndex={-1}` nos alvos dos skip links garante que eles não entrem na ordem de tabulação normal até serem focados.

* **Gerenciamento de Estado para Componentes Interativos:**
    * **Desafio:** Controlar o estado de elementos como o carrossel de pacotes (índice atual, itens por página) e acordeões (painel expandido) de forma eficiente.
    * **Solução:** Utilização dos hooks do React (`useState`, `useEffect`, `useCallback`) para gerenciar o estado localmente nos componentes que necessitam (como `SpecialPackageSection.tsx` controlando o carrossel), mantendo a lógica encapsulada e o fluxo de dados previsível.

Considerações para Evolução (com mais tempo):**

* **Acessibilidade Avançada:** Embora uma base sólida tenha sido implementada, com mais tempo, seria interessante aprofundar em testes com leitores de tela diversos, refinar os padrões ARIA para componentes dinâmicos (como o carrossel, garantindo que as atualizações de conteúdo sejam anunciadas corretamente) e realizar auditorias de acessibilidade mais completas.
* **Animações e Microinterações:** Para enriquecer a experiência do usuário, poderiam ser adicionadas animações sutis em transições de componentes, hover effects e ao carregar seções, utilizando bibliotecas como Framer Motion ou mesmo transições CSS, sempre com a preocupação de não prejudicar a performance ou a acessibilidade (respeitando `prefers-reduced-motion`).

## 🚀 Como Rodar o Projeto

### 📋 Pré-requisitos

* **Node.js** (v18.x ou superior recomendado)
* **npm** (geralmente vem com o Node.js) ou **yarn**
* **Git**

### 💻 Rodando o frontend

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/mewmewdevart/NoWebChallenge.git
    ```

2.  **Navegue até a pasta do projeto frontend:**
    ```bash
    cd NoWebChallenge/frontend-tirar-visto/
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Acesse a aplicação:**
    Abra o navegador e acesse:
    ```
    // Verifique se a porta já não está sendo usada 
    http://localhost:5173
    ```

## 🖼️ Visão Geral da Aplicação

<details><summary> 📷 Printscreen completo (Desktop)</summary>
  
![Wektop](https://github.com/user-attachments/assets/faa6baff-f1d6-4584-8d6e-a5ecd3409713)

</details>

<details><summary>📷 Printscreen completo (Mobile)</summary>
  
![MObile](https://github.com/user-attachments/assets/fc8048d7-3dd4-4a00-aba0-9dd01bd058cf)

</details>

🎥 Video de todo o projeto (gravação rapida):
- Passagem pela acessibilidade do SkipToContent
- Passagem pela acessibilidade dos Botoes
- Interações e "animações breves"
- Coesão do Design
- Responsividade

[Gravacao das funcionalidades principais](https://github.com/user-attachments/assets/6f923463-e9a9-4e0c-b866-7e22b5a8e592)


## 🛠️ Tecnologias Utilizadas

### **Principais**

* **React (v19.1.0):** Biblioteca JavaScript para construir interfaces de usuário.
* **TypeScript (v5.8.3):** Superset do JavaScript que adiciona tipagem estática.
* **Vite (v6.3.5):** Ferramenta de build moderna e rápida para desenvolvimento frontend.
* **Tailwind CSS (v4.1.8):** Framework CSS utility-first para estilização rápida e customizável.
* **Material-UI (MUI):**
    * `@mui/icons-material` (v7.1.1): Para ícones SVG.
    * `@mui/material` (v7.1.1): Biblioteca de componentes React.
    * `@emotion/react`, `@emotion/styled`: Bibliotecas CSS-in-JS usadas pelo MUI.
* **Tailwind Merge (v3.3.0):** Utilitário para mesclar classes do Tailwind CSS sem conflitos de estilo.

### **Desenvolvimento e Qualidade de Código**

* **ESLint (v9.25.0):** Ferramenta para identificar e corrigir problemas no código JavaScript/TypeScript.
* **`typescript-eslint`:** Integração do ESLint com TypeScript.
* **Node.js:** Ambiente de execução JavaScript (usado para as ferramentas de desenvolvimento).
* **Globals:** Para configuração de globais no ESLint.

## 📚 Referências
* [Documentação React](https://react.dev/)
* [Documentação TypeScript](https://www.typescriptlang.org/docs/)
* [Documentação Vite](https://vitejs.dev/)
* [Documentação Tailwind CSS](https://tailwindcss.com/docs)
* [Documentação Material-UI](https://mui.com/material-ui/getting-started/)
* [Atomic Design por Brad Frost](https://atomicdesign.bradfrost.com/)
* [WCAG (Web Content Accessibility Guidelines)](https://www.w3.org/WAI/standards-guidelines/wcag/)
* [Figma (para o design, se aplicável)](https://www.figma.com/)
* [Schema.org (para dados estruturados)](https://schema.org/)
* [TinyPNG(Minificação do peso das imagens)](https://tinypng.com/)
* [PNG-Converter(Conversão dos pngs em webp)](https://cloudconvert.com/png-converter)

## 👩🏿 Experiência (Tom mais informal)

Foi tranquilo e gostoso de fazer o desafio. Me diverti enquanto criava cada pedaço da interface, vendo os elementos sairem do Figma e ganharem vida no codigo. Pude fortalecer os meus conhecimento em :
* **React e Atomic Design:** Consegui aplicar o Atomic Design na prática para organizar os componentes, o que deixou tudo mais ajeitadinho e fácil de mexer depois.
* **Acessibilidade (A11y):** Pude ir além do básico, implementando os skip links (aqueles para pular navegação, sabe?), usando HTML semântico direitinho e pensando nos atributos ARIA para quem usa leitor de tela.
* **SEO:** Dei uma atenção extra para as meta tags e até coloquei uns dados estruturados (JSON-LD) no `index.html`, pensando em como o Google ia "enxergar" a página.
* **Fidelidade ao Design:** Tentei ser o mais fiel possível ao layout do Figma, e ainda aproveitei para dar uns "polimentos adicionais" em alguns detalhes para deixar a experiência ainda melhor.

A única coisinha que não me deixou 100% satisfeita foi a responsividade. O site está responsivo, se adapta a diferentes telas porém sinto que se tivesse um design especifico para mobile no desafio, para replicar no codigo, o resultado final para mobile teria ficado mais agradavel em questão de design. 

No geral, curti a experiência! Se o prazo fosse um pouquinho maior, com certeza eu mergulharia de cabeça para adicionar mais animações e faria testes ainda mais profundos de acessibilidade com diferentes leitores de tela. Foi um bom desafio, obrigada pela experiencia!

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

<p align="center">
  Desenvolvido com muito ☕ por
  <a href="https://linktr.ee/mewmewdevart" target="_blank">Larissa Cristina Benedito</a>
</p>
