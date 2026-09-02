import React, { useRef } from "react";
import DisplayButton from "./DisplayButton";

const HandlePreviousButton = () => {
  const prevBtn = useRef<number | null>(null);
  const numbers: number[] = [1, 2, 3, 4, 5];

  const handleClick = (num: number) => {
    console.log(`前回押されたボタン: ${prevBtn.current === null ? "空です" : prevBtn.current}`);
    prevBtn.current = num;
  };
  return (
    <div>
      <DisplayButton numbers={numbers} handleClick={handleClick} />
    </div>
  );
};

export default HandlePreviousButton;
