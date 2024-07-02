const NavLink = ({ children, ...rest }) => {
    return (
        <a
            {...rest}
            className="relative px-3 py-2 transition duration-300 ease-in-out transform hover:bg-gray-700 rounded"
        >
            {children}
        </a>
    );
}

export default NavLink;