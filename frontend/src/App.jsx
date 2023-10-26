import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Signup from "./pages/SignUpPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SuggestionPage from "./pages/SuggestionPage";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/suggestion" element={<SuggestionPage/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
 