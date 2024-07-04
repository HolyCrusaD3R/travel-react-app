import Header from "./Header";
import ProductGallery from "./ProductGallery";

const Home = ({ onLanguageSwitch, currentContent }) => {
    return (
    <>
      <Header onLanguageSwitch={onLanguageSwitch} currentContent={currentContent}/>
      <ProductGallery currentContent={currentContent}/>
    </>
  )
}

export default Home;