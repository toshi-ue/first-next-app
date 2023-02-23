import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBackgroundColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === "/" ? "lightblue" : "beige";
    // 以下のようにも書ける
    // switch (router.pathname) {
    //   case "/": {
    //     return "lightblue";
    //   }
    //   case "/about":
    //     return "beige";
    //   default:
    //     break;
    // }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
