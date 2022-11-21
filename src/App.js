import "./App.css";
import About from "./components/pages/About";
import HeroPage from "./components/pages/HeroPage";
import Header from "./components/Shared/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroPage></HeroPage>
      <About></About>
    </div>
  );
}

export default App;
