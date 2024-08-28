import { useState } from "react";

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState("");

  function addToDo() {
    if (!text){
      alert("Please enter a valid todo");
      return;
    }
    setToDos([...toDos, text]);
    setText("");
  }

  function onKeyDown(event) {
    if (event.key === "Enter") {
      addToDo();
    }
  }

  function removeToDo(indexToDelete) {
    const newToDos = toDos.filter((_, index) => index !== indexToDelete);
    setToDos(newToDos);
  }

  return (
    <main className="flex flex-col gap-4">
      <div className="w-full text-center bg-teal-700 text-black font-bold">TODO APP</div>
      <header className="w-full max-w-md flex flex-row gap-2 items-center justify-center mx-auto">
        <input type="text" className="bg-black text-white border border-white/50 rounded p-2 w-full"
          value={text}
          onChange={(event) => { setText(event.target.value) }} 
          onKeyDown={onKeyDown}/>
        <button className="bg-teal-700 text-black font-bold rounded p-2 size-10"
          onClick={addToDo}>
          +
        </button>
      </header>

      <section className="flex flex-col w-full max-w-md mx-auto gap-1">
        {toDos.map((toDo, index) => {
          return <article
            className="w-full border rounded border-white/5 p-2 grid grid-cols-[1fr_3rem]"
            key={`toDo-${index}`}>

            <span>{toDo}</span>
            <span className="text-red-500 text-right cursor-pointer"
            onClick={() => removeToDo(index)}
            >×</span>
          </article>
        })}
      </section>
    </main>
  );
}