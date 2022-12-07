import { useEffect, useState } from 'react';
import './App.css';

const App = ()=> {
  const [job, setJob] = useState("");
  
  const findAdvice = async() => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setJob(data.slip.advice);
  }
  
  useEffect(() => {
   findAdvice();
  }, [])

  return (
    <div className="app">
      <div className="card">
        <h1 className='heading'>{job}</h1>
        <button className='button' onClick={()=>findAdvice()}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
