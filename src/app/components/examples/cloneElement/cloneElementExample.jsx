import React from "react";
import CardWrapper from "../../common/Card";
import Textfield from "../../common/form/textField";

import SmallTitle from "../../common/typografy/smallTitle";
const CloneElementExample = () => {
    const handleChange = (target) => {
        console.log("change: ", target);
    };

    const field = (
        <Textfield label="email" name="email" onChange={handleChange} />
    );

    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, {
                label: "Cloned email"
            })}
        </CardWrapper>
    );
};

export { CloneElementExample };
