import React, {useState}from 'react'



export default function TextForm(props) {

    const handaleUpClick= () =>{
        // console.log("Uppercase was cliked" + text);
        let newText=text.toUpperCase();
         setText(newText); // correct way
    }

     const handaleLoClick= () =>{
        // console.log("Uppercase was cliked" + text);
        let newText=text.toLocaleLowerCase();
         setText(newText); // correct way
    }
    
   
    const handaleClear= ()=>{
      let newText='';
      setText(newText);

    }
    
    const handaleOnChange= (e) =>{
        // console.log("Uppercase was cliked");
        setText(e.target.value);
    }
    const handaleCopy = ()=>{
      console.log("T am copy")
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handaleExtraSpaces =()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const [text, setText]= useState('');
    // text="new state"; //wrong way
    
  return (
   <div>
     <h1>{props.heading} </h1>
<div className="mb-3">
   
  <textarea className="form-control" placeholder="Enter Your Content" value= {text} onChange={handaleOnChange} id="myBox" rows="8"></textarea><br></br>
     <button  className="btn btn-primary mx-2" onClick={handaleClear}>Clear</button >
    <button  className="btn btn-primary mx-2" onClick={handaleUpClick}>Convert to Uppercase</button >
    <button  className="btn btn-primary mx-2" onClick={handaleLoClick}>Convert to Lowercase</button >
        <button  className="btn btn-primary mx-2" onClick={handaleCopy}>Copy All Text</button >
        <button  className="btn btn-primary mx-2" onClick={handaleExtraSpaces}>Romove Extra Space</button >
       
    
  </div>

  <div className="container my-3">
    <h2>Your Text Summary</h2>
    <p><b>{text.split(" ").length }</b> Youe text area in Total Charecter Count Is :  
 <b> {text.length} </b></p>

 <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
 <h2>Preview</h2>
 <p>{text}</p>
  </div>

</div> 
    
  ) 
}
