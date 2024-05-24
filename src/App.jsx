import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/myFooter";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Products />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
