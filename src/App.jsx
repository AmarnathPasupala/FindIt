import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import SearchBar from './SearchBar'
import WeatherApp from './WeatherApp'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <SearchBar/> */}
      <WeatherApp/>
    </div>   
  )
}

export default App
