import { useRef, useState } from "react";
import axios from "axios";
import {
  AttentionSeeker,
  Flip,
  Roll,
  Slide,
  Bounce,
  Fade,
} from "react-awesome-reveal";
import toast from "react-hot-toast";
import { Fireworks, FireworksHandlers } from "@fireworks-js/react";

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
      await axios.post("http://localhost:3000/api/comment", {
        commenter: form.commenter,
        comment: form.comment,
      });
      setForm({ commenter: "", comment: "" });
      toast.success("Comment sent!");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong...");
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-200 to-white row-span-3 flex flex-col items-center justify-evenly bg-gradient-to-b from-gray-100 from-20% to-white shadow-lg pt-8 pb-6 max-w-screen md:py-4 md:gap-4">
      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100,
          },
        }}
      />
      <div className="flex flex-col items-center gap-2">
        <Flip duration={1000}>
          <h2 className="text-3xl font-bold underline animate-bounce">
            Deixe um comentário!
          </h2>
        </Flip>
        <p className="text-sm italic font-semibold">*Leio todos</p>
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-16 md:items-stretch">
        <div className="flex flex-col items-center gap-2 md:basis-1/3 md:px-4 md:justify-center">
          <p className="text-sm text-center px-4">
            E aí, me daria uma chance? &#128521; Deixe-me sugestões, dicas,
            stacks e tecnologias úteis, enfim,{" "}
            <span className="font-semibold underline">qualquer coisa!!</span>{" "}
            rs... Por favor, gostaria muito de saber a sua opinião.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="green"
            strokeWidth={0.1}
            stroke="black"
            className="w-20 h-20"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="hidden h-52 border-r-2 self-center border-gray-700 md:inline-block"></div>
        <form
          onSubmit={handleSubmit}
          id="comment-form"
          className="flex flex-col items-center justify-center gap-4 md:basis-1/3"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="commenter" className="text-center">
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
          <div className="flex flex-col gap-2">
            <label htmlFor="comment" className="text-center">
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
        </form>
      </div>
      <AttentionSeeker effect="tada" delay={6000} className="max-w-screen">
        <button
          type="submit"
          form="comment-form"
          className="flex items-center gap-2 rounded-md py-2 px-4 bg-blue-600 mt-4 text-white font-semibold transition-all hover:text-lg hover:text-yellow-300 hover:bg-blue-800"
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
      </AttentionSeeker>
    </section>
  );
}
