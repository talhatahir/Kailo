import React from "react";
import Highcharts from "highcharts";
import BarChart from "highcharts-react-official";
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
        type: "bar",
        backgroundColor: theme.colorBackground,
    },
    title: {
        text: "Order Statistics",
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
        categories: ["NYC", "OKL", "BKLY", "LAX", "VGS"],
        title: {
            text: null,
        },
        opposite: false,
    },
    yAxis: {
        min: 0,
        title: {
            text: "",
        },
        gridLineColor: null,
        reversed: false,
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
            },
        },
    },
    credits: {
        enabled: false,
    },
    series: [
        {
            data: [107, 31, 135, 217, 120],
            color: theme.colorSecondary,
            showInLegend: false,
        },
    ],
    legend: {
        rtl: false,
    },
});

const BarChartCustom = ({theme, classes}) => (
    <div className={classes.container}>
        <BarChart highcharts={Highcharts} options={getOptions(theme)} />
    </div>
);

export default withStyles(styles)(BarChartCustom);
