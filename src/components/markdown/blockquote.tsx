import { ParentProps } from "solid-js";

export function Blockquote(props: ParentProps) {
  return (
    <blockquote>
      {props.children}
    </blockquote>
  );
}
