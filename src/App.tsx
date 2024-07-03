import { Application } from './components/Application/Application';
import "./App.css"
import { Skills } from './components/Skills/Skills';
import { Counter } from './components/Counter/Counter';
function App() {
  const skills = ["html", "Css", "JavaScript"];
  return (
    <div className="App">
      {/* <Application/>
      <Skills skills={skills}/> */}
      <Counter />
    </div>
  );
}

export default App;
