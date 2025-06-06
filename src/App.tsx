import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SingleProductPage from "./pages/SingleProduct/SingleProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
