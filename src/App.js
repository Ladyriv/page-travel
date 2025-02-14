//import imag from '../src/img/blogs_3.png';
import './App.css';
import About from './components/Home/About';
import Blogs from './components/Home/Blogs';
import Experiences from './components/Home/Experiences';
import Footer from './components/Home/Footer';
import Navbar from './components/Home/Navbar';
import Newsletter from './components/Home/Newsletter';
import TravelForm from './components/Home/TravelForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
      </header>
      <About />
      <Experiences />
      <Blogs />
      <TravelForm />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
