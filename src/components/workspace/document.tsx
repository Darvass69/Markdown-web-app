// @ts-types="solid-js"
import { For } from "solid-js";
import * as Markdown from "../markdown/index.ts";
import { // @ts-types="solid-js"
  Component,
  JSX,
} from "solid-js";
import { useWorkspaceContext } from "./workspace.tsx";
import { makeReactive } from "../markdown/text.tsx";

export type Document = {
  title: string;
  extraId?: number;
  body: AnyElement[];
  component?: Component;
  children: Document[];
};

// https://github.github.com/gfm/
export enum ElementType {
  // Leaf blocks
  Divider,
  Header,
  Codeblock,
  //HTMLBlock
  //LinkReferenceDefinition
  Paragraph,
  //BlankLine
  //Table

  // Container blocks
  Blockquote,
  List,
  ListItem,

  // Inline
  Link,
  Image,
  Text,
  InlineCode,
  TextDecorator, // bold, italic, strikethrough, highlight, subscript, superscript
  // Footnote,

  //~Table
  // Table,
  // TableRow,
  // TableCell,
}

type DefineChildren<Children> = [Children] extends [never] ? {}
  : {
    children: (Children extends { "": any } ? Children[""]
      : Children)[];
  };

type DocumentElement<Type extends ElementType, Children> = {
  type: Type;
} & DefineChildren<Children>;

/* -------------------------------- Elements -------------------------------- */

// LeafElement
export type Divider = DocumentElement<ElementType.Divider, never>;

export type Header =
  & DocumentElement<
    ElementType.Header,
    { "": InlineElement }
  >
  & { level: 1 | 2 | 3 | 4 | 5 | 6 };

export type Codeblock = DocumentElement<
  ElementType.Codeblock,
  string
>;

export type Paragraph = DocumentElement<
  ElementType.Paragraph,
  { "": InlineElement }
>;

// ContainerElement
export type Blockquote = DocumentElement<
  ElementType.Blockquote,
  { "": AnyElement }
>;

export type List =
  & DocumentElement<
    ElementType.List,
    { "": ListItem }
  >
  & { ordered?: boolean };

export type ListItem = DocumentElement<
  ElementType.ListItem,
  { "": AnyElement }
>;

// InlineElement
export type Link =
  & DocumentElement<
    ElementType.Link,
    string
  >
  & { href: string };

export type Image =
  & DocumentElement<
    ElementType.Image,
    string
  >
  & { href: string };

export type Text =
  & DocumentElement<
    ElementType.Text,
    never
  >
  & { text: string };

export type InlineCode =
  & DocumentElement<
    ElementType.InlineCode,
    never
  >
  & { text: string };

/* --------------------------------- Groups --------------------------------- */

type TextDecorator = never;

export type AnyElement =
  | Divider
  | Header
  | Codeblock
  // | HTMLBlock
  // | LinkReferenceDefinition
  | Paragraph
  // | BlankLine
  // | Table
  | Blockquote
  | List
  | ListItem
  | Link
  | Image
  | Text
  | InlineCode
  | TextDecorator;

export type LeafElement =
  | Divider
  | Header
  | Codeblock
  // | HTMLBlock
  // | LinkReferenceDefinition
  | Paragraph;
// | BlankLine
// | Table

export type ContainerElement =
  | Blockquote
  | List
  | ListItem;

export type InlineElement =
  | Link
  | Image
  | Text
  | InlineCode
  | TextDecorator;

/* --------------------------------- Render --------------------------------- */
//TODO better separation between data and render

function RenderDocumentElement(element: AnyElement): JSX.Element {
  switch (element.type) {
    // LeafElement
    case ElementType.Divider: {
      return Markdown.Divider();
    }
    case ElementType.Header: {
      return Markdown.Header({ level: element.level, children: element.children.map((child) => RenderDocumentElement(child)) });
    }
    case ElementType.Codeblock: {
      return Markdown.Codeblock({ children: element.children.join() });
    }
    case ElementType.Paragraph: {
      return Markdown.P({ children: element.children.map((child) => RenderDocumentElement(child)) });
    }

    // ContainerElement
    case ElementType.Blockquote: {
      return Markdown.Blockquote({ children: element.children.map((child) => RenderDocumentElement(child)) });
    }
    case ElementType.List: {
      return Markdown.List({ ordered: element.ordered, children: element.children.map((child) => RenderDocumentElement(child)) });
    }
    case ElementType.ListItem: {
      return Markdown.ListElement({ children: element.children.map((child) => RenderDocumentElement(child)) });
    }

    // InlineElement
    case ElementType.Link: {
      return Markdown.Link({ href: element.href, children: element.children.join() });
    }
    case ElementType.Image: {
      return Markdown.Image({ href: element.href, children: element.children.join() });
    }
    case ElementType.Text: {
      return Markdown.Text({ text: makeReactive(element, "text") });
    }
    case ElementType.InlineCode: {
      return Markdown.InlineCode({ children: element.text });
    }
  }
}

export function RenderDocument(document: Document) {
  const [workspace, setWorkspace] = useWorkspaceContext();

  if (document.component !== undefined) {
    return document.component({});
  }
  return (
    <>
      <div style={{ "white-space": "pre-wrap", "font-family": "monospace" }}>
        {JSON.stringify(workspace.documents[0], undefined, 4)}
      </div>

      <h1 class="title">{document.title}</h1>
      <For each={document.body}>
        {(element) => RenderDocumentElement(element)}
      </For>
    </>
  );
}

/* -------------------------------------------------------------------------- */

type MissingElements = Exclude<ElementType, AnyElement extends { type: infer U } ? U : never>;
// type MissingElementsInMap = Exclude<ElementType, keyof typeof componentMap>;

const assertAllDocumentElementsHandled: MissingElements extends never ? true
  : ["Missing types in AnyDocumentElement:", MissingElements] = true;

// const mapAssertAllDocumentElementsHandled: MissingElementsInMap extends never ? true
//   : ["Missing types in componentMap:", MissingElementsInMap] = true;
