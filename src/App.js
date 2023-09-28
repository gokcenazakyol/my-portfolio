import logo from './logo.svg';
import './App.css';
import { NavBar } from '/Users/gokcenazakyol/Desktop/portfolio/src/components/NavBar.js';
import { Banner } from '/Users/gokcenazakyol/Desktop/portfolio/src/components/Banner.js';
import { Skills } from '/Users/gokcenazakyol/Desktop/portfolio/src/components/Skills.js';
import { Projects} from '/Users/gokcenazakyol/Desktop/portfolio/src/components/Projects.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Contact } from './components/Contact';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
