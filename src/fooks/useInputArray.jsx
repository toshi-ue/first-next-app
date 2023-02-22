import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleAdd = useCallback(() => {
    if (text == "") {
      alert("値を入力してください");
      return;
    }
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在します");
        return prevArray;
      }

      const newArray = [...prevArray, text];
      console.log(newArray);
      return newArray;
    });
  }, [text]);

  const handleChange = useCallback((e) => {
    setText(e.target.value.trim());
  }, []);

  return { text, array, handleAdd, handleChange };
};
