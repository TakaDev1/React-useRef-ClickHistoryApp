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
            <button
              onClick={() => handleClick(num)}
              key={num}
              className="p-2 bg-purple-500 text-white rounded m-1 hover:opacity-70 cursor-pointer"
            >
              {num}
            </button>
          ))}
        </div>
      ) : (
        <p>ボタン要素がからです</p>
      )}
    </div>
  );
};

export default DisplayButton;
