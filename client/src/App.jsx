import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Suspense, lazy } from "react";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";

// !
import Test from "./Test";

const Home = lazy(() => import("./app/home/Home"));
const Search = lazy(() => import("./app/search/Search"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <main className="p-4 lg:p-8 bg-light-bg min-h-[calc(100vh-72px)]">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
        <Footer />
        <MobileNav />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
