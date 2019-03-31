import React, {Component} from "react";
import withStyles from "react-jss";

const styles = theme => ({
    tooltip: {
        position: "relative",
    },

    container: {
        position: "absolute",
        backgroundColor: "white",
        zIndex: 10,
        width: "max-content",
        maxWidth: "28rem",
        borderColor: theme.colorWhite,
        borderRadius: "6px",
        boxShadow: "2px 1px 8px #ddd",
    },
    top: {
        bottom: "100%",
        left: "50%",
        paddingBottom: "9px",
        transform: "translateX(-50%)",
    },
    bottom: {
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
    },
    right: {
        top: "50%",
        left: "100%",
        paddingLeft: "9px",
        transform: "translateY(-50%)",
    },
    title: {
        padding: "0.5rem",
        fontSize: theme.fontSizeExtraSmall,
        textAlign: "center",
        fontWeight: theme.fontWeightBold,
        textTransform: "uppercase",
    },
    message: {
        fontSize: theme.fontSizeSmall,
        padding: "0.5rem",
    },
});

type Props = {
    /**
     * Position of tooltip around the trigger element
     */
    position: string,
    title?: string,
    message: string,
};

class Tooltip extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };
        this.hideTooltip = this.hideTooltip.bind(this);
        this.showTooltip = this.showTooltip.bind(this);
    }

    hideTooltip() {
        this.setState({visible: false});
    }
    showTooltip() {
        this.setState({visible: true});
    }

    render() {
        let position = this.props.position;

        return (
            <span
                className={this.props.classes.tooltip}
                onMouseLeave={this.hideTooltip}
            >
                {this.state.visible && (
                    <div
                        className={`${this.props.classes.container} ${
                            this.props.classes[position]
                        }`}
                    >
                        <div>
                            {this.props.title && (
                                <div className={this.props.classes.title}>
                                    {this.props.title}
                                </div>
                            )}
                            <div className={this.props.classes.message}>
                                <div>{this.props.message}</div>
                            </div>
                        </div>
                    </div>
                )}
                <span onMouseOver={this.showTooltip}>
                    {this.props.children}
                </span>
            </span>
        );
    }
}

export default withStyles(styles)(Tooltip);
