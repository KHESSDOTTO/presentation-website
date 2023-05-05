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
    <section className="row-span-3 pl-4 pr-1 flex flex-col items-start justify-center gap-2 bg-gradient-to-b from-gray-100 from-20% to-white shadow-lg py-8">
      <div className="ml-2">
        <h2 className="text-xl font-bold underline">Deixe um comentário!</h2>
        <p className="text-sm italic font-semibold indent-2">*Leio todos</p>
      </div>
      <p className="text-sm mb-4">
        Deixe-me sugestões, dicas, stacks e tecnologias úteis, enfim,{" "}
        <span className="font-semibold underline">qualquer coisa!!</span>{" "}
        &#128518; rs... Por favor, gostaria muito de saber a sua opinião.
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
            required={true}
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
            required={true}
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex items-center gap-2 rounded-md py-2 px-4 bg-blue-600 mt-4 text-white font-semibold hover:text-lg hover:text-yellow-300 hover:bg-blue-800 transition-all"
        >
          <p>Enviar!</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}
