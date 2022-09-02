import { Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path={"/"}>
                    <AllQuotes />
                    <Redirect to={"/quotes"} />
                </Route>
                <Route exact path={"/quotes"}>
                    <AllQuotes />
                </Route>
                <Route path={"/quotes/:quoteId"}>
                    <QuoteDetail />
                </Route>
                <Route path={"/new-quote"}>
                    <NewQuote />
                </Route>
                <Route exact path={"*"}>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
