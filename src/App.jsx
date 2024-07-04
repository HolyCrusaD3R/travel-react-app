import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

import Home from "./Home";
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ContactUsPage from './ContactUsPage';
// import ProfilePage from './components/ProfilePage';

import Georgia from "/DestinationPhotos/Georgia.png";
import France from "/DestinationPhotos/France.png";
import Greece from "/DestinationPhotos/Greece.png";
import Italy from "/DestinationPhotos/Italy.png";
import Japan from "/DestinationPhotos/Japan.png";
import Morroco from "/DestinationPhotos/Morroco.png";
import Kutaisi from "/DestinationPhotos/Kutaisi.jpg";
import Vietnam from "/DestinationPhotos/Vietnam.webp";

const content = {
    'Georgia': {
        "Flag": "🇬🇧",
        "Home": "მთავარი გვერდი",
        "Signup": "გაწევრიანება",
        "Login": "შესვლა",
        "Profile": "პროფილი",
        "Name": "სახელით",
        "NameOfForm": "სახელი",
        "None": "არაფრით",
        "Date": "თარიღით",
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
        "Search": "მოძებნე",
        "Country": "ქვეყანა",
        "All": "ყველა",
        "Georgia": "საქართველო",
        "France": "საფრანგეთი",
        "Greece": "საბერძნეთი",
        "Italy": "იტალია",
        "Japan": "იაპონია",
        "Morroco": "მაროკო",
        "Duration": "ხანგრძლივობა",
        "OneHourPlus": "1სთ+",
        "ThreeHourPlus": "3სთ+",
        "FiveHourPlus": "5სთ+",
        "YearLabel": "წელი",
        "FillAllFields": "შეავსეთ ყველა ველი",
        "SignupSuccess": "გაწევრიანება წარმატებულია",
        "LoginSuccess": "შესვლა წარმატებულია",
        "LoginWithFacebook": "შესვლა Facebook-ით",
        "Username": "მომხმარებლის სახელი",
        "Email": "ელექტრონული მეილი",
        "Password": "პაროლი",
        "YourSelectedTours": "არჩეული ტურები",
        "Price": "ღირებულება",
        "Total": "ჯამი",
        "Message": "მესიჯი",
        "ContactUs": "დაგვიკავშირდი",
        "Success": "წარმატებულია",
        'toursData': [
          {
            id: 1,
            name: "საქართველო",
            description: "საქართველოს მაღალმთიანი ტური",
            startTime: new Date("2024-07-17T10:00:00"),
            duration: 2 * 60 * 60,
            image: Georgia,
            price: 200,
          },
          {
            id: 2,
            name: "საფრანგეთი",
            description: "აღმოაჩინე პარიზის საიდუმლოებები",
            startTime: new Date("2024-10-05T15:00:00"),
            duration: 5 * 60 * 60,
            image: France,
            price: 600,
          },
          {
            id: 3,
            name: "საბერძნეთი",
            description: "უძველესი ქვეყანა უძველესი კულტურით",
            startTime: new Date("2025-06-08T09:00:00"),
            duration: 3 * 60 * 60,
            image: Greece,
            price: 300,
          },
          {
            id: 4,
            name: "იტალია",
            description: "იმოგზაურე ქალაქში, რომელიც წყალზე აშენდა",
            startTime: new Date("2025-08-12T09:00:00"),
            duration: 3 * 60 * 60,
            image: Italy,
            price: 400,
          },
          {
            id: 5,
            name: "იაპონია",
            description: "იაპონური საკურას ყვავილობა",
            startTime: new Date("2025-03-04T12:00:00"),
            duration: 1 * 60 * 60,
            image: Japan,
            price: 600,
          },
          {
            id: 6,
            name: "მაროკო",
            description: "იმოგზაურე ქვიშის ზღვაზე",
            startTime: new Date("2025-11-04T12:00:00"),
            duration: 5 * 60 * 60,
            image: Morroco,
            price: 200,
          },
          {
            id: 7,
            name: "საქართველო",
            description: "ქუთაისი, ძველი დედაქალაქი",
            startTime: new Date("2024-08-17T10:00:00"),
            duration: 3 * 60 * 60,
            image: Kutaisi,
            price: 300,
          },
          {
            id: 8,
            name: "ვიეტნამი",
            description: "აღმოაჩინე გასაოცარი ჯუნგლები",
            startTime: new Date("2025-06-17T10:00:00"),
            duration: 4 * 60 * 60,
            image: Vietnam,
            price: 150,
          },
        ],
    },
    'English': {
        "Flag": "🇬🇪",
        "Home": "Home",
        "Signup": "Sign up",
        "Login": "Log in",
        "Profile": "Profile",
        "Name": "Name",
        "NameOfForm": "Name",
        "None": "None",
        "Date": "Date",
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
        "Search": "Search",
        "Country": "Country",
        "All": "All",
        "Georgia": "Georgia",
        "France": "France",
        "Greece": "Greece",
        "Italy": "Italy",
        "Japan": "Japan",
        "Morroco": "Morroco",
        "Duration": "Duration",
        "OneHourPlus": "1hr+",
        "ThreeHourPlus": "3hr+",
        "FiveHourPlus": "5hr+",
        "YearLabel": "Year",
        "FillAllFields": "Fill all fields",
        "SignupSuccess": "Signup Success",
        "LoginSuccess": "Logged in",
        "LoginWithFacebook": "Log in with Facebook",
        "Username": "Username",
        "Email": "Email",
        "Password": "Password",
        "YourSelectedTours": "Your selected tours",
        "Price": "Price",
        "Total": "Total",
        "Message": "Message",
        "ContactUs": "Contact us",
        "Success": "Success",
        'toursData': [
          {
            id: 1,
            name: "Georgia",
            description: "Georgia Highlands Hike",
            startTime: new Date("2024-07-17T10:00:00"),
            duration: 2 * 60 * 60,
            image: Georgia,
            price: 200,
          },
          {
            id: 2,
            name: "France",
            description: "Secrets of Paris",
            startTime: new Date("2024-10-05T15:00:00"),
            duration: 5 * 60 * 60,
            image: France,
            price: 600,
          },
          {
            id: 3,
            name: "Greece",
            description: "Discover the ancient gods of the Greek",
            startTime: new Date("2025-06-08T09:00:00"),
            duration: 3 * 60 * 60,
            image: Greece,
            price: 300,
          },
          {
            id: 4,
            name: "Italy",
            description: "Travel the city built on water",
            startTime: new Date("2025-08-12T09:00:00"),
            duration: 3 * 60 * 60,
            image: Italy,
            price: 400,
          },
          {
            id: 5,
            name: "Japan",
            description: "Japanese Sakura Blossom Tour",
            startTime: new Date("2025-03-04T12:00:00"),
            duration: 1 * 60 * 60,
            image: Japan,
            price: 600,
          },
          {
            id: 6,
            name: "Morroco",
            description: "Travel the sea of sand",
            startTime: new Date("2025-11-04T12:00:00"),
            duration: 5 * 60 * 60,
            image: Morroco,
            price: 200,
          },
          {
            id: 7,
            name: "Georgia",
            description: "Kutaisi, ex-capital city",
            startTime: new Date("2024-08-17T10:00:00"),
            duration: 3 * 60 * 60,
            image: Kutaisi,
            price: 300,
          },
          {
            id: 8,
            name: "Vietnam",
            description: "Discover breathtaking jungles",
            startTime: new Date("2025-06-17T10:00:00"),
            duration: 4 * 60 * 60,
            image: Vietnam,
            price: 150,
          },
        ],
    },
}

function App() {

  const [isEnglish, setIsEnglish] = useState(() => {
    // Retrieve the language preference from localStorage, default to true (English) if not set
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage ? savedLanguage === 'English' : true;
  });

  useEffect(() => {
    // Save the language preference to localStorage whenever it changes
    localStorage.setItem('language', isEnglish ? 'English' : 'Georgia');
  }, [isEnglish]);

  function updateLanguage() {
    setIsEnglish((prevIsEnglish) => !prevIsEnglish);
  }

  const currentContent = isEnglish ? content.English : content.Georgia;

  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home onLanguageSwitch={updateLanguage} currentContent={currentContent}/>} />
          <Route path="/home" element={<Home onLanguageSwitch={updateLanguage} currentContent={currentContent}/>} />
          <Route path="/signup" element={<SignupPage onLanguageSwitch={updateLanguage} currentContent={currentContent}/>} />
          <Route path="/login" element={<LoginPage onLanguageSwitch={updateLanguage} currentContent={currentContent}/>} />
          {/* <Route path="/profile" element={<ProfilePage onLanguageSwitch={updateLanguage} currentContent={currentContent}/>} /> */}
          <Route path="/contactus" element={<ContactUsPage onLanguageSwitch={updateLanguage} currentContent={currentContent}/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
