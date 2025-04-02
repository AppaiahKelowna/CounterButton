import { useState } from "react";

const CounterButton = () => {
    let [count, setCount] = useState(0);


    const increment = () => {
        setCount(count += 1);
    };

    const resetCount = () => {
        setCount(count = 0);
    };

    const decrement = () => {
        setCount(count -= 1);
    };


    return (
        <>
            <text> counter - {count}</text>
            <button onClick={increment}> increment</button>
            <button onClick={decrement}> decrement</button>
            <button onClick={resetCount}> Reset </button>
        </>
    );
};

export default CounterButton;