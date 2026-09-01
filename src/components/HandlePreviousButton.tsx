import React, { useRef } from "react";

const HandlePreviousButton = () => {
  const prevBtn = useRef<number | null>(null);
  const numbers: number[] = [1, 2, 3, 4, 5];

  const handleClick = (num: number) => {
    console.log(`前回押されたボタン: ${prevBtn.current}`);
    prevBtn.current = num;
  };

  return (
    <div>
      {numbers.length > 0 ? (
        <div>
          {numbers.map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="p-2 bg-purple-500 text-white rounded m-1"
            >
              ボタン {num}
            </button>
          ))}
        </div>
      ) : (
        <p>ボタンの要素が空です</p>
      )}
    </div>
  );
};

export default HandlePreviousButton;
