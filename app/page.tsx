"use client";
import { useState } from "react";
import { Card } from "./component/card";
import { useInputHook } from "./customHooks/useInputHook";
import validator from "validator";

export default function Home() {
  const [cardOwner, bindCardOwner, resetCardOwner] = useInputHook("");
  const [cardNumber, bindCardNumber, resetCardNumber] = useInputHook("");
  const [cardExpiry, bindCardExpiry, resetCardExpiry] = useInputHook("");
  const [cardCVC, bindCardCVC, resetCardCVC] = useInputHook("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitPayment = () => {
    setErrorMessage('')
    if (!validator.isCreditCard(cardNumber)) {
      setErrorMessage("Please enter a valid credit card number");
    }
    resetCardCVC();
    resetCardExpiry();
    resetCardNumber();
    resetCardOwner();
  };
  return (
    <main className="flex items-center justify-center min-h-screen w-full bg-background py-20">
      <div className="min-h-full w-full md:w-3/4 bg-my_bg_image flex flex-col-reverse md:flex-row rounded-md">
        <div className="z-10 w-full md:w-2/4 p-4 flex flex-col items-start justify-start bg-[#282A37]">
          <div className="w-full mb-8">
            <Card cardNumber={cardNumber} cardExpiry={cardExpiry} />
          </div>

          <div className="flex flex-col w-full items-start justify-start gap-2">
            <div className="w-full flex flex-col items-start justify-start py-2">
              <label className="text-paragraph" htmlFor="">
                Name of credit card owner
              </label>
              <input
                {...bindCardOwner}
                type="text"
                className="py-2 outline-none px-4 w-full sm:w-3/4 bg-input text-paragraph rounded-md"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start py-2">
              <label className="text-paragraph" htmlFor="">
                Card Number
              </label>
              <input
                maxLength={16}
                {...bindCardNumber}
                type="text"
                className="py-2 outline-none px-4 w-full sm:w-3/4 bg-input text-paragraph rounded-md"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start py-2">
              <label className="text-paragraph" htmlFor="">
                Expiration Date
              </label>
              <input
                maxLength={4}
                {...bindCardExpiry}
                type="text"
                className="py-2 outline-none px-4 w-full sm:w-3/4 bg-input text-paragraph rounded-md"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start py-2">
              <label className="text-paragraph" htmlFor="">
                CVC
              </label>
              <input
              maxLength={3}
                {...bindCardCVC}
                type="text"
                className="py-2 outline-none px-4 w-full sm:w-3/4 bg-input text-paragraph rounded-md"
              />
            </div>
            {errorMessage && (
              <span className="text-red-500 text-center w-full sm:w-3/4">{errorMessage}</span>
            )}
            <div className="flex items-center justify-center w-full sm:w-3/4">
              <button
                onClick={handleSubmitPayment}
                className="bg-button py-2 px-4 rounded-md text-background font-bold outline-none "
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#282A37]  to-transparent w-full p-10 md:w-2/4 min-h-full flex flex-col items-center justify-center ">
          <div className="text-paragraph text-2xl font-medium mb-8">Title</div>
          <div className="text-paragraph text-sm w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
      </div>
    </main>
  );
}
