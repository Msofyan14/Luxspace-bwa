import "assets/css/app.css";
import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import NotFound from "pages/NotFound";

import Provider from "helpers/hooks/useGlobalContex";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/categories/:idc/products/:idp" element={<Details />} />

        <Route path="cart" element={<Cart />} />
        <Route path="congratulation" element={<Congratulation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
