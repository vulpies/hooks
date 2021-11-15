import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef("Блок");

    const change = () => {
        blockRef.current.style.width = "150px";
        blockRef.current.style.height = "80px";
        blockRef.current.textContent = "Text";
    };

    const changeBack = () => {
        blockRef.current.style.width = "60px";
        blockRef.current.style.height = "40px";
        blockRef.current.textContent = "Блок";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={blockRef}
            >
                <small>{blockRef.current}</small>
            </div>
            <button className="btn btn-warning" onClick={change}>
                Change block
            </button>
            <button className="btn btn-danger m-2" onClick={changeBack}>
                Go back
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
