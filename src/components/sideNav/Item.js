import React, {useState} from "react";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

import withStyles from "react-jss";
import sideNavStyles from "styles/components/sideNav";

const Item = props => {
    const [isExpanded, toggleExpand] = useState(false);

    const onClick = e => {
        if (props.expandable) {
            toggleExpand(!isExpanded);
        }
    };

    const className = props.isActive
        ? `${props.classes.navElementActive} ${props.classes.navElement}`
        : `${props.classes.navElement}`;

    const expandableIcon = (
        <FontAwesomeIcon
            className={props.classes.navElementCaret}
            icon={isExpanded ? faCaretUp : faCaretDown}
        />
    );

    const parentItem = props.toLink ? (
        <Link to={props.toLink} className={props.classes.navAnchor}>
            <span className={className} onClick={onClick}>
                <FontAwesomeIcon icon={props.icon} />
                &nbsp; {props.name}
            </span>
        </Link>
    ) : (
        <span className={className} onClick={onClick}>
            <FontAwesomeIcon icon={props.icon} />
            &nbsp; {props.name}
            {props.expandable && expandableIcon}
        </span>
    );

    return (
        <div>
            {parentItem}
            {(isExpanded || props.isActive) && !props.toLink && (
                <ul className={props.classes.list}>
                    {props.list.map(item => (
                        <li className={props.classes.navElementItem}>
                            <Link
                                className={props.classes.navElementAnchor}
                                to={item.link}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default withStyles(sideNavStyles)(Item);
