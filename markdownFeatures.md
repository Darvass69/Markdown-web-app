This is a paragraph.

This is also a paragraph.

    But I want this one to be indented (and not a code block)

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

**bold** **bold**

_italic_ _its not Italian_

~~strikethrough~~

~6~6^6^

---

[name of a link](https://github.com)
![some alt text if the image doesn't load](./src/assets/solid.svg)

---

---

---

1. This
2. Is
3. An
4. Ordered
5. List
6. 📄

- This
- Is

* Unordered

- List

1. Learn Basics
   1. HTML
   2. CSS
   3. Javascript
2. Learn One Framework
   - React
     - Router
     - Redux
   * Vue
   - Svelte

---

- [x] Learn Markdown
- [ ] Learn Frontend Development
- [ ] Learn Full Stack Development

---

#### I am working on a new project. [^1]

[^1]: Stack is: React, Typescript, Tailwind CSS

Project is about music & movies.

##### Hope you will like it. [^see]

[^see]: Loading... ⌛️

---

> This is a blockquote. Want to write on a new line with space between?
>
>> And nested? No problem at all.
>>
>>> PS. you can **style** your text _as you want_.

---

```
Codeblock
```

and `inline code`

---

| Left Align (default) | Center Align | Right Align |
| :------------------- | :----------: | ----------: |
| React.js             |   Node.js    |       MySQL |
| Next.js              |   Express    |     MongoDB |
| Vue.js               |   Nest.js    |       Redis |

---

[Jump to a section with custom ID](#some-id)

...

<a name="some-id" />

##### Section with some ID

---

# Source and questions

[source](https://github.com/im-luka/markdown-cheatsheet)

What is this? We can set some variables for links and then use them later? Thats
pretty cool.

```
[markdown-cheatsheet]: https://github.com/im-luka/markdown-cheatsheet
[docs]: https://github.com/adam-p/markdown-here

[Like it so far? Follow me on GitHub](https://github.com/im-luka)
[My Markdown Cheatsheet - star it if you like it][markdown-cheatsheet]
Find some great docs [here][docs]
```

---

Can we make up an easy syntax for this?

[Jump to a section with custom ID](#some-id)

...

<a name="some-id">Section</a>

Maybe something like this?

[Jump to a section with custom ID](#custom-id)

### My Great Heading {#custom-id}

__

# Elements

- [ ] Headers
- [ ] Paragraph
  - [ ] Indent
- [ ] Text formatting
  - [ ] Bold
  - [ ] Italic
  - [ ] Strikethrough
  - [ ] Highlight (==a==)
- [ ] Scripts
  - [ ] Superscript
  - [ ] Subscript
- [ ] Inline code
- [ ] Link
- [ ] Embed
- [ ] Divider
- [ ] List
  - [ ] Unordered
  - [ ] Ordered
  - [ ] Checkbox
- [ ] Footnotes
- [ ] Blockquote
  - [ ] Indent
- [ ] Codeblock
  - [ ] Indent
- [ ] Table

## Nesting rules

- Headers
  - Nothing
- Paragraph
  - Everything except maybe `Embed`
- Text formatting
  - Text formatting
  - Scripts
- Scripts
  - Text formatting (no Scripts)
- Inline code
  - Nothing
- Link
  - Text formatting
  - Footnotes
- Embed
  - Nothing
- Divider
  - Nothing
- List
  - Everything except maybe `Embed`
- Footnotes
  - Everything?
- Blockquote
  - Everything?
- Codeblock
  - Text only, no formatting.
- Table
  - Everything? Just text?


#### I am working on a new project. [^2]

[^2]: a
    # A Title