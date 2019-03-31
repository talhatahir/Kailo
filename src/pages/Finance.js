import React, {Component} from "react";
import withStyles from "react-jss";
import Layout from "Layout";
import sectionStyles from "styles/section";

class Finance extends Component {
    render() {
        return (
            <Layout pageTitle={"Finance - Loans"}>
                <div className={this.props.classes.page}>
                    <section className={this.props.classes.section} />
                </div>
            </Layout>
        );
    }
}

export default withStyles(sectionStyles)(Finance);
