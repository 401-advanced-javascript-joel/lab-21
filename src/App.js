import React from "react";
import "./styles.scss";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}
