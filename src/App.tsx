// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Importe 'Link' se for usá-lo na rota inicial temporária

// Importe os seus componentes Header e Footer

// Importe a página de produto individual
import SingleProductPage from "./pages/SingleProduct/SingleProductPage"; // Ajuste o caminho se sua pasta for 'SingleProduct' e não 'ProductDetail'

// Importe outras páginas como Home e Shop quando existirem (descomente quando criá-las)
// import HomePage from './pages/Home/HomePage';
// import ShopPage from './pages/Shop/ShopPage';

function App() {
  return (
    <Router>
      {/* O Header é renderizado aqui e aparecerá em todas as rotas */}
      <main className="flex-grow">
        {" "}
        {/* 'flex-grow' ajuda a empurrar o Footer para baixo */}
        <Routes>
          {/* Rota para a página inicial (Home) - Essencial para evitar "No routes matched" no início */}
          {/* Você pode substituir este div por <HomePage /> quando criar seu componente Home */}
          <Route
            path="/"
            element={
              <div className="py-20 text-center">
                <h1 className="text-3xl font-bold mb-4">
                  Bem-vindo à Furniro!
                </h1>
                <p className="text-lg">Acesse a página de um produto:</p>
                <Link to="/product/1" className="text-blue-600 hover:underline">
                  Ver Produto 1
                </Link>{" "}
                {/* Exemplo de link para testar */}
                <p className="text-sm mt-4">
                </p>
              </div>
            }
          />

          {/* Rota da Página de Produto Individual */}
          <Route path="/product/:id" element={<SingleProductPage />} />

          {/* Adicione outras rotas aqui conforme você for criando as páginas */}
          {/* Exemplo: <Route path="/shop" element={<ShopPage />} /> */}
          {/* Exemplo de rota para uma página "não encontrada" (404) */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      {/* O Footer é renderizado aqui e aparecerá em todas as rotas */}
    </Router>
  );
}

export default App;
