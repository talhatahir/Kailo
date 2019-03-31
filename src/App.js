import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Provider} from "react-redux";
import {ThemeProvider} from "react-jss";

import defaultTheme from "styles/themes/default";

import store from "store";
import {Dashboard, Finance, Reports, Settings, Logout, Support} from "pages";
import Profits from "pages/Reports/Profits";
import Transactions from "pages/Reports/Transactions";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={defaultTheme}>
                    <Router>
                        <div>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/finance" component={Finance} />
                            <Route exact path="/support" component={Support} />
                            <Route exact path="/reports" component={Reports} />
                            <Route
                                path="/reports/transactions"
                                component={Transactions}
                            />
                            <Route
                                path="/reports/profits"
                                component={Profits}
                            />

                            <Route
                                exact
                                path="/settings"
                                component={Settings}
                            />
                            <Route exact path="/logout" component={Logout} />
                        </div>
                    </Router>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App;
