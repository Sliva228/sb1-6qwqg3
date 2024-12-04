import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Launcher } from './pages/Launcher';
import { Stats } from './pages/Stats';
import { Shop } from './pages/Shop';
import { Rules } from './pages/Rules';
import { Support } from './pages/Support';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { Forum } from './pages/forum/Forum';
import { ForumTopic } from './pages/forum/ForumTopic';
import { AdminRoute } from './components/auth/AdminRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-indigo-950 text-violet-100 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/launcher" element={<Launcher />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/support" element={<Support />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/topic/:id" element={<ForumTopic />} />
            
            {/* Admin routes */}
            <Route path="/admin" element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;