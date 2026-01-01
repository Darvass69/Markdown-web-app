import { Workspace } from "./workspace.tsx";
import { ElementType as Elements } from "./document.tsx";
import { TestContent } from "../../pages/content/testContent.tsx";
import { FileContent } from "../../pages/content/fileContent.tsx";
import { DynamicContent } from "../../pages/content/dynamicContent.tsx";

export const defaultWorkspace: Workspace = {
  settings: {},
  documents: [
    {
      title: "Test edit",
      body: [
        {
          type: Elements.Header,
          level: 1,
          children: [{ type: Elements.Text, text: "Header 1" }],
        },
      ],
      children: [],
    },
    {
      title: "Test content",
      body: [],
      component: TestContent,
      children: [],
    },
    {
      title: "File content",
      body: [],
      component: FileContent,
      children: [],
    },
    {
      title: "Dynamic content",
      body: [],
      component: DynamicContent,
      children: [],
    },
    {
      title: "Test page",
      body: [
        {
          type: Elements.Divider,
        },
        {
          type: Elements.Header,
          level: 1,
          children: [{ type: Elements.Text, text: "Header 1" }],
        },
        {
          type: Elements.Codeblock,
          children: [`case ElementType.Codeblock: {\n\treturn Markdown.Codeblock({children: element.children.join()})\n}`],
        },
        {
          type: Elements.Paragraph,
          children: [{ type: Elements.Text, text: "This is a paragraph." }],
        },
        {
          type: Elements.Blockquote,
          children: [
            { type: Elements.Text, text: "This is a paragraph." },
            {
              type: Elements.Header,
              level: 1,
              children: [{ type: Elements.Text, text: "Header 1" }],
            },
          ],
        },
        {
          type: Elements.List,
          children: [
            {
              type: Elements.ListItem,
              children: [
                { type: Elements.Text, text: "This is a paragraph." },
              ],
            },
            {
              type: Elements.ListItem,
              children: [
                { type: Elements.Text, text: "This is a paragraph." },
              ],
            },
          ],
        },
        {
          type: Elements.List,
          ordered: true,
          children: [
            {
              type: Elements.ListItem,
              children: [
                { type: Elements.Text, text: "This is a paragraph." },
              ],
            },
            {
              type: Elements.ListItem,
              children: [
                { type: Elements.Text, text: "This is a paragraph." },
              ],
            },
          ],
        },
        {
          type: Elements.Link,
          href: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnewseu.cgtn.com%2Fnews%2F2022-07-13%2F-NASA-releases-spectacular-new-images-from-James-Webb-Space-Telescope-1bClnBF50xW%2Fimg%2Fbf7ef47e8fc54e46a6a9ed2053f4ddf5%2Fbf7ef47e8fc54e46a6a9ed2053f4ddf5-1920.jpeg&f=1&nofb=1&ipt=01613a20c96e14fce2d822226ac6f3925f218c4a318aa621566366c8e5a7e155",
          children: ["Some link"],
        },
        {
          type: Elements.Image,
          href: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnewseu.cgtn.com%2Fnews%2F2022-07-13%2F-NASA-releases-spectacular-new-images-from-James-Webb-Space-Telescope-1bClnBF50xW%2Fimg%2Fbf7ef47e8fc54e46a6a9ed2053f4ddf5%2Fbf7ef47e8fc54e46a6a9ed2053f4ddf5-1920.jpeg&f=1&nofb=1&ipt=01613a20c96e14fce2d822226ac6f3925f218c4a318aa621566366c8e5a7e155",
          children: ["Image"],
        },
        {
          type: Elements.Text,
          text: "Some text\n",
        },
        {
          type: Elements.InlineCode,
          text: "Some code",
        },
      ],
      children: [],
    },
    {
      title: "With child",
      body: [],
      children: [
        {
          title: "With child",
          body: [],
          children: [
            {
              title: "Without child",
              body: [],
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
