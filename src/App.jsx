import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Home from "./components/Home";

import Georgia from "../public/DestinationPhotos/Georgia.png";
import France from "../public/DestinationPhotos/France.png";
import Greece from "../public/DestinationPhotos/Greece.png";
import Italy from "../public/DestinationPhotos/Italy.png";
import Japan from "../public/DestinationPhotos/Japan.png";
import Morroco from "../public/DestinationPhotos/Morroco.png";

const content = {
    'Georgia': {
        "Flag": "🇬🇧",
        "Home": "მთავარი გვერდი",
        "Signup": "გაწევრიანება",
        "Name": "სახელი",
        "None": "არაფრით",
        "SortBy": "დალაგება:",
        "Asc": "ზრდადობით",
        "Desc": "კლებადობით",
        "Starts": "იწყება:",
        "TimeLeft": "დაწყებამდე:",
        "Year": " წელი",
        "Day": " დღე",
        "Hour": " საათი",
        "Minute": " წუთი",
        "Second": " წამი",
        'toursData': [
          {
            id: 1,
            name: "საქართველო",
            description: "საქართველოს მაღალმთიანი ტური",
            startTime: new Date("2024-07-17T10:00:00"),
            duration: 2 * 60 * 60,
            image: Georgia,
          },
          {
            id: 2,
            name: "საფრანგეთი",
            description: "აღმოაჩინე პარიზის საიდუმლოებები",
            startTime: new Date("2024-10-05T15:00:00"),
            duration: 5 * 60 * 60,
            image: France,
          },
          {
            id: 3,
            name: "საბერძნეთი",
            description: "უძველესი ქვეყანა უძველესი კულტურით",
            startTime: new Date("2025-06-08T09:00:00"),
            duration: 3 * 60 * 60,
            image: Greece,
          },
          {
            id: 4,
            name: "იტალია",
            description: "იმოგზაურე ქალაქში, რომელიც წყალზე აშენდა",
            startTime: new Date("2025-08-12T09:00:00"),
            duration: 3 * 60 * 60,
            image: Italy,
          },
          {
            id: 5,
            name: "იაპონია",
            description: "იაპონური საკურას ყვავილობა",
            startTime: new Date("2025-03-04T12:00:00"),
            duration: 1 * 60 * 60,
            image: Japan,
          },
          {
            id: 6,
            name: "მოროკო",
            description: "იმოგზაურე ქვიშის ზღვაზე",
            startTime: new Date("2026-11-04T12:00:00"),
            duration: 5 * 60 * 60,
            image: Morroco,
          },
        ],
    },
    'English': {
        "Flag": "🇬🇪",
        "Home": "Home",
        "Signup": "Sign up",
        "Name": "Name",
        "None": "None",
        "SortBy": "Sort by:",
        "Asc": "Asc",
        "Desc": "Desc",
        "Starts": "Starts at:",
        "TimeLeft": "Time left:",
        "Year": "y",
        "Day": "d",
        "Hour": "h",
        "Minute": "m",
        "Second": "s",
        'toursData': [
          {
            id: 1,
            name: "Georgia",
            description: "Georgia Highlands Hike",
            startTime: new Date("2024-07-17T10:00:00"),
            duration: 2 * 60 * 60,
            image: Georgia,
          },
          {
            id: 2,
            name: "France",
            description: "Secrets of Paris",
            startTime: new Date("2024-10-05T15:00:00"),
            duration: 5 * 60 * 60,
            image: France,
          },
          {
            id: 3,
            name: "Greece",
            description: "Discover the ancient gods of the Greek",
            startTime: new Date("2025-06-08T09:00:00"),
            duration: 3 * 60 * 60,
            image: Greece,
          },
          {
            id: 4,
            name: "Italy",
            description: "Travel the city built on water",
            startTime: new Date("2025-08-12T09:00:00"),
            duration: 3 * 60 * 60,
            image: Italy,
          },
          {
            id: 5,
            name: "Japan",
            description: "Japanese Sakura Blossom Tour",
            startTime: new Date("2025-03-04T12:00:00"),
            duration: 1 * 60 * 60,
            image: Japan,
          },
          {
            id: 6,
            name: "Morroco",
            description: "Travel the sea of sand",
            startTime: new Date("2026-11-04T12:00:00"),
            duration: 5 * 60 * 60,
            image: Morroco,
          },
        ],
    },
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
