import './App.sass';
import Header from './components/header';
import Home from './components/home';
import Services from './components/services';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <Services />

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
