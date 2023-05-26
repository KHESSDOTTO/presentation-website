import Image from "next/image";

export interface propsLiWithLogo {
  text: string;
  imgLogo: any;
  imgSize: number;
}

export interface stackList {
  text: string;
  imgLogo: any;
}

export function LiWithLogo({ text, imgLogo, imgSize }: propsLiWithLogo) {
  return (
    <li>
      <span>{text}</span>
      <Image
        src={imgLogo}
        alt={text}
        width={imgSize}
        className="inline-block mb-1 ml-3"
      />
    </li>
  );
}
