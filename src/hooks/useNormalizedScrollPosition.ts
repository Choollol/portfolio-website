import { roundDecimal } from "@/utils/numberUtils";
import { useEffect, useState } from "react";

const useNormalizedScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    let position =
      document.documentElement.scrollTop /
      (document.documentElement.offsetHeight - window.innerHeight);
    position = roundDecimal(position, 2);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useNormalizedScrollPosition;
