import "./App.css";
import About from "./components/pages/About";
import HeroPage from "./components/pages/HeroPage";
import MySkill from "./components/pages/MySkill";
import Header from "./components/Shared/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroPage></HeroPage>
      <About></About>
      <MySkill></MySkill>
    </div>
  );
}

export default App;
