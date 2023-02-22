// https://youtu.be/OTF2auzlBV0?list=PLwM1-TnN_NN6fUhOoZyU4iZiwhLyISopO&t=605
// ディレクトリ名はlibs, utilsなどでもよい。チームの決まりごとに従うこと
import { useCallback, useState } from "react";
export const useCounter = () => {
  const [foo, setFoo] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (foo < 10) {
      setFoo((foo) => foo + 1);
    }
  }, [foo]);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  return { foo, isShow, handleClick, handleDisplay };
};
