import React, {Component} from "react";
import Layout from "Layout";

import withStyles from "react-jss";

import sectionStyles from "styles/section";

class Profits extends Component {
    render() {
        return (
            <Layout pageTitle={"Reports - Profits"}>
                <div className={this.props.classes.page}>
                    <section className={this.props.classes.section} />
                </div>
            </Layout>
        );
    }
}

export default withStyles(sectionStyles)(Profits);
