import { FlowProps, ParentProps, Show } from "solid-js";
import { Dynamic } from "solid-js/web";

export type ListProps = ParentProps & {
  ordered?: boolean;
};

export type A = FlowProps<{}, typeof ListElement>;

export function List(props: ListProps) {
  return (
    <>
      <Dynamic component={props.ordered ? "ol" : "ul"}>
        {props.children}
      </Dynamic>
    </>
  );
}

export type ListElementProps = ParentProps & {
  checkbox?: boolean;
};

export function ListElement(props: ListElementProps) {
  return (
    <>
      <li>
        <Show when={props.checkbox}>
          <input type="checkbox"></input>
        </Show>
        {props.children}
      </li>
    </>
  );
}
