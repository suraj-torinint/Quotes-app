import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const addQuoteHandler = (quotedata) => {
        console.log(quotedata);
    };

    return (
        <>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </>
    );
};

export default NewQuote;
