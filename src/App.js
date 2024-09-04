import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Grid from "./components/Grid";
import Click from "./components/Click";
import Destination from "./components/Destination";
import Review from "./components/Review";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Grid />
      <Click />
      <Destination />
      <Review />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
