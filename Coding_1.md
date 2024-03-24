import React, { useState } from 'react'

function App() {
    const [cont, setCount] = useState(0);
    const handleCountUpdate = () => {
        setCount(count + 1);

    };
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick= { handleCountUpdate }>Update</button>
    </div>
  )
}

export default App
