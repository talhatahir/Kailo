import React, {Component} from "react";

import Layout from "Layout";

import withStyles from "react-jss";
import sectionStyles from "styles/section";

class Reports extends Component {
    render() {
        return (
            <Layout pageTitle={"Reports - Sales"}>
                <div className={this.props.classes.page}>
                    <section className={this.props.classes.section} />
                </div>
            </Layout>
        );
    }
}

export default withStyles(sectionStyles)(Reports);
