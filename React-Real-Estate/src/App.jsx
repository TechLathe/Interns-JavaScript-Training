import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './components/Hero/Hero.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
