import React, { useState } from 'react';

export default function About(props) {
  // const [darkmode,setdarkmode]= useState({
  //   color=black,
  //   backgroundColor=white
  // })
  // const darkmode = ()=>{
  const [btntext, setbtn] = useState('Enable dark mode');

  // const [myStyle, setStyle] = useState({});

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'rgb(54, 62, 70)' : 'white',
    // border: '1px solid white',
  };

  return (
    <div className="container my-3 " style={myStyle}>
      <h2 className="mt-15 mb-10">About Us</h2>
      <div style={myStyle} className="accordion" id="accordionExample">
        <div style={myStyle} className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>Analyze your text</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <p>You can analyze your text here with our textutils</p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b>Free to use</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>Website is free to use</p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b>Browser compatible</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>Website is responsive and compatible with all browsers</p>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={togglestyle} className="my-3 btn-primary btn">
        {btntext}
      </button> */}
    </div>
  );
}
