# 🛋️ Furniro Web

![Vite](https://img.shields.io/badge/Vite-6.3.5-blueviolet?logo=vite)![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4-teal?logo=tailwindcss)
![License](https://img.shields.io/badge/license-Private-red)

Furniro Web é uma aplicação moderna construída com React, Vite e JSON Server para simular uma API REST. Integração com Clerk para autenticação.



## 📦 Instalação

```bash
git clone https://github.com/joaoAngelo2/furniro-web.git
cd furniro-web
npm install
```


## ⚙️ Variáveis de Ambiente (.env)
Crie um arquivo .env na raiz do projeto com:
```
.env

VITE_CLERK_PUBLISHABLE_KEY=pk_test_bm92ZWwtdGlnZXItMTkuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_X9kL8n7ebheDIYl9WWKyXJNVanchpTYvZuulDwyc9w

```

## 📁 Estrutura  de diretórios
```
src/
├── components/      # Componentes reutilizáveis
├── pages/           # Páginas e rotas
├── hooks/           # Custom hooks            
├── schemas/         # Verificação de formulario
├── test/            # Diretório contendo os testes
├── slices/          # Reducer 
globais
└── App.tsx
└── store.tsx        # Redux
```



## 🧪 Testes
Jest para testes

Testing Library para componentes React


Execute:

```
npm test
```

Para cobertura:
```

npm run test:coverage

```

## 🎥 Demonstração em Vídeo

Veja a aplicação em funcionamento no vídeo da aplicação rodando em EC2 abaixo:

[![Assista à demonstração]([https://i9.ytimg.com/vi_webp/WFtOJcyHur0/mq2.webp?sqp=CJDfuMMG&rs=AOn4CLAq834QWgTbHEtDVQxX_7qVqwqS3Q](https://i9.ytimg.com/vi_webp/WFtOJcyHur0/mq2.webp?sqp=CNyQvMMG&rs=AOn4CLCM4xpTLwh4LgBgdZVcLYgUiap1Aw))](https://youtu.be/WFtOJcyHur0)
