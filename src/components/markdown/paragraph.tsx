import { ComponentProps, ParentProps } from "solid-js";

export function P(props: ParentProps & ComponentProps<"p">) {
  return <p {...props}>{props.children}</p>;
}
