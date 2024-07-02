import Header from "./Header";

const Home = ({ onLanguageSwitch, currentContent }) => {
    return (
    <>
      <Header onLanguageSwitch={onLanguageSwitch} currentContent={currentContent}/>
    </>
  )
}

export default Home;