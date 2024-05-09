
import './App.css';
import  Navbar  from './components/Navbar';
import TextForms from './components/TextForms';
import { useState } from 'react'
import Alert from './components/Alert';

function App() {

 

  const [mode , setMode] = useState('light');
  const [alert , setAlert] =useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type: type  
    })

  }

  const toggleMode =()=>{
    if(mode  ==='light'){
      setMode ('dark')
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }

  return (
  <>
    <Navbar text="TextUtils" mode={mode}  toggleMode={toggleMode}  />
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextForms  showAlert={showAlert}heading="Enter the text to analyze" mpode={mode}/>
    </div>
  </>
  );
}

export default App;
