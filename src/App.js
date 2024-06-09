import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sidebar from './components/Sidebar';


function App() {
  const [homeWidth, setHomeWidth] = useState('95vw'); 
  const [sidebarWidth, setSidebarWidth] = useState('5vw'); 
  const [navbarWidth, setNavbarWidth] = useState('95vw');

  const handleWidthChange = () => {
    if (homeWidth === '95vw') {
      setHomeWidth('80vw');
      setSidebarWidth('20vw');
      setNavbarWidth('80vw');
    } else {
      setHomeWidth('95vw');
      setSidebarWidth('5vw');
      setNavbarWidth('95vw');
    }
  };
  return (
    
    <>
      <div className="App">
        <Sidebar width={sidebarWidth} onToggleWidth={handleWidthChange}/>
       <Navbar  width={navbarWidth} />
        <Home width={homeWidth}/>
        {
          // showLeftslider && 
        }
      </div>
    </>
  );
}

export default App;
