import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  About,
  Blog,
  Ecommerce,
  Hosting,
  Marketing,
  Mobile,
  Notfound,
  SEO,
  Social,
  Softaware,
  Telephony,
  Web,
  Home,
  SEOPage,
} from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-development" element={<Web />} />
          <Route path="/social-media-management" element={<Social />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/telephony" element={<Telephony />} />
          <Route path="/web-hosting" element={<Hosting />} />
          <Route path="/about" element={<About />} />
          <Route path="/mobile-application-development" element={<Mobile />} />
          <Route path="/paid-marketing" element={<Marketing />} />
          <Route path="/search-engine-optimization" element={<SEOPage />} />
          <Route path="/ecommerce-shopify-solutions" element={<Ecommerce />} />
          <Route path="/software-development" element={<Softaware />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
