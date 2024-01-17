import React from 'react'
import CustomBackground from './components/Background'
import Foreground from './components/Foreground';

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <CustomBackground />
      <Foreground/>
    
    </div>
  );
}

export default App;