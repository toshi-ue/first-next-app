import { useCallback, useMemo, useState } from "react";
export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  // これでもよいが、パフォーマンス的に無駄がある
  //    isShowの値が変わった時にdoubleCountを評価、再生成されてしまう
  // const doubleCount = count * 2;
  // 以下だとcountが変更されたときにだけ再生成されるのでパフォーマンスが良くなる
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

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
