import { lazy, Suspense } from "react";
import AuthProvider from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import('./pages/Shop'))
const Product = lazy(() => import('./pages/Product'));
const Dashboard = lazy(() => import('./pages/Dashboard'));


function App() {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="shop" element={<Shop />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
