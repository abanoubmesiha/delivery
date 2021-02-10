import './App.sass';
import Header from './components/header/header';
import Home from './components/home/home';
import Services from './components/services/services';
import About from './components/about/about';
import How from './components/how/how';
import Testimonials from './components/testimonials/testimonials';
import Partners from './components/partners/partners';
import Footer from './components/footer/footer';
import data from './data.json'

function App() {
  return (
    <div className="App container-fluid">
      <Header header={data.header} />
      <main>
        <Home home={data.home} />
        <Services services={data.services} />
        <About about={data.about} />
        {data.howSections.map((how, i)=><How key={i} {...how} />)}
        <Testimonials testimonials={data.testimonials} />
        <Partners partners={data.partners} />
      </main>
      <Footer header={data.footer} />
    </div>
  );
}

export default App;
