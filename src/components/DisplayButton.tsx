import React from "react";

interface DisplayButtonProps {
  numbers: number[];
  handleClick: (num: number) => void;
}

const DisplayButton = ({ numbers, handleClick }: DisplayButtonProps) => {
  return (
    <div>
      {numbers.length > 0 ? (
        <div>
          {numbers.map((num) => (
            <button onClick={() => handleClick(num)}>{num}</button>
          ))}
        </div>
      ) : (
        <p>ボタン要素がからです</p>
      )}
    </div>
  );
};

export default DisplayButton;
