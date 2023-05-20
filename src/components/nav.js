import React from "react";

import NavLinkComponent from "./navLink";

const NavComponent = ({ navList }) => {
    return (
        <nav>
            <ul>
                {navList.map((navItem, index) => (
                        <NavLinkComponent
                            key={index}
                            linkName={navItem.linkName}
                            linkTo={navItem.linkTo}
                            isLast={index === navList.length - 1}
                        />
                    )
                )}
            </ul>
        </nav>
    )
}

export default NavComponent;