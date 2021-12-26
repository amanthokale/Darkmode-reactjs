import React, { useState } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';

export default function App() {
  //DArkmode
  const [mode, setmode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#212629';
      document.body.style.color = 'white';
      givealert('Dark mode turned on', 'success');
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      givealert('Light mode turned on', 'success');
    }
  };

  //ALert
  const [alert, setalert] = useState(null);
  const givealert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  //components
  return (
    <>
      <Navbar
        title="ReactJs"
        about="State"
        mode={mode}
        togglemode={togglemode}
      />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <Textform
        givealert={givealert}
        heading="Enter the text to analyze"
        mode={mode}
      />
      {/* <About /> */}
    </>
  );
}
