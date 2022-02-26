import React, { lazy, ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

const OrderList = lazy(() => import("./pages/OrderList"));

function Suspense({ children }: { children: ReactNode }) {
  return <React.Suspense fallback={null}>{children}</React.Suspense>
}

function App() {
  return <Router basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/orders" element={<Suspense><OrderList /></Suspense>} />
      <Route path="/" element={<Suspense><Home /></Suspense>} />
      <Route path="**" element={<Suspense><Home /></Suspense>} />
    </Routes>
  </Router>;
}

export default App
