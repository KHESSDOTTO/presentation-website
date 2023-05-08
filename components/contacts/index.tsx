import { SocialIcon } from "react-social-icons";

export default function Contacts() {
  return (
    <section
      id="thankYou"
      className={`border-t-2 border-gray-800 bg-white self-end`}
    >
      <div className="bg-orange-900/20 pl-8 py-4">
        <h2 className="text-lg font-bold underline mb-2">Contatos</h2>
        <h3 className="flex flex-row gap-2 justify-start items-center">
          <SocialIcon
            url="https://linkedin.com/jaketrent"
            style={{ height: 20, width: 20 }}
          />
          <span className="font-semibold">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/khess-santomauro-dotto-ab038a166/"
            target="_blank"
          >
            <span className="text-sm">khess-santomauro-dotto-ab038a166</span>
          </a>
        </h3>
        <h3 className="flex flex-row gap-2 justify-start items-center">
          <SocialIcon
            url="https://email.com/jaketrent"
            style={{ height: 20, width: 20 }}
          />
          <span className="font-semibold">E-mail:</span>{" "}
          <span className="text-sm">khessdotto@gmail.com</span>
        </h3>
        <h3 className="flex flex-row gap-2 justify-start items-center">
          <SocialIcon
            url="https://whatsapp.com/jaketrent"
            style={{ height: 20, width: 20 }}
          />
          <span className="font-semibold">Whatsapp:</span>{" "}
          <span className="text-sm">+55 (11) 94761-5365</span>
        </h3>
        <h3 className="flex flex-row gap-2 justify-start items-center">
          <SocialIcon
            url="https://discord.com/jaketrent"
            style={{ height: 20, width: 20 }}
          />
          <span className="font-semibold">Discord:</span>{" "}
          <span className="text-sm">Khess#8996</span>
        </h3>
        <h3 className="flex flex-row gap-2 justify-start items-center">
          <SocialIcon
            url="https://telegram.com/jaketrent"
            style={{ height: 20, width: 20 }}
          />
          <span className="font-semibold">Telegram:</span>{" "}
          <span className="text-sm">@Ksd1996</span>
        </h3>
      </div>
    </section>
  );
}
