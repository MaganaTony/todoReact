import { useState } from "react";

export default function ButtonState(props) {

    const [count, setCount] = useState(0);

    console.log(`ButtonState Id ${props.id} rendered`);

    return (
        <button
            id={props.id}
            className="border rounded-lg bg-purple-900 text-white p-2 w-full"
            onClick={() => setCount(count + 1)}>
            {count}
        </button>
    )


}