import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

// Сценарии подключаются лениво, чтобы каждая страница оставалась независимой.
const GreekCourse = lazy(() => import('./pages/GreekCourse.jsx'));

const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greek/1-2" element={<GreekCourse />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRouter;
