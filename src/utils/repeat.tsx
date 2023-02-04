import { ComponentType } from "react";

export function repeat(Component: ComponentType, n: number) {
  const components: ComponentType[] = [];

  for (let i = 0; i < n; i++) {
    components.push(Component);
  }

  return (
    <>
      {components.map(Component => (
        <Component />
      ))}
    </>
  );
}