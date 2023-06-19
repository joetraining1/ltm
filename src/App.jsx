import { lazy, Suspense } from "react";
import AuthProvider from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import('./pages/Shop'))
const Product = lazy(() => import('./pages/Product'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Guide = lazy(() => import('./components/shop/guide/Guide'));
const Checkout = lazy(() => import('./components/shop/checkout/Checkout'));


function App() {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="shop" element={<Shop />}>
            <Route path="checkout" element={<Checkout />}/>
            <Route path="guide" element={<Guide />}/>
          </Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
