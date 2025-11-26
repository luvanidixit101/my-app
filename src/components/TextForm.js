import React, {useState}from 'react'



export default function TextForm(props) {

    const handaleUpClick= () =>{
        // console.log("Uppercase was cliked" + text);
        let newText=text.toUpperCase();
         setText(newText); // correct way
         props.showAlert("Converted to Uppercase !", "success");
    }

     const handaleLoClick= () =>{
        // console.log("Uppercase was cliked" + text);
        let newText=text.toLocaleLowerCase();
         setText(newText); // correct way
         props.showAlert("Converted to Lowercase !", "success");
    }
    
   
    const handaleClear= ()=>{
      let newText='';
      setText(newText);
      props.showAlert("Textbox in Clear !", "warning");

    }
    
    const handaleOnChange= (e) =>{
        // console.log("Uppercase was cliked");
        setText(e.target.value);
    }
    const handaleCopy = ()=>{
      console.log("I am copy")
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
       props.showAlert("All text is Copy", "success");
    }

    const handaleExtraSpaces =()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
       props.showAlert("Romove text in Textbox", "danger");
    }

    const [text, setText]= useState('');
    // text="new state"; //wrong way
    
  return (
   <div>
     <h1>{props.heading} </h1>
<div className="mb-3">

<div className="mb-3">
  <textarea
    className="form-control"
    placeholder="Enter Your Content"
    value={text}
    onChange={handaleOnChange}
    id="myBox"
    rows="8"
  ></textarea>

  <div className="button-group mt-3">
    <button className="btn btn-primary" onClick={handaleClear}>Clear</button>
    <button className="btn btn-primary" onClick={handaleUpClick}>Uppercase</button>
    <button className="btn btn-primary" onClick={handaleLoClick}>Lowercase</button>
    <button className="btn btn-primary" onClick={handaleCopy}>Copy</button>
    <button className="btn btn-primary" onClick={handaleExtraSpaces}>Remove Spaces</button>
  </div>
</div>

</div>

  <div className="container my-3">
    <h2>Your Text Summary</h2>
    <p><b>{text.split(" ").length }</b> Youe text area in Total Charecter Count Is :  
 <b> {text.length} </b></p>

 <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
 <h2>Preview</h2>
 <p>{text.length>0?text:"Preview Your Content"}</p>
  </div>

</div> 
    
  ) 
}
