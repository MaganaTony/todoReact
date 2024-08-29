import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const [toDos, setToDos] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();



  function addToDo(toDoText) {
    setToDos([...toDos, toDoText]);
    reset();
  }

  function removeToDo(indexToDelete) {
    const newToDos = toDos.filter((_, index) => index !== indexToDelete);
    setToDos(newToDos);
  }

  function onSubmit(data) {
    console.log(data);
    addToDo(data.text);
  }

  return (
    <main className="flex flex-col gap-4">
      <div className="w-full text-center bg-teal-700 text-black font-bold">TODO APP</div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md flex flex-col gap-2 items-center justify-center mx-auto">
        <div className="flex flex-row w-full gap-1">
          <input
            type="text"
            className={clsx("bg-black text-white border border-white/50 rounded p-2 w-full",
              { "bg-red-500/30 border-red-500": errors.text }
            )}
            {...register("text", {
              required: {
                value: true, message: "No puedes agregar tareas en blanco"
              },
              minLength: {
                value: 5, message: "La tarea debe tener al menos 5 caracteres"
              },
            })}
          />
          <button className="bg-teal-700 text-black font-bold rounded p-2 size-10">
            +
          </button>
        </div>

        {
          errors.text && <span className="text-red-500 text-sm w-full">{errors.text.message}</span>
        }
      </form>

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