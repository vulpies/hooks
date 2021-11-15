import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.style.width = "100%";
    };

    const handleClickWidth = () => {
        inputRef.current.style.width = "200px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <hr />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                ref={inputRef}
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary m-2" onClick={handleClick}>
                Focus input
            </button>
            <button className="btn btn-warning m-2" onClick={handleClickWidth}>
                Change object
            </button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
