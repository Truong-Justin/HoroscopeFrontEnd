import {Banner} from './Banner.jsx';
import {Horoscope} from './Horoscope.jsx';
import './App.css'

// Parent component renders the Banner and Horoscope
// child components.
function App() {
  return (
    <>
      <Banner />
      <Horoscope />
    </>
  )
}

export default App
