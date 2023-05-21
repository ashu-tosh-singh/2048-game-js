import { useEffect } from "react";

export default function useEvent(event, handler, passive = false) {
  useEffect(() => {
    window.addEventListener(event, handler, passive);

    return function clearUp() {
      window.removeEventListener(event, handler, passive);
    };
  });
}
