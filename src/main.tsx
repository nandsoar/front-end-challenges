import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import QRCode from './challenges/qr-code/QRCode'
import BlogPreview from './challenges/blog-preview/BlogPreview'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/qr-code" element={<QRCode />} />
          <Route path="/blog-preview" element={<BlogPreview />} />
        </Routes>
      </BrowserRouter>
    </main>
  </StrictMode>
)
