import { SocialIcon } from "react-social-icons";

export default function Contacts() {
  return (
    <section
      id="thankYou"
      className={`border-t-2 border-gray-800 bg-white text-gray-800 self-end`}
    >
      <div className="bg-orange-900/30 pl-8 py-4 md:py-2">
        <h2 className="text-lg font-bold underline mb-2 text-black md:text-md">
          Contatos:
        </h2>
        <div className="md:flex md:flex-wrap md:text-xs md:gap-2 md:font-semibold">
          <h3 className="flex flex-row gap-2 justify-start items-center md:gap-1">
            <SocialIcon
              url="https://linkedin.com/jaketrent"
              style={{ height: 20, width: 20 }}
            />
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/khess-santomauro-dotto-ab038a166/"
              target="_blank"
            >
              <span className="text-sm md:text-xs">
                khess-santomauro-dotto-ab038a166
              </span>
            </a>
          </h3>
          <h3 className="flex flex-row gap-2 justify-start items-center md:gap-1">
            <SocialIcon
              url="https://email.com/jaketrent"
              style={{ height: 20, width: 20 }}
            />
            <span className="font-semibold">E-mail:</span>{" "}
            <span className="text-sm md:text-xs">khessdotto@gmail.com</span>
          </h3>
          <h3 className="flex flex-row gap-2 justify-start items-center md:gap-1">
            <SocialIcon
              url="https://github.com/jaketrent"
              style={{ height: 20, width: 20 }}
            />
            <span className="font-semibold">Github:</span>{" "}
            <a href="https://github.com/KHESSDOTTO" target="_blank">
              <span className="text-sm md:text-xs">
                https://github.com/KHESSDOTTO
              </span>
            </a>
          </h3>
          <h3 className="flex flex-row gap-2 justify-start items-center md:gap-1">
            <SocialIcon
              url="https://whatsapp.com/jaketrent"
              style={{ height: 20, width: 20 }}
            />
            <span className="font-semibold">Whatsapp:</span>{" "}
            <span className="text-sm md:text-xs">+55 (11) 94761-5365</span>
          </h3>
          <h3 className="flex flex-row gap-2 justify-start items-center md:gap-1">
            <SocialIcon
              url="https://discord.com/jaketrent"
              style={{ height: 20, width: 20 }}
            />
            <span className="font-semibold">Discord:</span>{" "}
            <span className="text-sm md:text-xs">Khess#8996</span>
          </h3>
          <h3 className="flex flex-row gap-2 justify-start items-center md:gap-1">
            <SocialIcon
              url="https://telegram.com/jaketrent"
              style={{ height: 20, width: 20 }}
            />
            <span className="font-semibold">Telegram:</span>{" "}
            <span className="text-sm md:text-xs">@Ksd1996</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
