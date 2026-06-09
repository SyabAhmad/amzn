import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import BlogsPage from "./pages/BlogsPage"
import BlogPostPage from "./pages/BlogPostPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import FIFACommunityPage from "./pages/FIFACommunityPage"
import FIFATicketsPage from "./pages/FIFATicketsPage"
import FIFAMatchesPage from "./pages/FIFAMatchesPage"
import FIFANewsPage from "./pages/FIFANewsPage"
import FIFAWorldCup2026Page from "./pages/FIFAWorldCup2026Page"
import FIFAHostCitiesPage from "./pages/FIFAHostCitiesPage"
import FIFASchedulePage from "./pages/FIFASchedulePage"
import FIFAFanZonePage from "./pages/FIFAFanZonePage"
import FIFAPredictionsPage from "./pages/FIFAPredictionsPage"
import FIFALiveScoresPage from "./pages/FIFALiveScoresPage"
import FIFAGroupStagePage from "./pages/FIFAGroupStagePage"
import FIFAKnockoutPage from "./pages/FIFAKnockoutPage"
import FIFAFanGroupsPage from "./pages/FIFAFanGroupsPage"
import FIFAWorldCupSchedulePage from "./pages/FIFAWorldCupSchedulePage"
import FIFAWAtchLivePage from "./pages/FIFAWAtchLivePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <div className="min-h-screen bg-surface text-white font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/fifa-community" element={<FIFACommunityPage />} />
        <Route path="/fifa-tickets" element={<FIFATicketsPage />} />
        <Route path="/fifa-matches" element={<FIFAMatchesPage />} />
        <Route path="/fifa-news" element={<FIFANewsPage />} />
        <Route path="/fifa-world-cup-2026" element={<FIFAWorldCup2026Page />} />
        <Route path="/fifa-host-cities" element={<FIFAHostCitiesPage />} />
        <Route path="/fifa-schedule" element={<FIFASchedulePage />} />
        <Route path="/fifa-fan-zone" element={<FIFAFanZonePage />} />
        <Route path="/fifa-predictions" element={<FIFAPredictionsPage />} />
        <Route path="/fifa-live-scores" element={<FIFALiveScoresPage />} />
        <Route path="/fifa-group-stage" element={<FIFAGroupStagePage />} />
        <Route path="/fifa-knockout" element={<FIFAKnockoutPage />} />
        <Route path="/fifa-fan-groups" element={<FIFAFanGroupsPage />} />
        <Route path="/fifa-world-cup-schedule" element={<FIFAWorldCupSchedulePage />} />
        <Route path="/fifa-watch-live" element={<FIFAWAtchLivePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
