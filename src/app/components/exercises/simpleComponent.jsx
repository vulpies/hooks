import React from "react";
import CardWrapper from "../common/Card";

/* eslint-disable react/prop-types */
const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            <CardWrapper>
                {isAuth ? (
                    <button className="btn btn-primary m-2" onClick={onLogOut}>
                        Log Out
                    </button>
                ) : (
                    <button className="btn btn-primary m-2" onClick={onLogin}>
                        Log In
                    </button>
                )}
                {/* <OnLogin /> */}
            </CardWrapper>
        </>
    );
};

export default SimpleComponent;

/* eslint-enable react/prop-types */
