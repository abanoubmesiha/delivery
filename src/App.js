import './App.sass';
import Header from './components/header/header';
import Home from './components/home/home';
import Services from './components/services/services';
import About from './components/about/about';
import How from './components/how/how';
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
        {data.howSections.map((how, i)=><How key={i} {...how} />)}
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
