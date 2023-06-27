import Image from "next/image";
import React from "react";
import cardImage from "../assets/images/card.png";

interface Props {
  cardNumber: string;
  cardExpiry: string;
}

export const Card: React.FC<Props> = ({ cardNumber, cardExpiry }) => {
  function handleCardNumber(string: string) {
    if (string.length <= 4) {
      return string;
    }

    let result = "";
    for (let i = 0; i < string.length; i++) {
      if (i > 0 && i % 4 === 0) {
        result += "-";
      }
      result += string[i];
    }

    return result;
  }

  function handleExpiryDate(date: string) {
    let result = "";
    for (let i = 0; i < date.length; i++) {
      if (i > 0 && i % 2 === 0) {
        result += "/";
      }
      result += date[i];
    }
    return result;
  }

  return (
    <div className="relative rounded-lg w-80 h-40">
      <Image
        src={cardImage.src}
        alt=""
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
      <div className="absolute text-white left-8 bottom-14 z-10">
        {handleCardNumber(cardNumber)}
      </div>
      <div className="absolute text-white right-12   bottom-10 z-10">
        {handleExpiryDate(cardExpiry)}
      </div>
    </div>
  );
};
