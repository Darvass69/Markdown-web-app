#



-> data
-> UI components

basic data -> template -> UI

what if we want to change the UI based on the data?
	data defines the UI (instead of template)
	useful in the case the data is a page, with a template of its own, or if its an element that knows how to render itself (in the current context)

Data types

- Document/page
	- Full page, ~~contains a template and a where to get the data to fill the template~~ The template is in the data itself. 

- Data base
	- Take a template, and use data from the database to resolve






Do we want a strict parent-child relationship, or tags?

I want tags, but:
	some tags should have a page linked so that we can have a page that renders the pages in the tag (so we can have like notion) (if its just normal tags, you don't have a page that contains all the pages in the tag, so you can't see them and do like notion, you can only link them)

To achieve that, we will need a special tag that acts like the main tag (like the path to the page). Like project/folder. But that means that a page that acts like a main page can only act as 1 main page, because you need to render project/folder/*, so you can't be linked with project/folder2/\*. So we need a way to template that? Are we ever going to want to do something like that? I think the closest we are going to get to would be crating a template for pages like that, but using the specific page at multiple places probably won't happen.
It could happen if we have a page for a sub project, and we want to put that page at multiple places, but in that case, its going to have 1 main tag, then secondary tags for each copies. If for some reason we don't want it to be linked to a main tag, but render stuff, it can just be a template.

So, pages don't care if they have a main tag, but tags care if they have a page.

So we need to link tags to pages.

tag [1] -- [1] render page

In the tag view
	show tag structure like folders. When you click a tag, 2 cases:
1. it has a render page
	- Show the page.
	- The page HAS to handle sub tags in some way. (we might want some ways to split them or something so we can handle some of them, then render the rest in a different part)
	- It can also handle sub sub tags. Ex: tag: `projects/*`, we can have a table that show sub tags `projects/project1` and sub sub tags `projects/project1/task1` (and each sub tags and sub sub tags can have their own pages)
2. it doesn't have a render 
	- use a default template to show the sub tags

Not every page needs a tag like this, and not every tag needs a page.




we need a way to transform data from one shape to another so we can use it in more context. Example: a transformer to split a document in headers so we can make an outline for it.


maybe tags could be scoped in some way so we can suggest them better.
We might not want our tags to handle projects inside our docs

So tags are ressources? And we can add tag bundles to directories?


How can we filter through pages to find tags? We would need a pretty good way to handle data so we can do that. Maybe indexing?
```
Page {
	title: string
	body: PageElement[]
}

Document {
	title: string
	body: DocElement[]
}
```
How do we handle layouts? Like navbar and such? Pages are just like normal data, and we have the layout use `render()` on that part of the data.

That means we need to develop:
1. A framework to render data
2. A way to handle data gracefully
3. A good data structure for documents and pages and stuff


# Framework

## Components

### Layout

+ top bar
	+ options (like vs code)
		+ file
			+ new file
			+ open file
			+ add workspace
			+ save workspace, file, ...
			+ share
			+ close
			+ exit
		+ edit
			+ undo/redo
			+ cut/copy/paste
			+ find/replace
			+ toggle line comment/toggle block comment/Emmet
		...
	+ search (general + commands (ctrl + shift + p))
	+ go back/forward
	+ layout options
	+ collapse sidebar
	+ bookmarks?
	+ file tabs (like obsidian)
	+ select view mode (~~source~~, edit (with live preview), reading)
+ sidebar (left)
	+ select side content view
		+	folder 
		+ search (in project)
		+ bookmarks
		+ changelog? (like commit history?)
		+ extensions?
	+ commands? (like shortcuts?)
+ side content (left)
	+ content from selection
+ side content (right)
	+ links
	+ tags
	+ properties
	+ outline

### Markdown
+ Headers (+ folding)
+ paragraphs (+indent)
+ bold, italic, strikethrough, superscript, subscript, highlight/text color
+ divider
+ image, embed
+ ul, ol, li (+ indent)
+ checkbox
+ footnote
+ meta data

### Other
+ kanban/trello
+ table view + data + automations

## Data handlers/stores

+ Global data store (+ ways to access the data inside)
	+ store page data
	+ store data tables (array of pages)
+ transformers
	A way to transform data from one structure to another. That way, we can derive properties from other properties.
+ Access data relative to page path?

# Data structure

Idea:
Separate things by concepts. Multiple axes.
+ Projects (each project has its own tag in projects)
+ Subjects (each subject (like prog, music, etc) has its own tag. Tag projects with subjects?)
	? `/programming/web/language:TS;framework:Solid.js`
	? `/programming/language:C++`
	? `/programming/language:Go`




# {data.title}
{data.desc}
<List>data.list, data.template</List>

<Document>document</Document>
<Preview>document</Preview>