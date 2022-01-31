import React from "react";
import {FirstName, LastName} from "../Context"

// Callback Hell -> as it creates triangle and it is difficult to use Consumer for many context because it creates to much
// callbacks

// useContext() is too much easier

const ComC = () => {
    return(
        <>
            <FirstName.Consumer>
                {
                    (fname) => {
                        return(
                            <LastName.Consumer>
                                {
                                    (lname) => {
                                        return(
                                            <h1>My name is {fname} {lname}</h1>
                                        );
                                    }
                                }
                            </LastName.Consumer>
                        );
                    }
                }
            </FirstName.Consumer>
        </>
    );
}

export default ComC;