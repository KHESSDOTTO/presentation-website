import { useState } from "react";
import axios from "axios";

export interface CommentForm {
  commenter: string;
  comment: string;
}

export default function Comments() {
  const [form, setForm] = useState<CommentForm>({ commenter: "", comment: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log("Running...");
      console.log(form);
      await axios.post("http://localhost:3000/api/comment", {
        commenter: form.commenter,
        comment: form.comment,
      });
      console.log("Finished");
      setForm({ commenter: "", comment: "" });
      // add toast
    } catch (err) {
      console.log(err);
      // add toast
    }
  };

  return (
    <section className="pl-4 pr-1 pb-4 pt-12 flex flex-col items-start justify-center gap-2 bg-gradient-to-b from-gray-100 to-white shadow-lg">
      <div className="ml-2">
        <h2 className="text-xl font-bold underline">Deixe um comentário!</h2>
        <p className="text-sm italic font-semibold indent-2">*Leio todos</p>
      </div>
      <p className="text-sm mb-4">
        Deixe-me sugestões, dicas, stacks e tecnologias úteis, enfim,{" "}
        <span className="font-semibold underline">qualquer coisa!!</span>{" "}
        &#128518; rs... Por favor, irá me ajudar no meu desenvolvimento.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-center gap-2"
      >
        <div className="flex flex-col">
          <label htmlFor="commenter" className="mb-2">
            Seu nome ou identificação:
          </label>
          <input
            type="text"
            name="commenter"
            id="commenter"
            className="border border-black rounded-md"
            value={form.commenter}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="comment" className="mb-2">
            Comentário:
          </label>
          <textarea
            name="comment"
            id="comment"
            className="border border-black rounded-md"
            rows={5}
            cols={45}
            value={form.comment}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded-md py-2 px-4 bg-blue-700 text-white font-semibold hover:text-lg hover:bg-blue-800 hover:underline transition-all"
        >
          Me enviar!
        </button>
      </form>
    </section>
  );
}
