import Header from "./Header";
import ProfileCard from "./ProfileCard";

const ProfilePage = ({ onLanguageSwitch, currentContent, chosenTours }) => {
    return (
        <div>
             <Header onLanguageSwitch={onLanguageSwitch} currentContent={currentContent}/>
             <ProfileCard currentContent={currentContent}/>
        </div>
    );
}

export default ProfilePage;