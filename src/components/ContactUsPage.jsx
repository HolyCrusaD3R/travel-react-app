import Header from "./Header";
import ContactUsForm from "./ContactUsForm";

const ContactUsPage = ({ onLanguageSwitch, currentContent }) => {
    return (
        <>
             <Header onLanguageSwitch={onLanguageSwitch} currentContent={currentContent}/>
             <ContactUsForm currentContent={currentContent}/>
        </>
    );
};

export default ContactUsPage;