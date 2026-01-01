// This is a component that can be edited
// It updates the

import { JSX } from "solid-js";

// TODO we might want to "storify" primitives so we can use them. Everything that isn't an abject should be wrapped inside `{value: T}` so we can create stores from them

type EditableProps = {
  as?: keyof JSX.IntrinsicElements;
};

export function Editable(props: EditableProps) {
  return <Dynamic component={props.as ?? "div"} {...props} />;
}
