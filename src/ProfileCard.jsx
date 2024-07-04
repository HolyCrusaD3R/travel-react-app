import Profile from "./Profile";
import ChosenTours from "./ChosenTours";

import ProfilePicture from "/ProfilePictures/DefaultProfilePicture.jpg"


const ProfileCard = ({ currentContent, chosenTours }) => {
    return (
    <div className="max-w-sm mx-auto shadow-md bg-gray-800 text-white text-xl rounded-lg overflow-hidden">
        <Profile image={ProfilePicture} currentContent={currentContent} />
        <ChosenTours currentContent={currentContent} chosenTours={chosenTours} />
    </div>);
};

export default ProfileCard;