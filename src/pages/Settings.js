import React, {Component} from "react";

import Layout from "Layout";

import withStyles from "react-jss";

import sectionStyles from "styles/section";

class Settings extends Component {
    render() {
        return (
            <Layout pageTitle="Settings">
                <div className={this.props.classes.page}>
                    <section className={this.props.classes.section}>
                        Settings
                    </section>
                </div>
            </Layout>
        );
    }
}

export default withStyles(sectionStyles)(Settings);
