import React, {Component} from "react";

import {Link} from "react-router-dom";

import SideNav from "components/SideNav";
import withStyles from "react-jss";
import layoutStyles from "styles/layout";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

import Tooltip from "components/ToolTip";

class Layout extends Component {
    render() {
        return (
            <div className={this.props.classes.appContainer}>
                <div className={this.props.classes.logo}>
                    <Link to="/" className={this.props.classes.navAnchor}>
                        Kailo
                    </Link>
                </div>

                <header className={this.props.classes.header}>
                    <div className={this.props.classes.pageTitle}>
                        {this.props.pageTitle}
                    </div>
                    <ul className={this.props.classes.options}>
                        <li>
                            <Link
                                to="/settings"
                                className={this.props.classes.navAnchor}
                            >
                                <Tooltip
                                    position={"bottom"}
                                    message={"Settings"}
                                >
                                    <FontAwesomeIcon icon={faCogs} />
                                </Tooltip>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/logout"
                                className={this.props.classes.navAnchor}
                            >
                                <Tooltip position={"bottom"} message={"Logout"}>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </Tooltip>
                            </Link>
                        </li>
                    </ul>
                </header>
                <SideNav />
                <main className={this.props.classes.main}>
                    {this.props.children}
                </main>
                <footer className={this.props.classes.footer} />
            </div>
        );
    }
}

export default withStyles(layoutStyles)(Layout);
