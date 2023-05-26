import { useState, useEffect } from "react";
import axios from "axios";
import { AttentionSeeker } from "react-awesome-reveal";
import toast from "react-hot-toast";
import { Fireworks } from "@fireworks-js/react";
import Image from "next/image";
import winkFace from "../../images/wink-face.svg";

export interface CommentForm {
  commenter: string;
  comment: string;
}

export default function Comments() {
  const [form, setForm] = useState<CommentForm>({ commenter: "", comment: "" }),
    [textareaWidth, setTextareaWidth] = useState(30),
    [winkSize, setWinkSize] = useState(40);

  useEffect(() => {
    if (window.outerWidth > 767) {
      setTextareaWidth(40);
      setWinkSize(60);
    }
    const comments = document.querySelector("#comments");
    const options = { root: null, rootMargin: "0px", threshold: 0.3 };
    const toggleOpacity = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          // console.log("Entered");
          comments?.classList.remove("opacity-0");
        } else {
          // console.log("Leaved");
          comments?.classList.add("opacity-0");
        }
      });
    };
    if (comments !== null) {
      const watchViewport = new IntersectionObserver(toggleOpacity, options);
      watchViewport.observe(comments);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await axios.post(
        "https://presentation-website-khess.vercel.app/api/comment",
        {
          commenter: form.commenter,
          comment: form.comment,
        }
      );
      setForm({ commenter: "", comment: "" });
      toast.success("Comentário enviado. Obrigado!");
    } catch (err) {
      console.log(err);
      toast.error("Algo deu errado :(... Tente novamente, por favor.");
    }
  };

  return (
    <section
      id="comments"
      className="bg-slate-900 relative opacity-0 transition-opacity duration-1000 text-white row-span-3"
    >
      <div className="flex flex-col bg-[url('../images/bg-nightsky.png')] items-center justify-evenly text-slate-300 from-black from-30% via-slate-200/30 to-white/30 shadow-lg pt-8 pb-6 max-w-screen gap-0 md:py-4 md:gap-4 md:text-white bg-fixed bg-cover bg-center bg-no-repeat">
        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100,
            },
          }}
          className="z-10 w-screen h-64 md:h-[50vh] xl:h-64"
        />
        <div className="flex flex-col items-center gap-2 text-white md:text-white md:gap-8">
          <div className="font-serif text-3xl underline animate-bounce flex justify-center items-center gap-2 md:gap-8 md:text-5xl">
            <Image src={winkFace} alt="wink-face" width={winkSize} />
            <h2>Deixe um comentário!</h2>
          </div>
          <p className="text-sm italic font-semibold z-0 md:font-normal text-gray-100 md:text-slate-200">
            *Leio todos
          </p>
        </div>
        <div className="flex flex-col items-center z-0 gap-2 md:flex-row md:justify-center md:gap-16 md:items-stretch">
          <div className="flex flex-col items-center gap-2 text-gray-100 md:text-slate-200 md:basis-1/3 md:px-4 md:justify-center">
            <p className="text-sm text-center px-4 md:text-start md:indent-4">
              E aí, quer me conhecer melhor? &#128521; Deixe-me sugestões,
              dicas, stacks e tecnologias úteis, enfim,{" "}
              <span className="font-semibold underline text-white md:text-white">
                qualquer coisa!!
              </span>{" "}
              rs... Por favor, gostaria muito de saber a sua opinião. Meus
              contatos ao final (rodapé).
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
          <div className="hidden h-52 border-r-2 self-center border-slate-300 md:inline-block"></div>
          <form
            onSubmit={handleSubmit}
            id="comment-form"
            className="flex flex-col items-center justify-center gap-4 text-slate-700 md:basis-1/3"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="commenter"
                className="text-center text-slate-200 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
                Seu nome ou identificação:
              </label>
              <input
                type="text"
                name="commenter"
                id="commenter"
                className="border border-black rounded-sm"
                value={form.commenter}
                onChange={handleChange}
                required={true}
              ></input>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="comment"
                className="text-center text-slate-200 flex justify-center items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Comentário:
              </label>
              <textarea
                name="comment"
                id="comment"
                className="border border-black rounded-sm"
                rows={5}
                cols={textareaWidth}
                value={form.comment}
                onChange={handleChange}
                required={true}
              ></textarea>
            </div>
          </form>
        </div>
        <AttentionSeeker effect="tada" delay={4000} className="max-w-screen">
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
      </div>
    </section>
  );
}
