// https://youtu.be/OTF2auzlBV0?list=PLwM1-TnN_NN6fUhOoZyU4iZiwhLyISopO&t=605
// ディレクトリ名はlibs, utilsなどでもよい。チームの決まりごとに従うこと
import { useCallback, useState } from "react";
export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
