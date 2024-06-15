import { Application } from './components/Application/Application';
import "./App.css"
import { Skills } from './components/Skills/Skills';
function App() {
  const skills = ["html", "Css", "JavaScript"];
  return (
    <div className="App">
      <Application/>
      <Skills skills={skills}/>
    </div>
  );
}

export default App;
