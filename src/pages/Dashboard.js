import React, {Component} from "react";
import {connect} from "react-redux";

import Layout from "Layout";
import {CountWidget, Histogram, BarChart} from "components";

import withStyles from "react-jss";
import sectionStyles from "styles/section";
import {fetchWidgetCount} from "state/actions/countWidgetActions";

class Dashboard extends Component {
    componentWillMount() {
        this.props.fetchWidgetCount();
    }

    render() {
        const widgetList = this.props.widgetCounts.map(item => (
            <CountWidget key={item.id} title={item.title} count={item.value} />
        ));

        return (
            <Layout pageTitle={"Dashboard"}>
                <div className={this.props.classes.page}>
                    <section className={this.props.classes.section}>
                        {widgetList}
                    </section>
                    <section className={this.props.classes.section}>
                        <BarChart />
                    </section>
                    <section className={this.props.classes.section}>
                        <Histogram />
                    </section>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    widgetCounts: state.widgetCounts.items,
});

export default withStyles(sectionStyles)(
    connect(
        mapStateToProps,
        {fetchWidgetCount}
    )(Dashboard)
);
