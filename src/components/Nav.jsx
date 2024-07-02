import NavLink from "./NavLink";



const Nav = ({onLanguageSwitch, currentContent}) => {
    return (
        <>
            <nav className="flex space-x-4">
                <NavLink href="/home">{currentContent.Home}</NavLink>
                <NavLink href="/signup">{currentContent.Signup}</NavLink>
                <NavLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</NavLink>
                <button onClick={onLanguageSwitch}>{currentContent.Flag}</button>
            </nav>
        </>
    );
}

export default Nav;