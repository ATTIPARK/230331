import Header from "./components/Header";
import Introduce from "./components/main/Introduce";
import Portfolio from "./components/main/Portfolio";
import ContactMe from "./components/main/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    // Container
    <div className="bg-red-100 min-h-screen">
      <Header />
      <main>
        <Introduce />
        <Portfolio />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
