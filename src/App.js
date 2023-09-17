import Display from './Display'
import Input from './Input'
import { useState } from 'react';

function App() {
  const [ colorValue, setColorValue ] = useState("");
  const [ hexValue, setHexValue ] = useState("");
  return (
    <div className="App">
      <Display
        colorValue = {colorValue}
        hexValue = {hexValue}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;