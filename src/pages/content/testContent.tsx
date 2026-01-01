import {
  Blockquote,
  Codeblock,
  Divider,
  Image,
  InlineCode,
  Link,
  List,
  ListElement,
  P,
} from "../../components/markdown/index.ts";
import { H1 } from "../../components/markdown/headers.tsx";

export function TestContent() {
  // Assume we are creating this from markdown

  return (
    <>
      <h1 class="title">Test content</h1>
      <label for="markdown-file">Markdown file</label>
      <br />
      <input type="file" id="markdown-file" />
      <div class="markdown-document">
        <H1>
          Child content
        </H1>
        <P>
          This is a paragraph.
        </P>
        <P>
          This is a paragraph.<br />
          With a new line.
        </P>
        <Divider />
        <P>
          This is a paragraph.
        </P>
        <Link href="https://placehold.co/600x400/213547/FFFFFF?font=roboto&text=Placeholder">
          Text with a link
        </Link>
        <Link href="#some-id">
          Jump to a section with custom ID
        </Link>
        <Image href="https://placehold.co/600x400/213547/FFFFFF?font=roboto&text=Placeholder">
          Alt text for the image
        </Image>
        <Divider />
        <List>
          <ListElement>A</ListElement>
          <ListElement>B</ListElement>
          <ListElement>C</ListElement>
        </List>
        <List ordered>
          <ListElement>A</ListElement>
          <ListElement>B</ListElement>
          <ListElement>C</ListElement>
        </List>
        <List>
          <ListElement checkbox>A</ListElement>
          <ListElement checkbox>B</ListElement>
          <ListElement checkbox>C</ListElement>
        </List>

        <P>
          Normal paragraph
        </P>
        <Blockquote>
          This is a blockquote.<br />
          Want to write on a new line with space between?
          <Blockquote>
            And nested? No problem at all.
            <Blockquote>
              PS. you can **style** your text _as you want_.
            </Blockquote>
          </Blockquote>
        </Blockquote>

        <Codeblock>
          {`const const a = 2!\na += 2!`}
        </Codeblock>
        <P id="some-id">
          This text contains <InlineCode>inline code</InlineCode>.
        </P>
      </div>
    </>
  );
}
