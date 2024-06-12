import { ContactUs, HomePage, Catalog, Cart, PaymentSuccess } from "./Pages";
import { Footer, NavBar } from "./Components";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/catalog/search/:inputSearch" element={<Catalog />} />
            <Route path="catalog/collection/:id" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PaymentSuccess />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
