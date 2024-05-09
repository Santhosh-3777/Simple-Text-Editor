import { useState } from "react"
import React  from 'react'

export default function TextForms(props) {
    const[text,setText]=useState('')

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to uppercase", "success"); // Triggering alert
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Text converted to lowercase', 'success'); // Triggering alert

    }
    const handleRemoveSpacesClick = ()=>{
        let newText = text.replace(/\s+/g, '');
        setText(newText)
    }

    const handleClickClearText=()=>{
        let newText = ''
        setText(newText)
        props.showAlert('Spaces removed from text', 'success'); // Triggering alert

    }

    const handleRemoveSpecialCharsClick = () => {
        const newText = removeSpecialCharacters(text);
        setText(newText);
        props.showAlert('Special characters removed', 'success'); // Triggering alert
    };
    function removeSpecialCharacters(text) {
        return text.replace(/[^a-zA-Z0-9 ]/g, '');
    }


    const handleOnChange = (event)=>{
     setText(event.target.value)
    }

  return (
    <>
    <div className="container"    >
        <h1>{props.heading }</h1>
        <div className="mb-3">                                      
             <label htmlFor="myBox" className="form-label"> </label>
             <textarea className="form-control"  value={text}  onChange={handleOnChange}  style={{ backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black' }}
 id="myBox" rows="8"></textarea>
        </div>
             <button className='btn btn-primary mx-2'  onClick={handleUpClick} >Convert to Uppercase</button>
             <button className='btn btn-primary mx-2'  onClick={handleLoClick} >Convert to Lowercase</button>
             <button className='btn btn-primary mx-2'  onClick={handleRemoveSpacesClick} >Remove Spaces</button>
             <button className='btn btn-primary mx-2'  onClick={handleRemoveSpecialCharsClick} >Remove Special Characters</button>
             <button className='btn btn-primary mx-2'  onClick={handleClickClearText} >Clear</button>




    </div>
    <div className="container" >
        <h1>TEXT SUMMERY</h1>
        <p>Total words = {text.split(" ").length}  <br/>
           Characters = {text.length } <br/>
           Time taken to Read : {0.008*text.split(" ").length}</p>

    </div>

    </>
  )
}
