const layoutStyles = theme => ({
    appContainer: {
        display: "grid",
        "min-height": "100vh",
        "grid-template-columns": "1.82fr 10.50fr",
        "grid-template-rows": "1fr 20fr",
        "grid-template-areas": `
            "logo header header header"
            "nav main main main"
            "nav footer footer footer"
        `,
        "font-family": "'Lato', sans-serif",
    },
    logo: {
        "grid-area": "logo",
        "font-weight": "bold",
        "background-color": theme.colorPrimary,
        "font-size": "1.4rem",
        display: "flex",
        color: theme.colorWhite,
        "justify-content": "space-around",
        "align-items": "center",
        "& img": {
            height: "1.35rem",
        },
    },
    header: {
        "grid-area": "header",
        padding: "0 1rem 0 2rem",
        "background-color": theme.colorWhite,
        "box-shadow": "0px 1px 10px 0px rgba(50, 50, 50, 0.2)",
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center",
        "z-index": 1,
    },
    footer: {
        "grid-area": "footer",
        "background-color": "green",
    },
    main: {
        "grid-area": "main",
        "background-color": "#fcfcfc",
    },
    options: {
        "list-style": "none",
        display: "flex",
        "justify-content": "space-around",
        "& li": {
            margin: "0 0.4rem",
            cursor: "pointer",
        },
    },
    dropDown: {
        padding: theme.dropDownPadding,
        "margin-top": "-1rem",
        "margin-left": "1rem",
        background: theme.colorWhite,
        color: "#555",
        border: "1px solid #EFEFEF",
        "border-radius": theme.borderRadius,
    },
    pageTitle: {
        "font-size": "1.5rem",
        color: theme.colorHeading,
    },
    navAnchor: {
        "text-decoration": "none",
        color: "inherit",
    },
    settings: {
        height: "1rem",
    },
    logout: {
        height: "1rem",
    },
    help: {
        height: "1rem",
    },
});

export default layoutStyles;
