import { useEventListener } from "./useEventListener";

export const useClickOutside = (ref: any, cb: (e: any) => void) => {
  useEventListener(
    "click",
    (e: any) => {
      if (ref.current == null || ref.current.contains(e.target)) return;
      cb(e);
    },
    document
  );
};
