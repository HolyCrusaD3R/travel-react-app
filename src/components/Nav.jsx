import NavLink from "./NavLink";



const Nav = ({onLanguageSwitch, currentContent}) => {
    return (
        <>
            <nav className="flex space-x-4">
                <NavLink href="/home">{currentContent.Home}</NavLink>
                <NavLink href="/signup">{currentContent.Signup}</NavLink>
                <NavLink href="/login">{currentContent.Login}</NavLink>
                <NavLink href="/contactus">{currentContent.ContactUs}</NavLink>
                <NavLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</NavLink>
                {/* <NavLink href="/profile">{currentContent.Profile}</NavLink> */}
                <button onClick={onLanguageSwitch}>{currentContent.Flag}</button>
            </nav>
        </>
    );
}

export default Nav;