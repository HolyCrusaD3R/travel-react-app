import Header from "./Header";
import LoginForm from "./LoginForm";

const SignupPage = ({ onLanguageSwitch, currentContent }) => {
    return (
        <>
             <Header onLanguageSwitch={onLanguageSwitch} currentContent={currentContent}/>
             <LoginForm currentContent={currentContent}/>
        </>
    );
}

export default SignupPage;