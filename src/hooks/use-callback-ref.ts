import * as React from "react";

/**
 * React hook to persist any value between renders,
 * but keeps it up-to-date if it changes.
 *
 * @param value the value or function to persist
 */
export function useCallbackRef<T extends (...args: any[]) => any>(
  fn: T | undefined,
  deps: React.DependencyList = []
): T {
  const ref = React.useRef(fn);

  React.useLayoutEffect(() => {
    ref.current = fn;
  });

  return React.useCallback(((...args) => ref.current?.(...args)) as T, deps);
}
