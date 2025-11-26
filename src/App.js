// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';



function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const [alert, setAlert] = useState (null);

  const showAlert = (message, type) =>{
setAlert({
  msg:message,
  type:type
})
setTimeout (()=>
  {
    setAlert(null);

  },2000);
}
const toggleMode =()=>{
  if(mode === 'light'){

    setMode('dark');
    document.body.style.backgroundColor = '#1A2A4F';
    document.body.style.color='white';
    showAlert("Dark Mode is Enable", "success");
    // document.body.style.fontFamily='Lucida Handwriting';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
      document.body.style.color='black';
      showAlert("Light Mode is Enable", "success");
      
  }
}
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
        <Navbar tital="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        </div>
        {/* <div className="container my-3">
              <About/>
        </div> */}
     
        {/* <Navbar/> */}
    </>
  );
}

export default App;
