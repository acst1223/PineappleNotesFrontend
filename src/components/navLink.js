import { Link } from "react-router-dom";

const NavLinkComponent = ({ linkName, linkTo, isLast }) => {
    return (
        <li>
            <div className={`middle-box ${isLast ? "middle-box-last" : ""}`}></div>
            <Link to={linkTo}>{linkName}</Link>
        </li>
    );
}

export default NavLinkComponent;