import { useRouter } from "next/router";

export const useBackgroundLightBlue = () => {
  const router = useRouter();
  useEffect(() => {
    document.body.style.backgroundColor =
      router.pathname === "/" ? "lightblue" : "beige";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
