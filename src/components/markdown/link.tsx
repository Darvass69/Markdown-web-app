export type LinkProps = {
  href: string;
  children: string;
};

export function Link(props: LinkProps) {
  return (
    <div>
      <a href={props.href}>{props.children}</a>
    </div>
  );
}

//TODO change from image to embed. This way we can embed more than just images, like links to other pages and stuff like that.
export function Image(props: LinkProps) {
  return <img src={props.href} alt={props.children} />;
}
