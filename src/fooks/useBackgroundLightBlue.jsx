import { useEffect } from "react";

export const useBackgroundLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
