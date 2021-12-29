import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  // text="aman";
  // setText('aman');
  const Upclick = () => {
    setText(text.toUpperCase());
    props.givealert('Converted to uppercase', 'success');
    // console.log('clicked');
  };
  const Dclick = () => {
    setText(text.toLowerCase());
    props.givealert('Converted to lowercase', 'success');
  };
  const clear = () => {
    setText('');
    props.givealert('Text cleared', 'success');
  };
  const RXS = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(' '));
    props.givealert('Extra spaces removed', 'success');
  };
  const CTC = () => {
    navigator.clipboard.writeText(text);
    props.givealert('Text copied to clipboard', 'success');
  };
  const changer = (event) => {
    setText(event.target.value);
  };

  // const Dchange = () => {
  //   console.log('hjxcvjkhxfkjcvhkjxchvkj');
  // };
  return (
    <>
      {/* <h2>{text}</h2> */}
      <div className="container my-5">
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === 'dark' ? 'black' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            value={text}
            placeholder="Enter text here"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={changer}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1"
          onClick={Upclick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={Dclick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={RXS}
        >
          Remove extra spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={CTC}
        >
          Copy to clipboard
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-1"
          onClick={clear}
          // onchange={Dchange}
        >
          Clear
        </button>

        <div className="container my-5">
          <h5>Summary</h5>
          <p className="my-3">
            There are {text.length} characters and {'  '}
            {
              text.split(/\s+/).filter((element) => {
                return element.length != 0;
              }).length
            }
            {'  '}
            Words
          </p>
          <p>
            You wil require{' '}
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length != 0;
              }).length}
            {'  '}
            min to read these word(s)
          </p>
        </div>

        <div className="container my-3">
          <h6>Preview-</h6>
          <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
        </div>
      </div>
    </>
  );
}
