import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);
    const toggleState = () => {
        setOtherState(!otherState);
    };

    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <hr />
            <p>Render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleState}>
                Get count
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
