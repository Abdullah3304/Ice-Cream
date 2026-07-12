import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Story from './pages/Story';
import Products from './pages/Flavors';
import Contact from './pages/Contact';
import Order from './pages/Order';
import ComingSoon from './pages/ComingSoon';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="products" element={<Products />} />
          <Route path="order" element={<Order />} />
          <Route path="contact" element={<Contact />} />
          <Route path="coming-soon" element={<ComingSoon />} />
          {/* Old paths → new paths */}
          <Route path="about" element={<Navigate to="/story" replace />} />
          <Route path="flavors" element={<Navigate to="/products" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
