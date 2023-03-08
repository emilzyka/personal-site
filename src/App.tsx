import './App.css';
import Header from './components/Header';
import { useState, useRef } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [darkMode, darkModeSet] = useState<boolean>(true);
  const ref = useRef(null);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header darkMode={darkMode} darkModeSet={darkModeSet} />

      <main className='bg-white dark:bg-slate-900 text-gray-900 dark:text-white'>
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
