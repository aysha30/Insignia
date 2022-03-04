import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import './App.css';
import Features from './components/Features/Features';
import Download from './components/Download/Download';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

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
      <div className="divide-y divide-lilac divide-double mb-10">
        <div className="divide-y divide-lilac divide-double pb-0.5">
          <div></div>
          <div></div>
        </div>
        <div>
          <div className="m-5 md:mx-40 md:my-20">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
