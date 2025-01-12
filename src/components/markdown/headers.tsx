import { JSX, ParentProps } from "solid-js";
import { Dynamic } from "solid-js/web";

export type HeaderProps = {
  children?: JSX.Element;
};

type HeaderBaseProps = HeaderProps & { level: 1 | 2 | 3 | 4 | 5 | 6 };

export function Header(props: HeaderBaseProps) {
  const headerLevel = `h${props.level}`;

  return (
    <Dynamic component={headerLevel} class={`h${props.level}`}>
      {props.children}
    </Dynamic>
  );
}

//TODO Remove those stupid components. When we are going to parse the Markdown, we'll just use `Header`

export function H1(props: HeaderProps) {
  return (
    <Header level={1}>
      {props.children}
    </Header>
  );
}

export function H2(props: HeaderProps) {
  return (
    <Header level={2}>
      {props.children}
    </Header>
  );
}

export function H3(props: HeaderProps) {
  return (
    <Header level={3}>
      {props.children}
    </Header>
  );
}

export function H4(props: HeaderProps) {
  return (
    <Header level={4}>
      {props.children}
    </Header>
  );
}

export function H5(props: HeaderProps) {
  return (
    <Header level={5}>
      {props.children}
    </Header>
  );
}

export function H6(props: HeaderProps) {
  return (
    <Header level={6}>
      {props.children}
    </Header>
  );
}
