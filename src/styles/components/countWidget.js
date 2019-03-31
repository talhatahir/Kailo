const countWidgetStyles = theme => ({
    widget: {
        width: "23%",
        background: theme.colorWhite,

        border: "1px solid #f4f4f4",
        "border-radius": theme.borderRadius,
    },
    count: {
        display: "block",
        "font-size": "2rem",
        "text-align": "center",
        padding: "1.5rem 0",
    },
    name: {
        display: "block",
        "font-size": "1.0rem",
        background: theme.lightBackground,
        color: theme.colorBody,
        "text-align": "center",
        padding: "1rem 0",
    },
});

export default countWidgetStyles;
