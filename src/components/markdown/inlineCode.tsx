export type InlineCodeProps = {
  children?: string;
};

export function InlineCode(props: InlineCodeProps) {
  return <code>{props.children}</code>;
}
