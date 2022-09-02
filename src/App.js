import { Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path={"/quotes"}>
                    <AllQuotes />
                </Route>
                <Route exact path={"/quotes/:quoteId"}>
                    <QuoteDetail />
                </Route>
                <Route exact path={"/new-quote"}>
                    <NewQuote />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
