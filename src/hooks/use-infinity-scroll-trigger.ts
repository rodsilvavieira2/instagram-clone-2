import { useCallback, useRef } from "react";

type UserInfinityScrollTriggerParams = {
  handler: () => void;
  config?: IntersectionObserverInit & {
    unobserveOnIntersect?: boolean;
  };
};

export function useInfinityScrollTrigger({
  handler,
  config,
}: UserInfinityScrollTriggerParams) {
  const observer = useRef<IntersectionObserver>();

  const elementRef = useCallback(
    (node: Element | null) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          handler();

          if (config?.unobserveOnIntersect && node) {
            observer.current?.unobserve(node);
          }
        }
      }, config);

      if (node) observer.current.observe(node);
    },
    [handler, config]
  );

  return [elementRef];
}
