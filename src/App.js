import './App.sass';
import Header from './components/header';
import Home from './components/home';
import Services from './components/services';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <header>
        <Header data={data} />
      </header>
      <main>
        <Home data={data} />
        <Services data={data} />

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
