import React from "react";
import CardWrapper from "../common/Card";

const withOnLogin = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} />
        </CardWrapper>
    );
};

export default withOnLogin;
