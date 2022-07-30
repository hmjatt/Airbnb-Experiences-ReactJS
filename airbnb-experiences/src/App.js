import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";
import "./App.css";

const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
});

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <section className="cards-list">{cards}</section>
            <Footer />
        </div>
    );
}

export default App;
