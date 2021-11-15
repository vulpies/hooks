import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };

    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <hr />
            <p>Previous state: {prevState.current}</p>
            <p>Current state: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleState}>
                Check state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
