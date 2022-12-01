import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { BuyProduct } from "./pages/BuyProduct";
import { Home } from "./pages/Home";
import { MyProduct } from "./pages/MyProduct";
import { RegisterProduct } from "./pages/RegisterProduct";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin/cadastro-de-produto"
            element={<RegisterProduct />}
          />
          <Route path="/admin/meus-produtos" element={<MyProduct />} />
          <Route path="/comprar-produtos" element={<BuyProduct />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
