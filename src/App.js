import './App.sass';
import Header from './components/header/header';
import Home from './components/home/home';
import Services from './components/services/services';
import Testimonials from './components/testimonials/testimonials';
import About from './components/about/about';
import How from './components/how/how';
import data from './data.json'

function App() {
  return (
    <div className="App container-fluid">
      <header>
        <Header header={data.header} />
      </header>
      <main>
        <Home home={data.home} />
        <Services services={data.services} />
        <About about={data.about} />
        {data.howSections.map((how, i)=><How key={i} {...how} />)}
        <Testimonials testimonials={data.testimonials} />
        {/* <Partners data={data} /> */}
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
