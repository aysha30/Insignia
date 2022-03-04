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
      {/* Divider */}
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
      {/* Fab */}
      <div className="flex justify-end sticky bottom-5 mr-5 lg:bottom-10 lg:mr-10">
        <button className='rounded-full p-3 bg-midnight hover:bg-gray-900 active:bg-gray-900 focus:bg-gray-900 shadow shadow-card hover:shadow-gray-800 active:shadow-gray-800 focus:shadow-gray-800 
        text-gray-200 hover:text-white active:text-blue focus:text-blue'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
