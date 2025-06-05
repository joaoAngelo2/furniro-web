import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopPage } from "./pages/Shop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
