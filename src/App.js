// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {
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
        <Navbar tital="TextUtils" aboutText="About Us"/>
        <div className="container my-3">
              <TextForm heading="Enter the text to analyze below"/>
        </div>
        {/* <div className="container my-3">
              <About/>
        </div> */}
     
        {/* <Navbar/> */}
    </>
  );
}

export default App;
