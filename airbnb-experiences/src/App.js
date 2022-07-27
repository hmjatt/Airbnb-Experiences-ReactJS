import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
		<Navbar />
		<Hero />
		<Card />
		<Footer />
    </div>
  );
}

export default App;
