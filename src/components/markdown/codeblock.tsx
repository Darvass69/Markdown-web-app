export type CodeblockProps = {
  children?: string;
};

export function Codeblock(props: CodeblockProps) {
  return <pre><code>{props.children}</code></pre>;
}
