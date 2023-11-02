//import logo from './logo.svg';
import './App.css';  
import Heading from './components/Heading'
import Footer from './components/Footer' ;
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const backgroundColor = theme === 'light' ? '#fff' : '#333';
  const textColor = theme === 'light' ? '#333' : '#fff';

  return (
   <>
   <Heading />
      <div className="spacer">
        <div className="button-container">
          <button
            className="toggle-button"
            onClick={toggleTheme}
            style={{ backgroundColor, color: textColor }}
          >
            PROFILE
          </button>
        </div>
        <Footer/>
      </div>
      
   </>
   
  );
}

export default App;