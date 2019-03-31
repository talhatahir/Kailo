import React, {Component} from "react";
import {withRouter} from "react-router";
import {
    faTachometerAlt,
    faCoins,
    faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import Item from "components/sideNav/Item";
import withStyles from "react-jss";
import sideNavStyles from "styles/components/sideNav";

class SideNav extends Component {
    isActivePath = path => {
        return this.props.location.pathname === path;
    };

    render() {
        return (
            <nav className={this.props.classes.nav}>
                <Item
                    isActive={this.isActivePath("/")}
                    name={"Dashboard"}
                    icon={faTachometerAlt}
                    toLink="/"
                />
                <Item
                    name={"Finance"}
                    icon={faCoins}
                    expandable={true}
                    isActive={this.isActivePath("/finance")}
                    list={[
                        {
                            link: "/finance",
                            name: "Loans",
                        },
                    ]}
                />
                <Item
                    name={"Reports"}
                    icon={faChartBar}
                    expandable={true}
                    isActive={this.isActivePath("/reports")}
                    list={[
                        {link: "/reports", name: "Sales"},
                        {
                            link: "/reports/transactions",
                            name: "Transactions",
                        },
                        {
                            link: "/reports/profits",
                            name: "Profits",
                        },
                    ]}
                />
                <Item
                    name={"Support"}
                    icon={faChartBar}
                    expandable={true}
                    isActive={this.isActivePath("/support")}
                    list={[
                        {
                            link: "/support",
                            name: "About Us",
                        },
                    ]}
                />
            </nav>
        );
    }
}

export default withRouter(withStyles(sideNavStyles)(SideNav));
