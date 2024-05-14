import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import MyBlogs from "./components/MyBlogs";
import PublicBlogs from "./components/PublicBlogs";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blogs" element={<MyBlogs />} />
            <Route path="/stored-blogs" element={<PublicBlogs />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
