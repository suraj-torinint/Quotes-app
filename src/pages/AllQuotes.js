import React from "react";
import QuotesList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    { id: "q1", author: "Max", text: "Learning React is Fun!!" },
    { id: "q2", author: "Suraj", text: "Learning Python is Fun!!" },
    { id: "q3", author: "MaxMillion", text: "Learning Typescript is Fun!!" },
];

const AllQuotes = () => {
    return (
        <>
            <QuotesList quotes={DUMMY_QUOTES} />
        </>
    );
};

export default AllQuotes;
