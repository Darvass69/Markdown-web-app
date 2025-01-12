import { ParentProps } from "solid-js";

export function Ul(props: ParentProps) {
  return (
    <ul>
      {props.children}
    </ul>
  );
}

export function UlElement(props: ParentProps) {
  return (
    <li>
      {props.children}
    </li>
  );
}

/* -------------------------------------------------------------------------- */

export function Ol(props: ParentProps) {
  return (
    <ol>
      {props.children}
    </ol>
  );
}

export function OlElement(props: ParentProps) {
  return (
    <li>
      {props.children}
    </li>
  );
}

/* -------------------------------------------------------------------------- */

export function CheckedList(props: ParentProps) {
  return (
    <ul class="checked-list">
      {props.children}
    </ul>
  );
}

export function CheckedListElement(props: ParentProps) {
  return (
    <li class="checked-list-element">
      <input type="checkbox"></input>
      {props.children}
    </li>
  );
}
