import { lazy, Suspense } from "react";
import AuthProvider from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const Career = lazy(() => import("./pages/Career"));

function App() {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
