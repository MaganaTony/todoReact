export default function Button(props) {
    console.log(`Button Id ${props.id} rendered`);
    return (
        <button
            className="border rounded-lg bg-teal-950 text-white p-2 w-full"
            onClick={props.onClick}>{props.text || "Click Me"}</button>
    )
}