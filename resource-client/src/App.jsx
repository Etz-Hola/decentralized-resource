import Header from "./components/Header";
import Hero from "./components/Hero";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <HashLoader color="#0F051D" />
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <MainBody />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
