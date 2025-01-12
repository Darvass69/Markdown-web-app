import { H1 } from "../../markdown/headers.tsx";
import { P } from "../../markdown/paragraph.tsx";
import "../../markdown/markdown.scss";
import { Image, Link } from "../../markdown/link.tsx";
import { Divider } from "../../markdown/divider.tsx";
import {
  CheckedList,
  CheckedListElement,
  Ol,
  OlElement,
  Ul,
  UlElement,
} from "../../markdown/list.tsx";
import { Blockquote } from "../../markdown/blockquote.tsx";
import { Codeblock } from "../../markdown/codeblock.tsx";
import { InlineCode } from "../../markdown/inlineCode.tsx";

export function TestContent() {
  // Assume we are creating this from markdown

  return (
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
      <Ul>
        <UlElement>A</UlElement>
        <UlElement>B</UlElement>
        <UlElement>C</UlElement>
      </Ul>
      <Ol>
        <OlElement>A</OlElement>
        <OlElement>B</OlElement>
        <OlElement>C</OlElement>
      </Ol>
      <CheckedList>
        <CheckedListElement>A</CheckedListElement>
        <CheckedListElement>B</CheckedListElement>
        <CheckedListElement>C</CheckedListElement>
      </CheckedList>

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
  );
}
