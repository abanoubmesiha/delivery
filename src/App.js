import './App.sass';
import Header from './components/header/header';
import Home from './components/home/home';
import Services from './components/services/services';
import About from './components/about/about';
import data from './data.json'

function App() {
  return (
    <div className="App container-fluid">
      <header>
        <Header data={data} />
      </header>
      <main>
        <Home data={data} />
        <Services data={data} />
        <About data={data} />

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
