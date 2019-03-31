import React from "react";

import withStyles from "react-jss";

import countWidgetStyles from "styles/components/countWidget";

const CountWidget = props => {
    return (
        <div className={props.classes.widget}>
            <span className={props.classes.count}>{props.count}</span>
            <span className={props.classes.name}>
                {props.title.toUpperCase()}
            </span>
        </div>
    );
};

export default withStyles(countWidgetStyles)(CountWidget);
