import { useCallback, useState } from "react";
export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  // これでもよいが、パフォーマンス的に無駄がある
  //    isShowの値が変わった時にdoubleCountが再生成されてしまう
  const doubleCount = count * 2;

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  return { count, doubleCount, isShow, handleClick, handleDisplay };
};
