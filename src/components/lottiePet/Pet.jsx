import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import "./pet.scss";

const Pet = () => {
  return (
    <div id="dog">
      <DotLottieReact src="/lottie/black_cat.lottie" loop autoplay />
    </div>
  );
};

export default Pet;
