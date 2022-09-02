import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = (quotedata) => {
        console.log(quotedata);
        history.push("/quotes")
    };

    return (
        <>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </>
    );
};

export default NewQuote;
