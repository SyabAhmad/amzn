import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import BlogsPage from "./pages/BlogsPage"
import BlogPostPage from "./pages/BlogPostPage"

function App() {
  return (
    <div className="min-h-screen bg-surface text-white font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
