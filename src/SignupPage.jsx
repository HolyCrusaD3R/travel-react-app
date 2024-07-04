import Header from "./Header";
import SignupForm from "./SignupForm";

const SignupPage = ({ onLanguageSwitch, currentContent }) => {
    return (
        <>
             <Header onLanguageSwitch={onLanguageSwitch} currentContent={currentContent}/>
             <SignupForm currentContent={currentContent}/>
        </>
    );
}

export default SignupPage;