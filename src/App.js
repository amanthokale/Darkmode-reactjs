import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      <Router>
        <Navbar
          title="ReactJs"
          about="About us"
          mode={mode}
          togglemode={togglemode}
          textutil="Textutil"
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            path="/"
            element={
              <Textform
                givealert={givealert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            }
          />

          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}
