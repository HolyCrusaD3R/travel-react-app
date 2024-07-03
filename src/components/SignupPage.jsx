import Header from "./Header";

const SignupPage = ({ onLanguageSwitch, currentContent }) => {
    return (
        <>
             <Header onLanguageSwitch={onLanguageSwitch} currentContent={currentContent}/>
        </>
    );
}

export default SignupPage;