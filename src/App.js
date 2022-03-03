import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import './App.css';
import Features from './components/Features/Features';
import Download from './components/Download/Download';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <div className="m-5 md:mx-40 md:my-20">
        <Intro />
        <Features />
        <Download />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
