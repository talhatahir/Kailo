import {combineReducers} from "redux";
import countWidgetReducer from "state/reducers/countWidgetReducer";
import languageReducer from "state/reducers/languageReducer";

export default combineReducers({
    widgetCounts: countWidgetReducer,
    language: languageReducer,
});
