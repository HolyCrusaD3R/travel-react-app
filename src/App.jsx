import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Home from "./components/Home";

const content = {
    'Georgia': {
        "Flag": "🇬🇧",
        "Home": "მთავარი გვერდი",
        "Signup": "გაწევრიანება",
    },
    'English': {
        "Flag": "🇬🇪",
        "Home": "Home",
        "Signup": "Sign up",
    }
}

function App() {

  const [isEnglish, setIsEnglish] = useState(true);

  function updateLanguage() {
    setIsEnglish((prevIsEnglish) => !prevIsEnglish);
  }
  
  const currentContent = isEnglish ? content.English : content.Georgia;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home onLanguageSwitch={updateLanguage} currentContent={currentContent}/>} />
          <Route path="/home" element={<Home onLanguageSwitch={updateLanguage} currentContent={currentContent}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
