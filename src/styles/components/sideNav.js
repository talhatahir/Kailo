const sideNavStyles = theme => ({
    nav: {
        "grid-area": "nav",
        "background-color": theme.colorWhite,
        "border-right": "1px solid #D3D3D3",
    },
    navElement: {
        display: "block",
        padding: "0.91rem 1.3rem",
        "text-decoration": "none",
        background: theme.colorWhite,
        color: theme.colorBody,
        "font-weight": "600",
        "font-size": "0.85rem",
        cursor: "pointer",
        "&:hover": {
            background: "#666aff",
            color: theme.colorWhite,
        },
    },
    navElementButton: {
        display: "block",
        width: "5rem",
        height: "1rem",
        "text-decoration": "none",
        background: "#49A8E5",
        color: theme.colorWhite,
        margin: "0 auto",
        "font-weight": "600",
        "font-size": "0.65rem",
        "white-space": "nowrap",
        "line-height": "1.1rem",
        cursor: "pointer",
        padding: "0.5rem 1.9rem 0.5rem 1rem",
        "border-radius": "0.6rem",
        "&:hover": {
            background: "#2d89c5",
            color: theme.colorWhite,
        },
    },

    marginBottom: {
        marginBottom: "7rem",
    },

    navElementItem: {
        display: "block",
        padding: "0.7rem 0rem 0.3rem 0rem",
        "list-style": "none",
        "text-decoration": "none",
        "font-weight": "normal",
        "font-size": "0.85rem",
        "&:hover": {
            "font-weight": "600",
        },
    },

    navElementAnchor: {
        "text-decoration": "none",
        color: theme.colorBody,
    },

    navElementActive: {
        background: theme.colorSecondary,
        color: theme.colorWhite,
    },
    navElementCaret: {
        float: "right",
    },
    navAnchor: {
        "text-decoration": "none",
        background: theme.colorWhite,
    },
    list: {
        margin: "0",
        "background-color": "#f8f8f8",
        "padding-bottom": "0.3rem",
    },
});

export default sideNavStyles;
