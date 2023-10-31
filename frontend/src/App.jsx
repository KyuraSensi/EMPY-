import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Signup from "./pages/SignUpPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SuggestionPage from "./pages/SuggestionPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/suggestion" element={<SuggestionPage/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
 