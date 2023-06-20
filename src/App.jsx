import { lazy, Suspense } from "react";
import AuthProvider from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Product = lazy(() => import("./pages/Product"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Guide = lazy(() => import("./components/shop/guide/Guide"));
const Checkout = lazy(() => import("./components/shop/checkout/Checkout"));
const Completion = lazy(() =>
  import("./components/shop/completion/Completion")
);
const Showcase = lazy(() => import("./components/shop/showcase/Showcase"));
const Orders = lazy(() => import("./components/shop/orders/Orders"));
import NotifProvider from "./contexts/NotifContext";

function App() {
  return (
    <NotifProvider>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="shop" element={<Shop />}>
              <Route index element={<Showcase />} />
              <Route path="orders" element={<Orders />} />
              <Route path="payment" element={<Completion />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="guide" element={<Guide />} />
            </Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </NotifProvider>
  );
}

export default App;
