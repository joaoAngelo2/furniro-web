# ☕ Furniro Store - Projeto de E-commerce de Móveis

![Capa do Projeto Furniro - Imagem de destaque do site de móveis] 
Este projeto é uma recriação das páginas do Furniro, um e-commerce de móveis, desenvolvida utilizando **React**, **TypeScript** e **Tailwind CSS**. O objetivo principal foi replicar fielmente o design original do Figma, implementando diversas funcionalidades essenciais de uma loja online. O projeto foi desenvolvido em grupo, seguindo metodologias ágeis de organização e versionamento.

## 🚀 Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática, garantindo maior segurança e manutenibilidade ao código.
* **Tailwind CSS:** Framework CSS utilitário que permite construir designs complexos rapidamente com classes CSS de baixo nível.
* **React Router DOM:** Para o gerenciamento de rotas e navegação entre as páginas da aplicação.
* **Axios:** Cliente HTTP baseado em Promises para fazer requisições a APIs (utilizado para interagir com o JSON Server).
* **JSON Server:** Ferramenta para simular uma API REST completa, utilizada como mock de banco de dados para os produtos da loja.
* **React Toastify:** Biblioteca para exibir notificações "toast" de feedback ao usuário de forma não intrusiva.
* **Vite:** Ferramenta de build rápida e otimizada para desenvolvimento front-end.
* **ESLint:** Ferramenta de linting para garantir a qualidade e consistência do código.

## ✨ Funcionalidades Implementadas

O projeto replica as principais páginas e funcionalidades do design Furniro:

* **Header Fixo (Sticky Header):** Permanece visível no topo da tela durante o scroll, com navegação responsiva.
    * Links de navegação (`Home`, `Shop`, `About`, `Contact`).
    * Logo clicável que redireciona para a Home.
    * Efeito de sublinhado animado nos links de navegação no hover.
    * Menu hambúrguer para navegação em dispositivos móveis, com ícone à esquerda do logo.
* **Footer Completo:** Presente em todas as páginas, com design fiel ao Figma.
    * Links para redes sociais da Compass UOL (Facebook, Instagram, Twitter, LinkedIn).
    * Formulário de Newsletter com validação personalizada e feedback visual.
* **Página de Produto Individual (`/product/:id`):**
    * Carregamento dinâmico de dados do produto via JSON Server, baseado no ID na URL.
    * Exibição de imagem principal com thumbnails clicáveis para alternar visualização.
    * Seleção de tamanho e cor do produto.
    * Seletor de quantidade de itens.
    * Botão "Add to Cart" com feedback visual (Toast) ao clicar.
    * Seção de abas para "Description" e "Additional Information", com conteúdo dinâmico.
    * **Estrelas de avaliação dinâmicas:** Exibição de estrelas cheias e vazias baseada na nota (`rate`) do produto do JSON.
    * Botão "Show More" que redireciona para a página Shop.
* **Página de Loja (`/shop`):**
    * Listagem de todos os produtos com cards interativos.
    * Funcionalidade de Paginação para navegar entre os resultados.
    * Filtro de produtos por categoria (`Dining`, `Living`, `Bedroom`, etc.).
* **Home Page (`/`):**
    * Seção "Browse The Range" com categorias de produtos (Dining, Living, Bedroom) que redirecionam para a página Shop filtrada.
    * Carrossel de móveis (seção "Our Products").
    * Botões como "BUY NOW", "Show More" e "Explore More" que levam para a página "Shop".
* **Responsividade:** O layout é totalmente adaptável a diferentes tamanhos de tela (mobile, tablet, desktop), seguindo uma abordagem mobile-first.
* **Tipagem Forte com TypeScript:** Todo o projeto é tipado para garantir maior robustez e evitar erros em tempo de execução.

## 📦 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina local:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) (versão LTS recomendada) e o [npm](https://docs.npmjs.com/cli/v9/commands/npm) ou [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instalados.

### 1. Clonar o Repositório

git clone git@github.com:ArthurEstrela/furniro-web.git

### 2. Instalar Dependências

npm install

### 3. Iniciar o JSON Server

npm run server

### 4. Iniciar Aplicativo React

npm run dev:vite
