import type { RefObject } from "react";
import { useEffect, useRef } from "react";

const useClickOutside = <T extends HTMLElement>(
  onClickOutside: (event: MouseEvent | TouchEvent) => void
) => {
  const notClickableRef: RefObject<T> = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      const isOutside =
        notClickableRef.current && !notClickableRef.current.contains(target);
      if (!isOutside) return;

      onClickOutside(e);
    };

    document.addEventListener("touchstart", handleClickOutside, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("touchstart", handleClickOutside, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [notClickableRef, onClickOutside]);

  return notClickableRef;
};

export default useClickOutside;
