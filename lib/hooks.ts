import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveContext } from "@/context/active-section-context";
import type { SectionName } from "./types";

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { setActive, timeOfLastClick } = useActiveContext();
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive(sectionName);
    }
  }, [setActive, inView, timeOfLastClick, sectionName]);

  return { ref };
};
