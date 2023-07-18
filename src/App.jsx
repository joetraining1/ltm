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
const Quick = lazy(() => import("./components/shop/orders/quick/QuickPeek"));
const Invoice = lazy(() => import("./components/shop/order/Invoices"));
const Products = lazy(() => import("./components/dashboard/products/Products"));
const DashboardOrder = lazy(() =>
  import("./components/dashboard/orders/DashOrders")
);
const Profile = lazy(() => import('./pages/Profile'));
const QuickLook = lazy(() => import("./components/dashboard/orders/QuickLook"))
const QuickEdit = lazy(() => import("./components/dashboard/orders/QuickEdit"))
const Carts = lazy(() => import("./components/dashboard/carts/Carts"));
const Ctgs = lazy(() => import("./components/dashboard/categories/Ctgs"));
const Banks = lazy(() => import("./components/dashboard/banks/Banks"));
const Status = lazy(() => import("./components/dashboard/status/Statuses"));
const Payments = lazy(() =>
  import("./components/dashboard/payments/Payements")
);
const Users = lazy(() => import("./components/dashboard/users/Users"));
const UserType = lazy(() => import('./components/dashboard/type/UserType'));
const DashHome = lazy(() => import("./components/dashboard/DashHome"));
const Sneakpeek = lazy(() => import("./components/dashboard/carts/Sneakpeek"));
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
              <Route path="orders" element={<Orders />}>
                <Route path=":id" element={<Quick />} />
              </Route>
              <Route path="order/:id" element={<Invoice />} />
              <Route path="payment" element={<Completion />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="profile" element={<Profile />} />
              <Route path="guide" element={<Guide />} />
            </Route>
            <Route path="product" element={<Product />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<DashHome />} />
              <Route path="types" element={<UserType />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<DashboardOrder />}>
                <Route path=":id" element={<QuickLook />} />
                <Route path="edit/:id" element={<QuickEdit />} />
              </Route>
              <Route path="order/:id" element={<Invoice />} />
              <Route path="carts" element={<Carts />}>
                <Route path=":id" element={<Sneakpeek />} />
              </Route>
              <Route path="categories" element={<Ctgs />} />
              <Route path="banks" element={<Banks />} />
              <Route path="status" element={<Status />} />
              <Route path="payments" element={<Payments />} />
              <Route path="users" element={<Users />}></Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </NotifProvider>
  );
}

export default App;
