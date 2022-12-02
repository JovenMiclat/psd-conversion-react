const NavbarList = ({ulClass}) => {
    return (
        <ul className={ulClass}>
            <li className="nav-item">
                <a className="nav-link" href="#discover" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => {window.location.replace("/#discover");}}>DISCOVER OQULO</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#features" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => {window.location.replace("/#features");}}>FEATURES</a>
            </li>
            <li className="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <a className="nav-link" href="#contact" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => {window.location.replace("/#contact");}}>CONTACT</a>
            </li>
        </ul>
    )
}

export default NavbarList
