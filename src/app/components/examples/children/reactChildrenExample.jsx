import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import Textfield from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    useEffect(() => {
        console.log(data, "data");
    }, [data]);

    const handleChange = (target) => {
        console.log(target, "target");
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || ""
        };

        return React.cloneElement(child, config);
    });
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <hr />
            <FormComponent>
                <Textfield name="email" label="email" />
                <Textfield name="password" label="password" type="password" />
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
