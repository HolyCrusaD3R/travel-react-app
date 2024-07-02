import Nav from "./Nav";

const Header = ({ onLanguageSwitch, currentContent }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
       Travel Company 
      </div>
      <Nav onLanguageSwitch={onLanguageSwitch} currentContent={currentContent}/>
    </header>
  );
}

export default Header;
