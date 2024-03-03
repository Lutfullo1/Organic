import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Pages } from "./pages/pages/pages";
import { Shop } from "./pages/shop/shop";
import { Projects } from "./pages/projects/projects";
import { News } from "./pages/news/news";
import { ShopSingle } from "./pages/shop-single/shop-single";
import { MainLayout } from "./layout/main-layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pages" element={<Pages />} />
          <Route path="shop" element={<Shop />} />
          <Route path="projects" element={<Projects />} />
          <Route path="news" element={<News />} />
          <Route path="shop-single/:slug" element={<ShopSingle />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
