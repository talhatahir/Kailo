import React, {Component} from "react";
import Layout from "Layout";

import withStyles from "react-jss";

import sectionStyles from "styles/section";

class Support extends Component {
    render() {
        return (
            <Layout pageTitle={"Support - About us"}>
                <div className={this.props.classes.page}>
                    <section className={this.props.classes.section} />
                </div>
            </Layout>
        );
    }
}

export default withStyles(sectionStyles)(Support);
