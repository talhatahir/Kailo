import {FETCH_WIDGET_COUNT} from "state/actions/types";
import {widgetCountJSON} from "state/data";

// An example fetch
/*export const fetchWidgetCount = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(widgetCounts =>
            dispatch({
                type: FETCH_WIDGET_COUNT,
                payload: widgetCounts,
            })
        );
};*/

export const fetchWidgetCount = () => dispatch => {
    return dispatch({
        type: FETCH_WIDGET_COUNT,
        payload: widgetCountJSON,
    });
};
