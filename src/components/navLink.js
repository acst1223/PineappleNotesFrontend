import { Link } from "react-router-dom";

const NavLinkComponent = ({ linkName, linkTo }) => {
    return (
        <li>
            <div className="middle-box"></div>
            <Link to={linkTo}>{linkName}</Link>
        </li>
    );
}

export default NavLinkComponent;