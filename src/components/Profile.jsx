const Profile = ({ image }) => {
    return (
    <>
    <div className="p-4 flex flex-col items-center">
        <img 
            src={image}
            alt="profile picture"
            className = "w-32 h-32 rounded-full border-2 border-gray-300"
        />
    </div>
    <div className="p-4 flex flex-col items-center">
        <p>
            Your Selected Tours
        </p>
    </div>
    </>
    );
};

export default Profile;