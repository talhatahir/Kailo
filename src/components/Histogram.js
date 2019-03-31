import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import withStyles from "react-jss";

const styles = theme => ({
    container: {
        width: "100%",
        background: theme.colorBackground,
    },
});

type Series = {
    /**
     * Name of individual series
     */
    name: string,

    /**
     * Array of number data for individual series
     */
    data: Array<number>,
};

type Props = {
    /**
     * Main title of the histogram chart
     */
    title: string,

    /**
     * Options to display at x-axis
     */
    categories: Array<string>,

    /**
     * x-axis title
     */
    xAxisTitle: ?string,

    /**
     * y-axis title
     */
    yAxisTitle: ?string,

    /**
     * Data to be displayed on the chart
     */
    data: Array<Series>,
};

const getOptions = theme => ({
    chart: {
        type: "column",
        backgroundColor: theme.colorBackground,
    },
    title: {
        text: "Inbound Sales Bandwidth",
        align: "left",
        style: {
            textTransform: "uppercase",
            color: theme.colorSectionHeading,
            fontWeight: theme.fontWeightBold,
            fontSize: theme.fontSizeMedium,
            fontFamily: theme.fontFamily,
        },
    },
    xAxis: {
        categories: ["Q1", "Q2", "Q3", "Q4"],
        reversed: false,
    },
    yAxis: {
        title: {
            text: "",
        },
        gridLineColor: null,
        opposite: false,
    },
    credits: {
        enabled: false,
    },
    series: [
        {
            name: "Sale",
            color: theme.colorPrimary,
            data: [25, 65, 125, 127],
        },
        {
            name: "Cost",
            color: theme.colorSecondary,
            data: [15, 75, 77, 25],
        },
    ],
    plotOptions: {
        series: {
            pointWidth: 20,
        },
    },
    legend: {
        rtl: false,
    },
});

const Histogram = ({theme, classes}) => (
    <div className={classes.container}>
        <HighchartsReact highcharts={Highcharts} options={getOptions(theme)} />
    </div>
);

export default withStyles(styles)(Histogram);
