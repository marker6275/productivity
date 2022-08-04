import React from "react";
import Quotes from '../quotes.json';

const Quote = () => {

    const list = []
    return (
        <div>
            {/* <p>
                {
                    Quotes.map( q => {
                        return (
                            <div>
                                { q.quote }
                            </div>
                        );
                    })
                }
            </p> */}
            <p>
                {Quotes['quotes']['quote']}
            </p>
        </div>
    );
};

export default Quote;