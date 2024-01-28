import { useState } from 'react'
import Slider from './components/Slider';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleAppValueChange = (newValue: number) => {
    setCount(newValue);
  };

  return (
    <div>
      <h1>Slider App</h1>
      <Slider onValueChange={handleAppValueChange} />
      <p>Value in App Component: {count}</p>
    </div>
  );
}

export default App
