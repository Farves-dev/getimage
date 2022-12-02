import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithNav from "../components/WithNav";
import WithoutNav from "../components/WithoutNav";
import HomePage from "../Pages/HomePage";
import PageNotFound from "../Pages/PageNotFound";
import PreviewPage from "../Pages/PreviewPage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import ScrollToTop from "../components/ScrollToTop";

const App = () => {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/image/:id" element={<PreviewPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
