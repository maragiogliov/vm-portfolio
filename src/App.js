import './App.css';
import Landing from './components/Landing/Landing';
import Header from '../src/components/Header/Header';
import Projects from '../src/components/Projects/Projects';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <>
        <Header />
        <Landing />
        <Projects />
        <Contact />
    </>
  );
}

export default App;
